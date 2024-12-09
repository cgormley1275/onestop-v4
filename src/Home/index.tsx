import { useEffect, useState } from "react"
import * as client from "./client.ts";
import React from "react";
import { useSelector } from "react-redux";
import Nav from "../Nav/index.tsx";

export default function Home() {
    const [posts, setPosts] = useState<any>();
    const getAllPosts = async () => {
        const response = await client.findAllPosts();
        setPosts(response);
    }
    useEffect(() => {
        getAllPosts();
    }, []);
    return (
        <div>
            <Nav/>
            <div>Home</div>
            <div className="w-6">
                <div className="justify-center">Posts</div>
                <br />
                <ul>
                    {posts && posts.length > 0 && posts.map((post: any) => (
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
        </div>
    )

}