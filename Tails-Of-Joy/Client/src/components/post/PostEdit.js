import React, { useContext, useState, useEffect } from "react";
import { PostContext } from "../../providers/PostProvider"
import { useHistory, useParams } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const PostEdit = () => {

    const { post, getPostById, updatePost } = useContext(PostContext)
    const history = useHistory();
    const [editedPost, setEditedPost] = useState({});
    const { id } = useParams();

    const user = JSON.parse(sessionStorage.getItem("userProfile")).id
    post.userProfileId = user

    useEffect(() => {
        getPostById(id)
    }, [])

    const handleFieldChange = (e) => {
        const stateToChange = { ...editedPost }
        stateToChange[e.target.id] = e.target.value;
        setEditedPost(stateToChange);
    };

    const saveUpdatedPost = (e) => {
        e.preventDefault();
        updatePost(editedPost)
        history.push("/post")
    };

    useEffect(() => {
        setEditedPost(post)
    }, [post])

    const Cancel = () => {
        history.push("/post")
    }

    return (
        <Form className="postForm">
            <FormGroup>
                <Label className="postTitleLabel">Title</Label>
                <Input
                    className="newPost"
                    onChange={handleFieldChange}
                    type="text"
                    id="Title"
                    defaultValue={editedPost.title}
                />
            </FormGroup>
            <FormGroup>
                <Label className="ContentLabel">Content</Label>
                <textarea
                    className="newPost"
                    onChange={handleFieldChange}
                    type="text"
                    id="Content"
                    defaultValue={editedPost.content}
                />

            </FormGroup>
            <FormGroup>
                <Label className="ImageLocationLabel">Image Url</Label>
                <Input
                    className="newPost"
                    onChange={handleFieldChange}
                    type="text"
                    id="ImageLocation"
                    defaultValue={editedPost.imageLocation}
                />
            </FormGroup>

            <Button
                className="postButton"
                onClick={saveUpdatedPost}
                variant="custom"
                type="submit">
                Save Post
                    </Button> &nbsp;

            <Button onClick={Cancel}>Cancel</Button>

        </Form>
    )

}

export default PostEdit