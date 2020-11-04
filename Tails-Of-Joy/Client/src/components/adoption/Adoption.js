import React, { useContext } from "react";
import { Card, CardBody, CardImg, Button } from "reactstrap";
import { useHistory, useParams } from "react-router-dom";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { AnimalContext } from "../../providers/AnimalProvider"
import "./adoption.css"

export default function Adoption({ adoption }) {

    const history = useHistory();
    const { singleUser } = useContext(UserProfileContext)
    const { animal } = useContext(AnimalContext)
    const { id } = useParams();



    return (
        <>

            <Card style={{ border: "none" }}>
                <div className="adoptionCard">
                    <CardBody>
                        <h6>User: {adoption.userProfile.firstName}{adoption.userProfile.lastName}</h6>
                        <h6>Animal: {adoption.animal.name}</h6>

                        <div>
                            <Button onClick={() => history.push(`/pendingAdoptions/approve/${adoption.id}`)}>Approve</Button>
                            <Button onClick={() => history.push(`/pendingAdoptions/deny/${adoption.id}`)}>Deny</Button>
                        </div>

                    </CardBody>
                </div>
            </Card>
        </>
    );
}