import { useEffect, useState } from "react";
import { Post } from "./Post/post.jsx";
import axios from "axios";

export function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const headers = {
            "Authorization": "Bearer 42db1b4663ffe660df38218f45929a0ceb81118f9ffd370d2802925ac20dd8f9",
            "Accept": "application/json"
        };

        axios.get("https://gorest.co.in/public/v2/users", { headers })
            .then((data) => {
                setPosts(data.data);
            });
    }, []);

    return (
        <div className="flex flex-col justify-center items-center gap-6">
            <p>Loading</p>
            {posts.map(post => <Post key={post.id} {...post} />)}
        </div>
    );
}