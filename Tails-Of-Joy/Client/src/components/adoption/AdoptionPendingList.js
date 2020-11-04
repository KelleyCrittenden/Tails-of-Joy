import React, { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { AdoptionContext } from "../../providers/AdoptionProvider";
import { Button, ListGroup, Table } from "reactstrap";
import Adoption from "./Adoption"
import "./adoption.css"

export default function AdoptionPendingList() {
    const history = useHistory();
    const { adoptions, getAllPendingAdoptions } = useContext(AdoptionContext)
    const user = JSON.parse(sessionStorage.getItem("userProfile")).id

    useEffect(() => {
        getAllPendingAdoptions();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row justify-content-left">

                    <Table hover className="adoptionTable" striped>
                        <thead>
                            <tr>
                                <th><h4>Dog</h4></th>
                                <th><h4>User</h4></th>
                                <th><h4>Status</h4></th>

                            </tr>
                        </thead>

                        {adoptions.map((adoption => (
                            <tbody className="adoptionTable" key={adoption.id}>
                                <tr>
                                    <th scope="row">
                                        <Link style={{ color: '#343A40' }} to={`/animal/details/${adoption.animal.id}}`}>{adoption.animal.name}</Link>
                                    </th>
                                    <th scope="row">
                                        <Link style={{ color: '#343A40' }} to={`/userProfile/q=${adoption.userProfile.id}`}>{adoption.userProfile.firstName} {adoption.userProfile.lastName}</Link>
                                    </th>
                                    <th>
                                        <Button color="success" onClick={() => history.push(`/pendingAdoptions/approve/${adoption.id}`)}>Approve</Button>&nbsp;
                                        <Button color="danger" onClick={() => history.push(`/pendingAdoptions/deny/${adoption.id}`)}>Deny</Button>
                                    </th>
                                </tr>
                            </tbody>
                        )))}
                    </Table>
                </div>
            </div>
        </>

    )
}