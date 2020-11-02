import { Link, NavLink, useHistory, useParams } from "react-router-dom";
import { AnimalContext } from "../../providers/AnimalProvider";
import { AdoptionContext } from "../../providers/AdoptionProvider";
import React, { useContext, useEffect, useState } from "react";
import { Card, CardImg, CardBody, Row, Button, Col } from "reactstrap";

const AnimalDetails = () => {

    const { id } = useParams();
    const history = useHistory();
    const { animal, getAnimalById } = useContext(AnimalContext);
    const { addAdoption, adoption } = useContext(AdoptionContext)
    const user = JSON.parse(sessionStorage.getItem("userProfile")).id


    useEffect(() => {
        getAnimalById(id);
    }, [id]);

    const Cancel = () => {
        history.push("/animal")
    }

    return (
        <>
            <Card className="m-4">
                <Row margin="m-4">
                    <h1 ><strong>{animal.name}</strong></h1>
                </Row>
                <Row margin="m-4">
                    <Col sm="6">
                        <h1>{animal.breed}</h1>
                    </Col>
                    <Col sm="6">
                        <h1>{animal.gender}</h1>
                    </Col>
                    <Col sm="6">
                        <h1>{animal.age}</h1>
                    </Col>
                    <Col sm="6">
                        <h1>{animal.size}</h1>
                    </Col>
                    <Col sm="6">
                        <h1>{animal.childFriendly}</h1>
                    </Col>
                    <Col sm="6">
                        <h1>{animal.smallAnimalFriendly}</h1>
                    </Col>
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

                {user == 1 ?
                    <>
                        <Button onClick={() => history.push(`/animal/edit/${animal.id}`)}>Edit</Button>
                        <Button onClick={() => history.push(`/animal/delete/${animal.id}`)}>Delete</Button>
                    </>
                    : null}

                {user == 2 ?

                    <Button onClick={() => history.push(`/createAdoption/${id}`)}>Apply to Adopt</Button>
                    : null}
                <Button onClick={Cancel}>Cancel</Button>

            </Card>
        </>


    );
}

export default AnimalDetails;