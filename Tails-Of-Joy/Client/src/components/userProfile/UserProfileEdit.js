import React, { useContext, useState, useEffect } from "react";
import { UserProfileContext } from "../../providers/UserProfileProvider"
import { useHistory, useParams } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

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
        console.log(editedUserProfile, "edited user")
        history.push("/post")
    };

    useEffect(() => {
        setEditedUserProfile(singleUser)
        console.log(singleUser, "use effect single user")
    }, [singleUser])

    const Cancel = () => {
        history.push("/post")
    }

    return (
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
                <textarea
                    className="newPost"
                    onChange={handleFieldChange}
                    type="text"
                    id="FirstName"
                    defaultValue={singleUser.firstName}
                />

            </FormGroup>
            <FormGroup>
                <Label className="LastNameLabel">Last Name</Label>
                <textarea
                    className="newPost"
                    onChange={handleFieldChange}
                    type="text"
                    id="LastName"
                    defaultValue={singleUser.lastName}
                />

            </FormGroup>

            <FormGroup>
                <Label className="LastNameLabel">Bio</Label>
                <textarea
                    className="newPost"
                    onChange={handleFieldChange}
                    type="text"
                    id="Bio"
                    defaultValue={singleUser.bio}
                />

            </FormGroup>

            <FormGroup>
                <Label className="ImageLocationLabel">Image Url</Label>
                <Input
                    className="newPost"
                    onChange={handleFieldChange}
                    type="text"
                    id="ImageLocation"
                    defaultValue={singleUser.imageLocation}
                />
            </FormGroup>

            <Button
                className="postButton"
                onClick={saveUpdatedUserProfile}
                variant="custom"
                type="submit">
                Save Profile
                    </Button> &nbsp;

            <Button onClick={Cancel}>Cancel</Button>

        </Form>
    )

}

export default UserProfileEdit