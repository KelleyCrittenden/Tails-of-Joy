import React, { useEffect, useContext, useState } from "react";
import { PostContext } from "../../providers/PostProvider";
import { useHistory, useParams } from "react-router-dom";
import { Button, Col, CardBody, CardImg } from 'reactstrap'

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
        history.push("/post")
    };

    return (
        <>
            <Col sm="12" md={{ size: 6, offset: 3 }}></Col>

            <p>Are you sure you want to delete this post?</p>


            <Button id={post.id} onClick={handleDelete}>Delete</Button>&nbsp;

            <Button onClick={Cancel}>Cancel</Button>

            <CardBody>

                <h4>{post.title}</h4>
                <h5>{post.content}</h5>
                {/* <h6>Posted By: {post.userProfile.userName}</h6> */}
                <CardImg top src={post.imageLocation} alt={post.title} />

            </CardBody>
        </>
    )

}
export default ConfirmPostDelete;