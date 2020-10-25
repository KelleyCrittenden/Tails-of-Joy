import { Link, NavLink, useHistory, useParams } from "react-router-dom";
import { AnimalContext } from "../../providers/AnimalProvider";
import React, { useContext, useEffect, useState } from "react";
import { Card, CardImg, CardBody, Row, Button, Col } from "reactstrap";

const AnimalDetails = () => {

    const { id } = useParams();
    const history = useHistory();
    const { animal, getAnimalById } = useContext(AnimalContext);

    useEffect(() => {
        getAnimalById(id);
    }, [id]);

    return (
        <>
            <Card className="m-4">
                <Row margin="m-4">
                    <h3 className="text-left px-2"><strong>{animal.name}</strong></h3>
                </Row>
                <Row margin="m-4">
                    <Col sm="6">
                        <h1>{animal.breed}</h1>
                    </Col>

                    <Row margin="m-4">
                        <Col sm="6">
                            <h1>{animal.gender}</h1>
                        </Col>
                    </Row>
                    <Row margin="m-4">
                        <Col sm="6">
                            <h1>{animal.age}</h1>
                        </Col>
                    </Row>
                    <Row margin="m-4">
                        <Col sm="6">
                            <h1>{animal.size}</h1>
                        </Col>
                    </Row>
                    <Row margin="m-4">
                        <Col sm="6">
                            <h1>{animal.childFriendly}</h1>
                        </Col>
                    </Row>
                    <Row margin="m-4">
                        <Col sm="6">
                            <h1>{animal.smallAnimalFriendly}</h1>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <Col sm="6">
                        <h3>{animal.title}</h3>
                        <h4>{animal.content}</h4>
                    </Col>
                </Row>
                <Row margin="m-4">
                </Row>
                <CardBody>
                    <CardImg className="animalDetailImg" top src={animal.imageLocation} alt={animal.title} />
                </CardBody>
            </Card>
        </>


    );
}

export default AnimalDetails;