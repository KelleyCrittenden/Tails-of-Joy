import React, { useContext, useState, useEffect } from "react";
import { CommentContext } from "../../providers/CommentProvider"
import { useHistory, useParams } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { PostContext } from "../../providers/PostProvider";


const CommentEdit = () => {

    const { comment, getCommentById, updateComment } = useContext(CommentContext)
    const history = useHistory();
    const [editedComment, setEditedComment] = useState({});
    const { id } = useParams();
    const { post } = useContext(PostContext)

    const user = JSON.parse(sessionStorage.getItem("userProfile")).id
    post.userProfileId = user

    useEffect(() => {
        getCommentById(id)
    }, [])

    const handleFieldChange = (e) => {
        const stateToChange = { ...editedComment }
        stateToChange[e.target.id] = e.target.value;
        setEditedComment(stateToChange);
    };

    const saveUpdatedComment = (e) => {
        e.preventDefault();
        updateComment(editedComment)
        history.push("/post")
    };

    useEffect(() => {
        setEditedComment(comment)
    }, [comment])

    const Cancel = () => {
        history.push("/post")
    }

    return (
        <Form className="commentEditForm">
            <Form className="commentForm">
                <FormGroup>
                    <Label className="ContentLabel">Conmment</Label>
                    <textarea
                        className="newComment"
                        onChange={handleFieldChange}
                        type="text"
                        id="Content"
                        placeholder="Enter Comment"
                    />

                    <Button
                        className="commentButton"
                        onClick={saveUpdatedComment}
                        variant="custom"
                        type="submit">
                        Save Comment
                    </Button>

                </FormGroup>
            </Form>

            <Button onClick={Cancel}>Cancel</Button>

        </Form>
    )

}

export default CommentEdit