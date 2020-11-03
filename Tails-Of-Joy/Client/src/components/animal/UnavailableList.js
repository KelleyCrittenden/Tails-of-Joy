
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AnimalContext } from "../../providers/AnimalProvider";
import { Button, Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Animal from "./Animal"
import "./animal.css"

export default function UnavailableList() {
    const history = useHistory();
    const { animals, getAllUnavailable } = useContext(AnimalContext)

    const user = JSON.parse(sessionStorage.getItem("userProfile")).id

    useEffect(() => {
        getAllUnavailable();
        console.log(animals, "Unavailable")
    }, []);


    return (
        <>
            <div className="ListContainer">
                <div className="animal-container-cards">

                    {animals.map((animal) => (
                        <Animal key={animal.id} animal={animal} />
                    ))}
                </div>
            </div>

        </>
    )
}