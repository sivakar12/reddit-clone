import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <NavBar/>
            <div className="container px-3">{children}</div>
        </div>
    )
}
