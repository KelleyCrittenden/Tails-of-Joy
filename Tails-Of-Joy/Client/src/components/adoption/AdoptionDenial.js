import React, { useEffect, useContext, useState } from "react";
import { AdoptionContext } from "../../providers/AdoptionProvider";
import { useHistory, useParams } from "react-router-dom";
import { Button, Col, CardBody, CardImg } from 'reactstrap'
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
            .thenhistory.push("/pendingAdoptions")
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
            <Col sm="12" md={{ size: 6, offset: 3 }}></Col>

            <p>Are you sure you want to Deny this Adoption?</p>

            <CardBody>


                <div>
                    <Button
                        className="commentButton"
                        onClick={handleDenial}
                        variant="custom"
                        type="submit">
                        Deny
                    </Button>&nbsp;

                    <Button onClick={Cancel}>Cancel</Button>
                </div>

            </CardBody>
        </>
    )

}
export default AdoptionApproval;