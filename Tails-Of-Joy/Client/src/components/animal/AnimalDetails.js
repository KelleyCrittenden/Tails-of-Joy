import { Link, NavLink, useHistory, useParams } from "react-router-dom";
import { AnimalContext } from "../../providers/AnimalProvider";
import { AdoptionContext } from "../../providers/AdoptionProvider";
import React, { useContext, useEffect, useState } from "react";
import { Card, CardImg, CardBody, Row, Button, Col } from "reactstrap";
import "./animal.css"

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
                <Card className="m-auto d-flex flex-row mt-4">
                    <CardImg className="animalDetailImg w-50" src={animal.imageLocation} alt={animal.name} />
                    <CardBody>

                        <h4>{animal.name}</h4>
                        <div>
                            <p>Breed: {animal.breed}</p>

                            <p>Gender: {animal.gender}</p>
                            <p>Age: {animal.age}</p>

                            <p>Size: {animal.size}</p>

                            {animal.childFriendly === true ?
                                <p>Child Friendly: Yes </p>
                                :
                                <p>Child Friendly: No </p>}

                            {animal.smallAnimalFriendly === true ?
                                <p>Small Animal Friendly: Yes </p>
                                :
                                <p>Small Animal Friendly: No</p>}
                        </div>

                        <p className="animalTextarea">{animal.content}</p>

                        {animal.isAdoptable == 1 && user == 1 ?
                            <>

                                <Button color="danger" onClick={() => history.push(`/animal/delete/${animal.id}`)}>Remove</Button>&nbsp;
                                <Button onClick={() => history.push(`/animal/edit/${animal.id}`)}>Edit</Button>&nbsp;
                            </>
                            : null}


                        {animal.isAdoptable == 0 && user == 1 ?
                            <>
                                <Button onClick={() => history.push(`/animal/edit/${animal.id}`)}>Edit</Button>&nbsp;
                            </>
                            : null}

                        {user == 2 ?

                            <Button onClick={() => history.push(`/createAdoption/${id}`)}>Apply to Adopt</Button>
                            : null}

                        {animal.isAdoptable == 0 ?
                            <Button color="danger" onClick={() => history.push(`/animal/reactivate/${animal.id}`)}>Reactivate</Button>
                            :
                            null
                        }

                        &nbsp;<Button onClick={Cancel}>Back</Button>

                    </CardBody>
                </Card>
            </div>
        </>


    );
}

export default AnimalDetails;