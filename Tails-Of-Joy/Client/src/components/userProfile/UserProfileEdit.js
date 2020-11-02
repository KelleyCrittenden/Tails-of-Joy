import React, { useContext, useState, useEffect } from "react";
import { UserProfileContext } from "../../providers/UserProfileProvider"
import { useHistory, useParams } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input, Card, CardImg } from "reactstrap";
import "./userProfile.css"

const UserProfileEdit = () => {

    const { singleUser, getUserProfileById, updateUserProfile } = useContext(UserProfileContext)
    const history = useHistory();
    const [editedUserProfile, setEditedUserProfile] = useState({});
    const { id } = useParams();

    const user = JSON.parse(sessionStorage.getItem("userProfile")).id
    singleUser.userProfileId = user

    useEffect(() => {
        getUserProfileById(id)
    }, [])

    const handleFieldChange = (e) => {
        const stateToChange = { ...editedUserProfile }
        stateToChange[e.target.id] = e.target.value;
        setEditedUserProfile(stateToChange);
    };

    const saveUpdatedUserProfile = (e) => {
        e.preventDefault();
        updateUserProfile(editedUserProfile)
        history.push("/myProfile")
    };

    useEffect(() => {
        setEditedUserProfile(singleUser)
    }, [singleUser])

    const Cancel = () => {
        history.push("/myProfile")
    }

    return (
        <div className="d-flex justify-content-center">
            <Card style={{ border: "none", width: "30%", height: "30%", margin: "20px" }} className="smallContainer">
                {/* <CardImg src={singleUser.imageLocation} alt={singleUser.username} className="userdetailsImg" />
                <i className="fa-user-circle fa-7x" /> */}
                <div className="form-group">

                    <Form className="postForm">
                        <FormGroup>
                            <Label className="postUsernameLabel">Username</Label>
                            <Input
                                className="n"
                                onChange={handleFieldChange}
                                type="text"
                                id="Username"
                                defaultValue={singleUser.username}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className="FirstNameLabel">First Name</Label>
                            <Input
                                className="newPost"
                                onChange={handleFieldChange}
                                type="text"
                                id="FirstName"
                                defaultValue={singleUser.firstName}
                            />

                        </FormGroup>
                        <FormGroup>
                            <Label className="LastNameLabel">Last Name</Label>
                            <Input
                                className="newPost"
                                onChange={handleFieldChange}
                                type="text"
                                id="LastName"
                                defaultValue={singleUser.lastName}
                            />

                        </FormGroup>

                        <FormGroup>
                            <Label className="LastNameLabel">Bio</Label>
                            <Input
                                className="newPost"
                                onChange={handleFieldChange}
                                type="textarea"
                                id="Bio"
                                defaultValue={singleUser.bio}
                            />

                        </FormGroup>

                        {/* <FormGroup>
                        <Label className="ImageLocationLabel">Image Url</Label>
                        <Input
                            className="newPost"
                            onChange={handleFieldChange}
                            type="text"
                            id="ImageLocation"
                            defaultValue={singleUser.imageLocation}
                        />
                    </FormGroup> */}

                        <Button
                            className="postButton"
                            onClick={saveUpdatedUserProfile}
                            variant="custom"
                            type="submit">
                            Save Profile
                    </Button> &nbsp;

            <Button onClick={Cancel}>Cancel</Button>

                    </Form>
                </div>
            </Card>
        </div>
    )

}

export default UserProfileEdit