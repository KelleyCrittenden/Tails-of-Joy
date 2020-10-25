import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PostContext } from "../../providers/PostProvider";
import Post from "./Post"

export default function PostList() {
    const history = useHistory();
    const { posts, getAllPosts } = useContext(PostContext)

    const Create = () => {
        history.push("post/add")
    }

    useEffect(() => {
        getAllPosts();
    }, []);

    return (

        <section>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </section>

    )
}