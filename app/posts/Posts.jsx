    import { useEffect, useState } from "react";
    import axios from "axios";
    import { PostList } from "./PostList/PostList.jsx";
    import { PostForm } from "./PostForm/PostForm.jsx";
    
    export function Posts() {
        return (
            <>
                <PostForm />
                <PostList />
            </>
        );
    }