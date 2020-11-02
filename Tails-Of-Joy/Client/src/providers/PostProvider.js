import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const PostContext = createContext();

export const PostProvider = (props) => {
    const [post, setPost] = useState({});
    const [posts, setPosts] = useState([]);
    const { getToken } = useContext(UserProfileContext);

    const getAllPosts = () =>
        getToken().then((token) => {
            fetch(("/api/post"), {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.json())
                .then(setPosts);
        });

    const getPostById = (id) => {
        console.log("post Id", id)
        return getToken().then((token) => {
            fetch((`/api/post/${id}`), {
                mmethod: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(res => res.json()).then(setPost)
        })
    };

    const addPost = (post) => {
        getToken().then((token) => {
            fetch(("/api/post"), {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(post),
            }).then(getAllPosts)
        });
    }


    const updatePost = (post) => {
        getToken().then((token) => {
            fetch(`/api/post/edit/${post.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(post),
            })
        })
    }

    const deletePost = (id) => {
        return getToken().then((token) => {
            fetch(`/api/post/delete/${id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            })
        })
    }

    return (
        <PostContext.Provider value={{ post, posts, getAllPosts, getPostById, addPost, updatePost, deletePost }}>
            {props.children}
        </PostContext.Provider>
    )

};