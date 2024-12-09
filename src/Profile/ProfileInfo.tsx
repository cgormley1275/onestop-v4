import React from "react"
import { useSelector } from "react-redux";

export default function ProfileInfo() {
    const { currentUser } = useSelector((state: any) => state.userReducer);
    return (
        <div className="w-3/12 flex justify-center relative overflow-hidden">
            <div>Profile Info</div>
            <img src="" alt="" />
            <div>{currentUser.firstName}</div>
            <div>{currentUser.lastName}</div>
            <div>{currentUser.email}</div>
            <div>{currentUser.username}</div>
            <div>{currentUser.role}</div>
        </div>
    )
}