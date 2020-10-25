import { Link, NavLink, useHistory, useParams } from "react-router-dom";
import { PostContext } from "../../providers/PostProvider";
import React, { useContext, useEffect, useState } from "react";
import { Card, CardImg, CardBody, Row, Button, Col } from "reactstrap";
import Post from "./Post";

const PostDetails = () => {

    const { id } = useParams();
    const history = useHistory();
    const { post, getPostById } = useContext(PostContext);

    useEffect(() => {
        getPostById(id);
    }, [id]);

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
        </>


    );
}

export default PostDetails;