import React, { useEffect, useContext, useState } from "react";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { useHistory, useParams } from "react-router-dom";
import "./userProfile.css"
import { Button, Card, CardBody, CardImg } from 'reactstrap'


const ConfirmUserProfileDelete = () => {

    const [userProfileToDelete, setUserProfileToDelete] = useState({});
    const { singleUser, getUserProfileById, deleteUserProfile } = useContext(UserProfileContext);
    const { id } = useParams();
    const history = useHistory();


    const user = JSON.parse(sessionStorage.getItem("userProfile")).id
    singleUser.userProfileId = user


    const handleDelete = (e) => {
        e.preventDefault();
        deleteUserProfile(singleUser.id)
            .then(() => history.push("/"))
    };

    useEffect(() => {
        getUserProfileById(id)
    }, []);

    useEffect(() => {
        setUserProfileToDelete(singleUser);
    }, [singleUser]);

    const Cancel = () => {
        history.push("/myProfile")
    };

    return (
        <>
            <Card className="userProfileCard">
                <CardBody>

                    <p>Are you sure you want to delete your account?</p>

                    <Button color="danger" id={singleUser.id} onClick={handleDelete}>Delete</Button>&nbsp;

            <Button onClick={Cancel}>Cancel</Button>
                </CardBody>
            </Card>


        </>
    )

}
export default ConfirmUserProfileDelete;