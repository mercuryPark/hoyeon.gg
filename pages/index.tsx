import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "../util/axios.instance";
import { useState, useEffect } from "react";

interface chellengerLangkedEntries {
    leaguePoints: number;
}

export default function Index() {
    const [chellengerGroup, setChellengerGroup] = useState();

    // * 챌린저 랭킹 api
    const chellengersLanked = () => {
        axios
            .get(
                "https://kr.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5"
            )
            .then((res) => {
                setChellengerGroup(
                    res.data.entries.sort(
                        (
                            a: chellengerLangkedEntries,
                            b: chellengerLangkedEntries
                        ) => {
                            return b.leaguePoints - a.leaguePoints;
                        }
                    )
                );
                console.log(chellengerGroup);
            });
    };

    return (
        <>
            <div>
                <button onClick={chellengersLanked}>테스트버튼</button>
            </div>
        </>
    );
}
