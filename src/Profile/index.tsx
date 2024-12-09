import React from "react";
import ProfileFriends from "./ProfileFriends.tsx"
import ProfileInfo from "./ProfileInfo.tsx"
import ProfilePosts from "./ProfilePosts.tsx"
import { useSelector } from "react-redux";


export default function Profile() {
    // const currentUser = "mike_lappas";
    // const currentUser = "test";
    const { currentUser } = useSelector((state: any) => state.userReducer);
    return (
        <div >
            <h1>Profile</h1>
            <div className="flex w-full h-screen">
                <ProfileInfo/>
                <ProfilePosts/>
                <ProfileFriends/>
            </div>
            <div>hello {currentUser.username}</div>
        </div>
    )
}