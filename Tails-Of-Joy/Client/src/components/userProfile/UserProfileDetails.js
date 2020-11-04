import { useHistory, useParams } from "react-router-dom";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import React, { useContext, useEffect } from "react";
import { Card, CardImg, CardBody, Row, Col, Button, CardHeader } from "reactstrap";
import "./userProfile.css"

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
            <div className="DetailsCardContainer">
                <Card className="m-auto d-flex flex-row mt-4">
                    <CardImg className="animalDetailImg w-50" src={singleUser.imageLocation} alt={singleUser.username} />
                    <CardBody>


                        <h2>{singleUser.firstName} {singleUser.lastName}</h2>
                        <div>
                            <div>
                                <p>Username: {singleUser.username}</p>
                            </div>
                        </div>


                        <p className="bioTextarea" style={{ whiteSpace: "pre-wrap" }}>{singleUser.bio}</p>
                        <Button style={{ margin: 2 }} onClick={Cancel}>Back</Button>

                        {(currentUser === singleUser.id) ?

                            <>
                                <Button style={{ margin: 2 }} onClick={() => history.push(`/userProfile/edit/${singleUser.id}`)}>Edit</Button>

                                {currentUser == 2 ?
                                    <Button color="danger" style={{ margin: 2 }} onClick={() => history.push(`/userProfile/delete/${singleUser.id}`)}>Delete</Button>
                                    :
                                    null}
                            </>
                            :
                            null}
                    </CardBody>
                </Card>
            </div>
        </>


    );
}

export default UserProfileDetails;