import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { PostContext } from "../../providers/PostProvider";

const PostAdd = () => {

    const { addPost } = useContext(PostContext)
    const history = useHistory();

    const [post, setPost] = useState({
        Title: "",
        Content: "",
        ImageLocation: "",
        userProfileId: ""
    })

    const user = JSON.parse(sessionStorage.getItem("userProfile")).id
    post.userProfileId = user

    const newPost = (e) => {
        e.preventDefault();
        addPost(post);
        history.push("/post");
    }

    const handleFieldChange = (e) => {
        const stateToChange = { ...post };
        stateToChange[e.target.id] = e.target.value;
        setPost(stateToChange);
    }

    return (
        <Form className="postForm" onSubmit={newPost}>
            <FormGroup>
                <Label className="postTitleLabel">Title</Label>
                <Input
                    className="newPost"
                    onChange={handleFieldChange}
                    type="text"
                    id="Title"
                    placeholder="Enter Title"
                />
            </FormGroup>
            <FormGroup>
                <Label className="ContentLabel">Content</Label>
                <textarea
                    className="newPost"
                    onChange={handleFieldChange}
                    type="text"
                    id="Content"
                    placeholder="Enter Content"
                />

            </FormGroup>
            <FormGroup>
                <Label className="ImageLocationLabel">Image Url</Label>
                <Input
                    className="newPost"
                    onChange={handleFieldChange}
                    type="text"
                    id="ImageLocation"
                    placeholder="Image Url"
                />
            </FormGroup>

            <Button
                className="postButton"
                onClick={newPost}
                variant="custom"
                type="submit">
                Save Post
            </Button>

        </Form>
    )
}
export default PostAdd