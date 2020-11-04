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
                <div className="animalDetailsCardContainer">
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
                            <Button onClick={() => history.push(`/userProfile/edit/${singleUser.id}`)}>Edit</Button>&nbsp;

                            {currentUser == 2 ?

                                <Button color="danger" onClick={() => history.push(`/userProfile/delete/${singleUser.id}`)}>Delete</Button>
                                :

                                null}

                        </CardBody>
                    </Card>
                </div>
                :


                null}
        </>


    );
}

export default MyProfileDetails;