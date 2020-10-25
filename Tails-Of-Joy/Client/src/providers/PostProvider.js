import { useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

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
                .then(setAnimals);
        });

    const getPostById = (id) => {
        return getToken().then((token) => {
            fetch((`/api/post/${id}`), {
                mmethod: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(res => res.json()).then(setPost)
        })
    };

    const addPost = (post) =>
        getToken().then((token) => {
            fetch((`api/post`), {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(res => res.json()).then(setAnimal)
        });

    const updatePost = (post) => {
        getToken().then((token) => {
            fetch(`/api/post/${post.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(post),
            })
        })
    }

    const deletePost = (postId) => {
        return getToken().then((token) => {
            fetch(`/api/post/${postId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
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