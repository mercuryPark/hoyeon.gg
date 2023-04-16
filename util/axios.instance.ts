import React from "react";
import axios from "axios";
// import { getSession, signOut } from "next-auth/react"
import { useState, useEffect } from "react";
// import { toast, ToastContainer } from "react-toastify"
// import { setAccessToken, getAccessToken, removeAccessToken } from "../store/cookies"

const baseURL = process.env.RIOT_API_URL;
const ApiClient = () => {
    const defaultOptions = {
        baseURL,
        headers: {
            // "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            // "Accept-Encoding": "identity",
            // "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
        },
    };
    const instance = axios.create(defaultOptions);
    instance.interceptors.request.use(async (req: any) => {
        const apiKey: any = process.env.RIOT_API_KEY;
        try {
            const url = new URL(req.url);

            // https://na1.api.riotgames.com 추가
            url.protocol = "https";
            url.host = "na1.api.riotgames.com";

            // url 파라미터에 api_key 추가
            url.searchParams.set("api_key", apiKey);

            req.url = url.toString();
        } catch (error) {
            console.error(error);
        }
        // 사용할 API 키

        return req;
    });
    instance.interceptors.response.use(
        (res) => {
            return res;
        },
        (err) => {
            const result = err.response;
            let errMessage: string = "";

            return Promise.reject(err);
        }
    );

    return instance;
};

export default ApiClient();
