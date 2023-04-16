import { NextPage } from "next";
import React from "react";

type LayoutProps = {
    children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
    return (
        <div>
            {/* your layout here */}
            {children}
        </div>
    );
}

export default Layout;
