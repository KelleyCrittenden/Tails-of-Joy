import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AdoptionContext } from "../../providers/AdoptionProvider";
import { Button, ListGroup } from "reactstrap";
import Adoption from "./Adoption"

export default function AdoptionPendingList() {
    const history = useHistory();
    const { adoptions, getAllPendingAdoptions } = useContext(AdoptionContext)
    const user = JSON.parse(sessionStorage.getItem("userProfile")).id

    useEffect(() => {
        getAllPendingAdoptions();
    }, []);

    console.log(adoptions, "pending adoptions")

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