import { CommentContext } from "../../providers/CommentProvider";
import React, { useEffect, useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { Button, CardBody, Col } from 'reactstrap'

export default function CommentDelete() {

    const history = useHistory();
    const { id } = useParams();
    const { comment, deleteComment, getCommentById } = useContext(CommentContext)
    const [commentToDelete, setCommentToDelete] = useState({});

    const handleDeleteComment = (e) => {
        e.preventDefault();
        deleteComment(commentToDelete.id)
            .then(() => history.push("/post"))
    };

    useEffect(() => {
        getCommentById(id)
    }, []);

    useEffect(() => {
        setCommentToDelete(comment)
    }, [comment])

    const Cancel = () => {
        history.push("/post")
    }

    return (
        <>
            <Col sm="12" md={{ size: 6, offset: 3 }}></Col>


            <p>Are you sure you want to delete this Comment?</p>


            <Button id={comment.id} onClick={handleDeleteComment}>Delete</Button>&nbsp;

            <Button onClick={Cancel}>Cancel</Button>
            <CardBody>
                {/* <div>{comment.userProfile.username}</div> */}
                <div>{comment.createDateTime}</div>
                <div className="commentTextArea">{comment.content}</div>
            </CardBody>

        </>

    )
}