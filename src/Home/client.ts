import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";

export const findAllPosts = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/api/posts/getAllPosts/`);
    return response.data;
}