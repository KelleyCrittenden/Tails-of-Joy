import { useHistory, useParams } from "react-router-dom";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import React, { useContext, useEffect } from "react";
import { Card, CardImg, CardBody, Button, CardHeader } from "reactstrap";

const MyProfileDetails = () => {

    const { id } = useParams();
    const history = useHistory();
    const { singleUser, getUserProfileById } = useContext(UserProfileContext);
    const currentUser = JSON.parse(sessionStorage.getItem('userProfile')).id;

    useEffect(() => {
        getUserProfileById(currentUser);
    }, [currentUser]);

    return (
        <>
            {(currentUser === singleUser.id) ?
                <div className="d-flex justify-content-center">
                    <Card style={{ border: "none", width: "30%", height: "30%", margin: "20px" }} className="smallContainer">

                        <CardImg src={singleUser.imageLocation} alt={singleUser.username} className="userdetailsImg" />
                        <i className="fa-user-circle fa-7x" />

                        <CardHeader>
                            <h5>{singleUser.firstName} {singleUser.lastName}</h5>
                        </CardHeader>
                        <CardBody>
                            <div>Username: {singleUser.username}</div>
                            <div>Email: {singleUser.email}</div>
                            <div>Bio: {singleUser.bio}</div>
                        </CardBody>


                        <div>
                            <Button onClick={() => history.push(`/userProfile/edit/${singleUser.id}`)}>Edit</Button>

                            {currentUser == 2 ?


                                <Button onClick={() => history.push(`/userProfile/delete/${singleUser.id}`)}>Delete</Button>
                                :

                                null}
                        </div>


                    </Card>

                </div>
                :
                null}

        </>


    );
}

export default MyProfileDetails;