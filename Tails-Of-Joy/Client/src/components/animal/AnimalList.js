
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AnimalContext } from "../../providers/AnimalProvider";
import { Button, Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Animal from "./Animal"
import "./animal.css"

export default function AnimlalList() {
    const history = useHistory();
    const { animals, getAllAvailableAnimals } = useContext(AnimalContext)
    const user = JSON.parse(sessionStorage.getItem("userProfile")).id

    const Create = () => {
        history.push("animal/add")
    }

    useEffect(() => {
        getAllAvailableAnimals();
    }, []);


    return (
        <>
            <div className="ListContainer mb-5 p-2">

                <div>
                    {user == 1 ?
                        <div>
                            <Button color="success" className="btn" onClick={Create}>Add Dog</Button>
                        </div>
                        :
                        null}
                </div>
                <div className="animal-container-cards">

                    {animals.map((animal) => (
                        <Animal key={animal.id} animal={animal} />
                    ))}
                </div>
            </div>

        </>
    )
}