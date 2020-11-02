import { useHistory, useParams } from "react-router-dom";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import React, { useContext, useEffect } from "react";
import { Card, CardImg, CardBody, Row, Col, Button, CardHeader } from "reactstrap";

const UserProfileDetails = () => {

    const { id } = useParams();
    const history = useHistory();
    const { singleUser, getUserProfileById } = useContext(UserProfileContext);
    const currentUser = JSON.parse(sessionStorage.getItem('userProfile')).id;

    useEffect(() => {
        getUserProfileById(id);
    }, [id]);

    console.log(singleUser, "current user Id")

    const Cancel = () => {
        history.push("/post")
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <Card style={{ border: "none", width: "30%", height: "30%", margin: "20px" }} className="smallContainer">

                    <CardImg src={singleUser.imageLocation} alt={singleUser.username} className="userdetailsImg" />
                    <i className="fa-user-circle fa-7x" />

                    <CardHeader>
                        <h3>{singleUser.firstName} {singleUser.lastName}</h3>
                    </CardHeader>

                    <Row>
                        <Col sm="6">
                            <h3>{singleUser.bio}</h3>
                        </Col>
                    </Row>
                    <Row margin="m-4">
                    </Row>
                    <CardBody>
                        <CardImg className="userProfileDetailImg" top src={singleUser.imageLocation} alt={singleUser.username} />
                    </CardBody>

                    {(currentUser === singleUser.id) ?

                        <div>
                            <Button onClick={() => history.push(`/userProfile/edit/${singleUser.id}`)}>Edit</Button>

                            {currentUser == 2 ?
                                <Button onClick={() => history.push(`/userProfile/delete/${singleUser.id}`)}>Delete</Button>
                                :
                                null}
                            <Button onClick={Cancel}>Cancel</Button>

                        </div>
                        :
                        null}

                </Card>
            </div>
        </>


    );
}

export default UserProfileDetails;