import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const CommentContext = createContext();

export const CommentProvider = (props) => {

    const [comment, setComment] = useState({});
    const [comments, setComments] = useState([]);
    const { getToken } = useContext(UserProfileContext);

    const getAllCommentsForPost = (postId) =>
        getToken().then((token) => {
            fetch(("/api/comment/getAllCommentsForPost/${postId}"), {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.json())
                .then(setComments);
        });

    const getCommentById = (id) => {
        return getToken().then((token) => {
            fetch((`/api/comment/${id}`), {
                mmethod: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(res => res.json()).then(setComment)
        })
    };

    const addComment = (comment) => {
        getToken().then((token) => {
            fetch(("/api/comment"), {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(comment),
            }).then(getAllCommentsByPost)
        });
    }


    const updateComment = (comment) => {
        getToken().then((token) => {
            fetch(`/api/comment/${comment.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(comment),
            })
        })
    }

    const deleteComment = (id) => {
        return getToken().then((token) => {
            fetch(`/api/comment/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            })
        })
    }

    return (
        <CommentContext.Provider value={{ comment, comments, getAllCommentsForPost, getCommentById, addComment, updateComment, deleteComment }}>
            {props.children}
        </CommentContext.Provider>
    )

};