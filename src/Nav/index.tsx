import React from "react";
import { useLocation } from "react-router";

export default function Nav() {
    const { pathname } = useLocation();
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a href="/">Home</a>
            </li>
            <li className="nav-item">
                <a href="/search">Search</a>
            </li>
            <li className="nav-item">
                <a href="/profile">Profile</a>
            </li>
            <li className="nav-item">
                <a href="/signin">Sign In</a>
            </li>
        </ul>
    )
}