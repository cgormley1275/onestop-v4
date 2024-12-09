import React from "react";
import ProfileFriends from "./ProfileFriends.tsx"
import ProfileInfo from "./ProfileInfo.tsx"
import ProfilePosts from "./ProfilePosts.tsx"
import { useSelector } from "react-redux";
import Nav from "../Nav/index.tsx";
import { Link } from "react-router-dom";

export default function Profile() {
    const { currentUser } = useSelector((state: any) => state.userReducer);
    return (
        <div >
            <Nav />
            <h1>Profile</h1>
            <Link to="/createPost">
                <button>Create New Post</button>
            </Link>

            <div className="flex w-full h-screen">
                <ProfileInfo />
                <ProfilePosts />
                <ProfileFriends />
            </div>
            <div>hello {currentUser.username}</div>
        </div>
    )
}