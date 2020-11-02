
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AnimalContext } from "../../providers/AnimalProvider";
import { Button, Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Animal from "./Animal"

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
            {user == 1 ?
                <div>
                    <Button onClick={Create}>
                        Add Animal
                </Button>
                </div>
                :

                null}
            <Container>
                <Row xs="3">
                    <Col>


                        {animals.map((animal) => (
                            <Animal key={animal.id} animal={animal} />
                        ))}

                    </Col>
                </Row>

            </Container>

        </>
    )
}