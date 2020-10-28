import { useParams } from "react-router-dom";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import React, { useContext, useEffect } from "react";
import { Card, CardImg, CardBody, Row, Col } from "reactstrap";

const UserProfileDetails = () => {

    const { id } = useParams();
    const { singleUser, getUserProfileById } = useContext(UserProfileContext);

    useEffect(() => {
        getUserProfileById(id);
    }, [id]);

    return (
        <>
            <Card className="m-4">
                <Row margin="m-4">
                    <h1 ><strong>{singleUser.firstName}{singleUser.lastName}</strong></h1>
                </Row>
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
            </Card>
        </>


    );
}

export default UserProfileDetails;