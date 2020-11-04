import React, { useEffect, useContext, useState } from "react";
import { PostContext } from "../../providers/PostProvider";
import { useHistory, useParams } from "react-router-dom";
import { Button, Col, CardBody, CardImg, Card } from 'reactstrap'
import DayJS from 'react-dayjs';
import "./post.css"

const ConfirmPostDelete = () => {

    const [postToDelete, setPostToDelete] = useState({});
    const { post, getPostById, deletePost } = useContext(PostContext);
    const { id } = useParams();
    const history = useHistory();


    const user = JSON.parse(sessionStorage.getItem("userProfile")).id
    post.userProfileId = user


    const handleDelete = (e) => {
        e.preventDefault();
        deletePost(postToDelete.id)
            .then(() => history.push("/post"))
    };

    useEffect(() => {
        getPostById(id)
    }, []);

    useEffect(() => {
        setPostToDelete(post);
    }, [post]);

    const Cancel = () => {
        history.push(`/post/details/${id}`)
    };

    return (
        <>
            <div className="d-flex justify-content-center">
                <Card style={{ width: "55%", height: "50%", margin: "20px" }} className="smallContainer">
                    <CardBody>

                        <h3 align="center">Are you sure you want to delete your post?</h3>
                        <h5>{post.title}</h5>
                        <p>Posted: <DayJS format="MMM D, YY h:mm A">{post.createDateTime}</DayJS></p>
                        <p className="postTextarea" style={{ whiteSpace: "pre-wrap" }}>{post.content}</p>

                        <Button style={{ margin: 2 }} color="danger" id={post.id} onClick={handleDelete}>Remove</Button>&nbsp;
                        <Button style={{ margin: 2 }} onClick={Cancel}>Cancel</Button>

                    </CardBody>
                </Card>
            </div>
        </>
    )

}
export default ConfirmPostDelete;