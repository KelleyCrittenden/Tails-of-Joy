import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AdoptionContext } from "../../providers/AdoptionProvider";
import { Button, ListGroup } from "reactstrap";
import Adoption from "./Adoption"

export default function AdoptionApprovedList() {
    const history = useHistory();
    const { adoptions, getAllPendingAdoptions, getAllApprovedAdoptions } = useContext(AdoptionContext)
    const user = JSON.parse(sessionStorage.getItem("userProfile")).id

    console.log(user, "user")

    const Create = () => {
        history.push("post/add")
    }

    // useEffect(() => {
    //     getAllPendingAdoptions();
    // }, []);

    useEffect(() => {
        getAllApprovedAdoptions();
    }, []);

    console.log(adoptions, "adoptions")

    return (
        <>
            {(adoptions.length > 0) ?
                <ListGroup>
                    {adoptions.map((adoption) => (
                        <Adoption key={adoption.id} adoption={adoption} />
                    ))}
                </ListGroup>
                :
                null
            }
        </>

    )
}