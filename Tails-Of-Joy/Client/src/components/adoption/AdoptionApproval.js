import React, { useEffect, useContext, useState } from "react";
import { AdoptionContext } from "../../providers/AdoptionProvider";
import { useHistory, useParams } from "react-router-dom";
import { Button, Col, CardBody, Card, CardImg } from 'reactstrap'
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { AnimalContext } from "../../providers/AnimalProvider"
import Adoption from "./Adoption"


const AdoptionApproval = () => {

    const [adoptionToApprove, setAdoptionToApprove] = useState({});
    const { adoption, getById, updateAdoption, deleteAdoption } = useContext(AdoptionContext);
    const { userProfile } = useContext(UserProfileContext)
    const { animal } = useContext(AnimalContext)
    const { id } = useParams();
    const history = useHistory();

    const user = JSON.parse(sessionStorage.getItem("userProfile")).id
    adoption.userProfileId = user

    const handleApproval = (e) => {
        e.preventDefault();
        updateAdoption(adoptionToApprove)
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
                <Card style={{ width: "65%", height: "30%", margin: "20px" }} className="smallContainer">
                    <CardBody>
                        <h3>Are you sure you want to Approve this Adoption?</h3>
                        <Button
                            color="success"
                            className="commentButton"
                            onClick={handleApproval}
                            variant="custom"
                            type="submit">
                            Approve
                    </Button>&nbsp;

                    <Button onClick={Cancel}>Back</Button>

                    </CardBody>
                </Card>
            </div>
        </>
    )

}
export default AdoptionApproval;