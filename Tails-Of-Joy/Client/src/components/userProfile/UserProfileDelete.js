import React, { useEffect, useContext, useState } from "react";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { useHistory, useParams } from "react-router-dom";
import { Button, Col, CardBody, CardImg } from 'reactstrap'

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
            .then(() => history.push("/post"))
    };

    useEffect(() => {
        getUserProfileById(id)
    }, []);

    useEffect(() => {
        setUserProfileToDelete(singleUser);
    }, [singleUser]);

    const Cancel = () => {
        history.push("/login")
    };

    return (
        <>
            <Col sm="12" md={{ size: 6, offset: 3 }}></Col>

            <p>Are you sure you want to delete your account?</p>

            <Button color="danger" id={singleUser.id} onClick={handleDelete}>Delete</Button>&nbsp;

            <Button onClick={Cancel}>Cancel</Button>


        </>
    )

}
export default ConfirmUserProfileDelete;