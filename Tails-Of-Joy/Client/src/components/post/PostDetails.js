import { useParams, Link, useHistory } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Card, CardImg, CardBody, Row, ListGroup, Col, Button, CardSubtitle } from "reactstrap";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { PostContext } from "../../providers/PostProvider";
import { CommentContext } from "../../providers/CommentProvider"
import Comment from "../comment/Comment"

const PostDetails = () => {

    const { id } = useParams();
    const history = useHistory();
    const { post, getPostById } = useContext(PostContext);
    const { comments, getAllCommentsForPost } = useContext(CommentContext);
    const { userProfile } = useContext(UserProfileContext);
    const currentUser = JSON.parse(sessionStorage.getItem('userProfile')).id;

    useEffect(() => {
        getPostById(id);

    }, []);

    useEffect(() => {
        getAllCommentsForPost(id)

    }, []);

    const Cancel = () => {
        history.push("/post")
    };

    const addCommentButton = () => {
        history.push(`/comment/add/${id}`)
    }

    return (
        <>

            <div className="postDetailsCardContainer">
                <Card className="m-auto">
                    <CardBody>
                        <div>
                            <div>
                                <h2>{post.title}</h2>
                                <h6>{post.createDateTime}</h6>
                                {/* <Button onClick={() => history.push(`/userProfile/q=${post.userProfile.id}`)}>{post.userProfile.username}'s Profile</Button>
                                <CardSubtitle>By: {post.userProfile.id}</CardSubtitle> */}
                            </div>
                        </div>
                    </CardBody>
                    <CardImg top />

                    <CardImg top src={post.imageLocation} alt={post.title} />
                    <p style={{ whiteSpace: "pre-wrap" }}>{post.content}</p>
                    {(currentUser === post.userProfileId) ?

                        <div>
                            <Button style={{ margin: 10 }} onClick={() => history.push(`/post/edit/${post.id}`)}>Edit</Button>
                            <Button style={{ margin: 10 }} onClick={() => history.push(`/post/delete/${post.id}`)}>Delete</Button>
                        </div>
                        :
                        null}
                    <Button style={{ margin: 10 }} onClick={Cancel}>Cancel</Button>


                    <Button id="addCommentButton" onClick={addCommentButton}> Add Comment </Button>


                    {(comments.length > 0) ?


                        < ListGroup >
                            <h4>Comments: </h4>
                            {
                                comments.map(c =>
                                    < Comment key={c.id} comment={c} />
                                )
                            }
                        </ListGroup>
                        :
                        null
                    }




                </Card>

            </div>
        </>
    );
}

export default PostDetails;