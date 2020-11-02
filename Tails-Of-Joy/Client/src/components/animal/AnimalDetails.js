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
            <div className="animalDetailsCardContainer">
                <Card className="m-auto">





                    <CardImg top src={animal.imageLocation} alt={animal.name} />
                    <CardBody>

                        <h1 ><strong>{animal.name}</strong></h1>
                        <div>
                            <h5>Breed: {animal.breed}</h5>

                            <h5>Gender: {animal.gender}</h5>

                            <h5>Age: {animal.age}</h5>

                            <h5>Size: {animal.size}</h5>

                            <h5>Child Friendly: {animal.childFriendly}</h5>

                            <h5>Small Animal Friendly: {animal.smallAnimalFriendly}</h5>
                        </div>

                        <h6>{animal.content}</h6>

                        {user == 1 ?
                            <>
                                <Button onClick={() => history.push(`/animal/edit/${animal.id}`)}>Edit</Button>
                                <Button onClick={() => history.push(`/animal/delete/${animal.id}`)}>Delete</Button>
                            </>
                            : null}

                        {user == 2 ?

                            <Button style={{ margin: 10 }} onClick={() => history.push(`/createAdoption/${id}`)}>Apply to Adopt</Button>
                            : null}
                        <Button onClick={Cancel}>Cancel</Button>


                    </CardBody>
                </Card>
            </div>
        </>


    );
}

export default AnimalDetails;