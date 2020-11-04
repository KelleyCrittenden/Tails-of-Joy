import { useParams, Link, useHistory } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Card, CardImg, CardBody, Row, ListGroup, Col, Button, CardSubtitle } from "reactstrap";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { PostContext } from "../../providers/PostProvider";
import { CommentContext } from "../../providers/CommentProvider"
import Comment from "../comment/Comment"
import DayJS from 'react-dayjs';
import "./post.css"

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
            <div className="animalDetailsCardContainer">
                <Card className="m-auto d-flex flex-row mt-4">
                    <CardImg className="animalDetailImg w-50" src={post.imageLocation} alt={post.title} />
                    <CardBody>
                        <div>
                            <div>
                                <h2>{post.title}</h2>
                                <p>Posted: <DayJS format="MMM D, YY h:mm A">{post.createDateTime}</DayJS></p>
                            </div>
                        </div>

                        <p className="postTextarea" style={{ whiteSpace: "pre-wrap" }}>{post.content}</p>
                        <Button style={{ margin: 2 }} onClick={Cancel}>Back</Button>

                        {(currentUser === post.userProfileId) ?
                            <>
                                <Button style={{ margin: 2 }} onClick={() => history.push(`/post/edit/${post.id}`)}>Edit</Button>
                                <Button color="danger" style={{ margin: 2 }} onClick={() => history.push(`/post/delete/${post.id}`)}>Delete</Button>
                            </>
                            :
                            null}
                    </CardBody>
                </Card>
                <div>
                    <Button style={{ margin: 10 }} color="success" id="addCommentButton" onClick={addCommentButton}> Add Comment </Button>
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
                </div>
            </div>
        </>
    );
}

export default PostDetails;