import React, { useEffect, useContext, useState } from "react";
import { AdoptionContext } from "../../providers/AdoptionProvider";
import { useHistory, useParams } from "react-router-dom";
import { Button, Col, CardBody, CardImg, Card } from 'reactstrap'
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { AnimalContext } from "../../providers/AnimalProvider"
import Adoption from "./Adoption"


const AdoptionApproval = () => {

    const [adoptionToApprove, setAdoptionToApprove] = useState({});
    const { adoption, getById, deleteAdoption } = useContext(AdoptionContext);
    const { userProfile } = useContext(UserProfileContext)
    const { animal } = useContext(AnimalContext)
    const { id } = useParams();
    const history = useHistory();

    const user = JSON.parse(sessionStorage.getItem("userProfile")).id
    adoption.userProfileId = user

    const handleDenial = (e) => {
        e.preventDefault();
        deleteAdoption(adoptionToApprove.id)
        history.push("/pendingAdoptions")
    };

    useEffect(() => {
        getById(id)
    }, []);

    useEffect(() => {
        setAdoptionToApprove(adoption);
    }, [adoption]);

    const Cancel = () => {
        history.push("/pendingAdoptions")
    };

    return (
        <>
            <div className="d-flex justify-content-center">
                <Card style={{ border: "none", width: "30%", height: "30%", margin: "20px" }} className="smallContainer">
                    <CardBody>

                        <p>Are you sure you want to Deny this Adoption?</p>





                        <Button
                            color="danger"
                            className="commentButton"
                            onClick={handleDenial}
                            variant="custom"
                            type="submit">
                            Deny
                    </Button>&nbsp;

                    <Button onClick={Cancel}>Cancel</Button>


                    </CardBody>
                </Card>
            </div>
        </>
    )

}
export default AdoptionApproval;