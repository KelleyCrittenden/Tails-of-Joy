import React, { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { PostContext } from "../../providers/PostProvider";
import { Button, ListGroupItem, ListGroup, Table } from "reactstrap";
import DayJS from 'react-dayjs';
import "./post.css";

export default function PostList() {
    const history = useHistory();
    const { posts, getAllPosts } = useContext(PostContext)

    const Create = () => {
        history.push("/post/add")
    }

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row justify-content-left">
                    <Button color="success" onClick={Create}>
                        Add Post
                    </Button>
                    <Table hover className="postTable" striped>
                        <thead>
                            <tr>
                                <th><h4>Title</h4></th>
                                <th><h4>Posted</h4></th>
                                <th><h4>Author</h4></th>
                            </tr>
                        </thead>

                        {posts.map((post => (
                            <tbody className="postTable" key={post.id}>
                                <tr>
                                    <th scope="row">
                                        <Link style={{ color: '#343A40' }} to={`/post/details/${post.id}`}>{post.title}</Link>
                                    </th>
                                    <td>
                                        <p><DayJS format="MMM D, YY h:mm A">{post.createDateTime}</DayJS></p>
                                    </td>
                                    <th scope="row">
                                        <Link style={{ color: '#343A40' }} to={`/userProfile/q=${post.userProfile.id}`}>{post.userProfile.username}</Link>
                                    </th>
                                </tr>
                            </tbody>
                        )))}
                    </Table>
                </div>
            </div>
        </>

    )
}