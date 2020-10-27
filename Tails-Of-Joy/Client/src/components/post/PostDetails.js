import { useHistory, useParams, Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Card, CardImg, CardBody, Row, ListGroup, Col, Button } from "reactstrap";
import { PostContext } from "../../providers/PostProvider";
import { CommentContext } from "../../providers/CommentProvider"
import Comment from "../comment/Comment"

const PostDetails = () => {

    const { id } = useParams();
    const history = useHistory();
    const { post, getPostById } = useContext(PostContext);
    const { comments, getAllCommentsForPost } = useContext(CommentContext);
    console.log("comments", comments)

    useEffect(() => {
        getPostById(id);
    }, []);

    useEffect(() => {
        getAllCommentsForPost(id)
    }, []);

    return (
        <>
            <Card className="m-4">
                <Row margin="m-4">
                    <h1><strong>{post.title}</strong></h1>
                </Row>
                <Row margin="m-4">
                    <Col sm="6">
                        <h1>{post.content}</h1>
                    </Col>
                    <Col sm="6">
                        {/* <h4>Posted By: {post.userProfile.username}</h4> */}
                    </Col>
                    <Col sm="6">
                        <h4>Posted On: {post.createDateTime}</h4>
                    </Col>


                </Row>
                <Row margin="m-4">
                </Row>
                <CardBody>
                    <CardImg className="postDetailImg" top src={post.imageLocation} alt={post.title} />
                </CardBody>
            </Card>

            <Link to={`/post/comment/add/${id}`}>
                <Button id="addCommentButton"> Add Comment </Button>
            </Link>

            <h4>Comments: </h4>
            {(comments.length > 0) ?


                < ListGroup >
                    {
                        comments.map(c =>

                            < Comment key={c.id} comment={c} />
                        )
                    }
                </ListGroup>
                :
                null
            }

        </>


    );
}

export default PostDetails;