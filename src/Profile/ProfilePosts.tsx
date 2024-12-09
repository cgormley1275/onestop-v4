import { useEffect, useState } from "react"
import * as client from "./client.ts";
import React from "react";

export default function ProfilePosts() {
    const currentUser = "mike_lappas1"
    // const currentUser = "test";
    const [posts, setPosts] = useState<any>();
    const getPostsForUser = async (user:String) => {
        const response = await client.findPostsByUser(currentUser);
        setPosts(response);
    }
    useEffect(() => {
        getPostsForUser(currentUser);
    }, []);
    return (
        <div className="w-6">
            <div className="justify-center">Posts</div>
            <br />
            <ul>
                {posts && posts.length > 0 && posts.map((post:any) => (
                    <li className="list-group-item border m-2">
                        {/* <div>{post.photo}</div> */}
                        {/* <img src={`${post.photo}`} alt="" /> */}
                        <div>{post.poster}</div>
                        <div>{post.caption}</div>
                        <div>{post.destinationCity}, {post.destinationCountry}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}