import { useState } from "react";
import axios from "axios";

export function PostForm() {
    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const submittedTitle = form.title.value;
        const submittedBody = form.body.value;
        const headers = {
            Authorization: "Bearer 42db1b4663ffe660df38218f45929a0ceb81118f9ffd370d2802925ac20dd8f9",
            Accept: "application/json"
        };
        try {
            const response = await axios.post("https://gorest.co.in/public/v2/posts", { title: submittedTitle, body: submittedBody, user_id: 123 }, { headers });
            console.log(response.data);
            form.reset();
        } catch (error) {
            console.error(error.response?.data || error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 rounded-lg">
            <input className="bg-white text-black border p-2 rounded" name="title" placeholder="title" />
            <input className="bg-white text-black border p-2 rounded" name="body" placeholder="body" />
            <button className="bg-blue-600 text-white p-2 rounded cursor-pointer" type="submit">Ajouter</button>
        </form>
    );
}