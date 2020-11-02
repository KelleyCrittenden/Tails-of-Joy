import React, { useEffect, useContext, useState } from "react";
import { PostContext } from "../../providers/PostProvider";
import { useHistory, useParams } from "react-router-dom";
import { Button, Col, CardBody, CardImg, Card } from 'reactstrap'

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
        history.push("/post")
    };

    return (
        <>
            <Card className="userProfileCard">
                <CardBody>

                    <p>Are you sure you want to delete this post?</p>

                    <h4>{post.title}</h4>
                    <h5>{post.content}</h5>
                    {/* <h6>Posted By: {post.userProfile.userName}</h6> */}
                    <CardImg top src={post.imageLocation} alt={post.title} />

                    <Button color="danger" id={post.id} onClick={handleDelete}>Delete</Button>&nbsp;

                    <Button onClick={Cancel}>Cancel</Button>

                </CardBody>
            </Card>
        </>
    )

}
export default ConfirmPostDelete;