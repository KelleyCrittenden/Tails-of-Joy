import { CommentContext } from "../../providers/CommentProvider";
import React, { useEffect, useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { Button, CardBody, Card, Col } from 'reactstrap'
import DayJS from 'react-dayjs';
import "./comment.css"

export default function CommentDelete() {

    const history = useHistory();
    const { id } = useParams();
    const { comment, deleteComment, getCommentById } = useContext(CommentContext)
    const [commentToDelete, setCommentToDelete] = useState({});

    const handleDeleteComment = (e) => {
        e.preventDefault();
        deleteComment(commentToDelete.id)
        history.push(`/post/details/${commentToDelete.postId}`)
    };

    useEffect(() => {
        getCommentById(id)
    }, []);

    useEffect(() => {
        setCommentToDelete(comment)

    }, [comment])

    const Cancel = () => {
        history.push(`/post/details/${comment.postId}`)
    }

    return (
        <>
            <Card className="deleteCommentCard">
                <CardBody>
                    <h5 align="center">Are you sure you want to delete this comment?</h5>

                    <p>Posted: <DayJS format="MMM D, YY h:mm A">{comment.createDateTime}</DayJS></p>
                    <div className="commentTextArea">{comment.content}</div>

                    <Button style={{ margin: 10 }} color="danger" id={comment.id} onClick={handleDeleteComment}>Delete</Button>&nbsp;

                    <Button onClick={Cancel}>Cancel</Button>

                </CardBody>
            </Card>



        </>

    )
}