import React, { useContext } from "react";
import { Card, CardBody, CardImg, Button } from "reactstrap";
import { useHistory, useParams } from "react-router-dom";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { AnimalContext } from "../../providers/AnimalProvider"

export default function Adoption({ adoption }) {

    const history = useHistory();
    const { userProfile } = useContext(UserProfileContext)
    const { animal } = useContext(AnimalContext)
    const { id } = useParams();

    return (
        <Card className="m-4" >
            <CardBody>

                <h4>Adoption</h4>
                <h6>User: {adoption.userProfile.firstName}{adoption.userProfile.lastName}</h6>
                <h6>Animal: {adoption.animal.name}</h6>

                <CardImg top src={adoption.animal.imageLocation} alt={adoption.animal.name} />

                <div>
                    <Button onClick={() => history.push()}>Approve</Button>
                    <Button onClick={() => history.push()}>Deny</Button>
                </div>

            </CardBody>
        </Card>
    );
}