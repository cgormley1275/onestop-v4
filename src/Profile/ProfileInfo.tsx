import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../SignIn/reducer.ts";
import * as client from "./client.ts";

export default function ProfileInfo(profileUsername?) {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.userReducer);
    const [updateUser, setUpdateUser] = useState(currentUser);
    const [editing, setEditing] = useState(false)
    const [profileUser, setProfileUser] = useState<any>();
    const saveProfileChanges = () => {
        const uid = currentUser._id
        const likes = currentUser.likes
        dispatch(setCurrentUser({ ...updateUser, likes: likes }));
        client.updateUser(uid, updateUser)
        setEditing(false);
    }

    const findUserByUsername = async (username: string) => {
        let response = {}
        if (profileUsername.profileUsername) {
            response = await client.findUserByUsername(profileUsername.profileUsername);
        } else {
            response = currentUser;
        }
        setProfileUser(response);
    }

    useEffect(() => {
        findUserByUsername(currentUser.username);
    }, []);
    return (
        <div className="w-3/12 flex justify-center relative overflow-hidden">
            <div>Profile Info</div>
            <div>Profile: {`${profileUsername.profileUsername}`}</div>
            <img src="" alt="" />
            {!editing && <div>
                {profileUsername.profileUsername && profileUser ? <div>{profileUser.firstName}</div> : <div>{currentUser.firstName}</div>}
                {profileUsername.profileUsername && profileUser ? <div>{profileUser.lastName}</div> : <div>{currentUser.lastName}</div>}
                {profileUsername.profileUsername && profileUser ? <div>{profileUser.email}</div> : <div>{currentUser.email}</div>}
                {profileUsername.profileUsername && profileUser ? <div>{profileUser.username}</div> : <div>{currentUser.username}</div>}
                {profileUsername.profileUsername && profileUser ? <div>{profileUser.role}</div> : <div>{currentUser.role}</div>}
                {!profileUsername.profileUsername && <button onClick={(() => { setEditing(!editing) })}>Edit Profile Info</button>}
            </div>}
            {editing && <div>
                <label htmlFor="first_name">First Name:</label>
                <input id="first_name" type="text" defaultValue={currentUser.firstName}
                    onChange={((e) => { setUpdateUser({ ...updateUser, firstName: e.target.value }) })} />
                <br />
                <label htmlFor="last_name">Last Name:</label>
                <input id="last_name" type="text" defaultValue={currentUser.lastName}
                    onChange={((e) => { setUpdateUser({ ...updateUser, lastName: e.target.value }) })} />
                <br />
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" defaultValue={currentUser.email}
                    onChange={((e) => { setUpdateUser({ ...updateUser, email: e.target.value }) })} />
                <div>{currentUser.username}</div>
                <label htmlFor="role">Role:</label>
                <select id="role" className="form-control"
                    onChange={((e) => { setUpdateUser({ ...updateUser, role: e.target.value }) })}>
                    {currentUser.role === "ADMIN" ? <option selected value="ADMIN">ADMIN</option> : <option value="ADMIN">ADMIN</option>}
                    {currentUser.role === "PREMIUM" ? <option selected value="PREMIUM">PREMIUM</option> : <option value="PREMIUM">PREMIUM</option>}
                    {currentUser.role === "BASIC" ? <option selected value="BASIC">BASIC</option> : <option value="BASIC">BASIC</option>}
                </select>
                <button onClick={(() => { setEditing(!editing) })}>Cancel</button>
                <button onClick={(() => { saveProfileChanges() })}>Save</button>
            </div>}
        </div>
    )
}
