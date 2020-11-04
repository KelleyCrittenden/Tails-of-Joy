import React, { useContext, useState, useEffect } from "react";
import { UserProfileContext } from "../../providers/UserProfileProvider"
import { useHistory, useParams } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input, Card, CardImg, CardBody } from "reactstrap";
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
        <div className="container pt-4">
            <div className="row justify-content-center">
                <Card className="col-sm-12 col-lg-6">
                    <CardBody>
                        <Form>
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
                                    rows="7"
                                    id="Bio"
                                    defaultValue={singleUser.bio}
                                />
                            </FormGroup>

                            <Button
                                className="postButton"
                                onClick={saveUpdatedUserProfile}
                                variant="custom"
                                type="submit">
                                Save
                            </Button> &nbsp;

                            <Button onClick={Cancel}>Cancel</Button>

                        </Form>
                    </CardBody>
                </Card>
            </div>
        </div>
    )

}

export default UserProfileEdit