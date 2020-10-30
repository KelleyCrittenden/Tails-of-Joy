import React, { useEffect, useContext, useState } from "react";
import { AdoptionContext } from "../../providers/AdoptionProvider";
import { useHistory, useParams } from "react-router-dom";
import { Button, Col, CardBody, CardImg } from 'reactstrap'
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
            <Col sm="12" md={{ size: 6, offset: 3 }}></Col>

            <p>Are you sure you want to Approve this Adoption?</p>

            <CardBody>


                <div>
                    <Button
                        className="commentButton"
                        onClick={handleApproval}
                        variant="custom"
                        type="submit">
                        Approve
                    </Button>&nbsp;

                    <Button onClick={Cancel}>Cancel</Button>
                </div>

            </CardBody>
        </>
    )

}
export default AdoptionApproval;