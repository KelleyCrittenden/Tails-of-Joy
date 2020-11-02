import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Card, Input, CardBody } from "reactstrap";
import { CommentContext } from "../../providers/CommentProvider";
import { PostContext } from "../../providers/PostProvider";

const CommentAdd = (props) => {

    const { addComment } = useContext(CommentContext)
    const { post } = useContext(PostContext)
    const { id } = useParams();
    const history = useHistory();
    const user = JSON.parse(sessionStorage.getItem("userProfile")).id
    post.userProfileId = user


    const [comment, setComment] = useState({
        PostId: parseInt(id),
        UserProfileId: parseInt(user),
        Content: ""
    })

    const newComment = (e) => {
        e.preventDefault();
        console.log("comment", comment)
        addComment(comment);
        history.push(`/post/details/${id}`)
    }

    const handleFieldChange = (e) => {
        const stateToChange = { ...comment };
        stateToChange[e.target.id] = e.target.value;
        setComment(stateToChange);
    }

    const Cancel = () => {
        history.push(`/post/details/${id}`)

    }

    return (
        <>
            <div className="container pt-4">
                <div className="row justify-content-center">
                    <Card className="col-sm-12 col-lg-6">
                        <CardBody>
                            <Form className="commentForm">
                                <FormGroup>
                                    <Label className="ContentLabel">Conmment</Label>
                                    <Input
                                        className="newComment"
                                        onChange={handleFieldChange}
                                        type="textarea"
                                        style={{ height: 200 }}
                                        id="Content"
                                        placeholder="Enter Comment"
                                    />
                                </FormGroup>
                            </Form>

                            <Button
                                className="commentButton"
                                onClick={newComment}
                                variant="custom"
                                type="submit">
                                Save Comment
                    </Button>&nbsp;

                    <Button onClick={Cancel}>Cancel</Button>

                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    )


}
export default CommentAdd