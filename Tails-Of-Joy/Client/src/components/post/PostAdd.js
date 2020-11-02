import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { PostContext } from "../../providers/PostProvider";

const PostAdd = () => {

    const { addPost } = useContext(PostContext)
    const history = useHistory();

    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [imageLocation, setImageLocation] = useState();
    const [imageName, setImageName] = useState();
    const [userProfileId, setUserProfileId] = useState();

    const newPost = (e) => {
        e.preventDefault();
        const post = {
            title,
            content,
            imageLocation,
            userProfileId
        };

        const user = JSON.parse(sessionStorage.getItem("userProfile")).id
        post.userProfileId = user


        addPost(post);
        history.push("/post");
    }

    const checkUploadResult = (resultEvent) => {
        if (resultEvent.event === 'success') {

            setImageLocation(resultEvent.info.secure_url)
            setImageName(resultEvent.info.original_filename + `.${resultEvent.info.original_extension}`)

        }
    }

    const showWidget = (event) => {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: "kelleycrittenden",
            uploadPreset: "Tails_of_Joy"
        },
            (error, result) => { checkUploadResult(result) })

        widget.open()
    }

    return (
        <Form className="postForm" onSubmit={newPost}>
            <FormGroup>
                <Label className="postTitleLabel">Title</Label>
                <Input
                    className="newPost"
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    id="Title"
                    placeholder="Enter Title"
                />
            </FormGroup>
            <FormGroup>
                <Label className="ContentLabel">Content</Label>
                <textarea
                    className="newPost"
                    onChange={e => setContent(e.target.value)}
                    type="text"
                    id="Content"
                    placeholder="Enter Content"
                />
            </FormGroup>

            <FormGroup>
                <Label className="ImageLocationLabel">Upload Image</Label>
                <div>
                    <Button onClick={showWidget}>Upload Photo</Button> <p>{imageName}</p>
                </div>
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