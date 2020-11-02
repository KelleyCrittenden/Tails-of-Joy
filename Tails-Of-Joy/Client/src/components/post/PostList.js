import React, { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { PostContext } from "../../providers/PostProvider";
import { Button, ListGroupItem, ListGroup, Table } from "reactstrap";
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
                    <Button onClick={Create}>
                        Add Post
            </Button>
                    <Table className="postTable" striped>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        {posts.map((post => (
                            <tbody key={post.id}>
                                <tr>
                                    <th scope="row">
                                        <Link to={`/post/details/${post.id}`}>{post.title}</Link>

                                    </th>
                                    <td>
                                        {post.createDateTime}
                                    </td>
                                </tr>
                            </tbody>
                        )))}
                    </Table>



                    {/* <ListGroup>
                        <ListGroupItem>
                            {posts.map((post) => (
                                <Post key={post.id} post={post} />
                            ))}
                        </ListGroupItem>
                    </ListGroup> */}

                </div>
            </div>
        </>

    )
}