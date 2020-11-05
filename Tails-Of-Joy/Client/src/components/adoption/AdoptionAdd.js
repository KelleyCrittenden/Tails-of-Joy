import React, { useEffect, useContext, useState } from "react";
import { AdoptionContext } from "../../providers/AdoptionProvider";
import { useHistory, useParams } from "react-router-dom";
import { Button, Col, CardBody, CardImg, Card } from 'reactstrap'
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { AnimalContext } from "../../providers/AnimalProvider"
import Adoption from "./Adoption"


const AdoptionAdd = () => {

    const { activeUser } = useContext(UserProfileContext)
    const { animal } = useContext(AnimalContext)
    const { addAdoption } = useContext(AdoptionContext)
    const [adoption, setAdoption] = useState({});
    const { id } = useParams();
    const history = useHistory();

    const user = JSON.parse(sessionStorage.getItem("userProfile")).id
    activeUser.userProfileId = user

    const Submit = (e) => {
        const adoption = {
            userProfileId: parseInt(user),
            animalId: parseInt(id)
        }
        addAdoption(adoption).then((p) => {
            history.push(`/animal`)
        });
    };

    const Cancel = () => {
        history.push(`/animal/details/${id}`)
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <Card style={{ border: "none", width: "50%", height: "50%", margin: "20px" }} className="smallContainer">
                    <CardBody>

                        <p>Are you sure you want to Adopt this Animal?</p>
                        <CardImg mb-2 top src={animal.imageLocation} alt={animal.name} />


                        <div>



                            <Button color="success" onClick={Submit}>Apply</Button>&nbsp;
                            <Button onClick={Cancel}>Cancel</Button>
                        </div>

                    </CardBody>
                </Card>
            </div>
        </>
    )

}
export default AdoptionAdd;