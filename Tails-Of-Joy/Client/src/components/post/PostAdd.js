import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, Card, CardBody } from "reactstrap";
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

        if (post.title === "" || post.content === "" || post.imageLocation === "") {
            alert("Please Fill Out All Fields");
        } else {

            addPost(post);
            console.log(post, "added post")
            history.push("/post");
        }
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

    const Cancel = () => {
        history.push("/post")
    }

    return (
        <div className="container pt-4">
            <div className="row justify-content-center">
                <Card className="col-sm-12 col-lg-6">
                    <CardBody>
                        <Form encType="multipart/form-data">
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

                                <Input type="textarea"
                                    rows="10"
                                    id="content"
                                    onChange={e => setContent(e.target.value)}
                                    placeholder="Enter Content" />

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
            </Button>&nbsp;

            <Button onClick={Cancel}>Cancel</Button>

                        </Form>

                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
export default PostAdd