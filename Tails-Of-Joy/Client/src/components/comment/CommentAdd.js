import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label } from "reactstrap";
import { CommentContext } from "../../providers/CommentProvider";
import { PostContext } from "../../providers/PostProvider";

const CommentAdd = () => {

    const { addComment } = useContext(CommentContext)
    const { post } = useContext(PostContext)
    const { id } = useParams();
    const history = useHistory();

    const [comment, setComment] = useState({
        PostId: "",
        UserProfileId: "",
        Content: ""
    })

    const user = JSON.parse(sessionStorage.getItem("userProfile")).id
    post.userProfileId = user

    const newComment = (e) => {
        e.preventDefault();
        addComment(comment);
        history.push(`/post/details/${id}`)
    }

    const handleFieldChange = (e) => {
        const stateToChange = { ...comment };
        stateToChange[e.target.id] = e.target.value;
        setComment(stateToChange);
    }

    return (
        <>
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
                        onClick={newComment}
                        variant="custom"
                        type="submit">
                        Save Comment
                    </Button>

                </FormGroup>
            </Form>
        </>
    )


}
export default CommentAdd