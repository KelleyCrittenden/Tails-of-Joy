import { AnimalContext } from "../../providers/AnimalProvider";
import React, { useEffect, useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { Button, CardBody, Card, CardImg, Col } from 'reactstrap'

export default function AnimalDelete() {

    const history = useHistory();
    const { id } = useParams();
    const { animal, reactivateAnimal, getAnimalById } = useContext(AnimalContext)
    const [animalToReactivate, setAnimalToReactivate] = useState({});

    const handleReactivateAnimal = (e) => {
        e.preventDefault();
        reactivateAnimal(animalToReactivate.id)
            .then(() => history.push("/animal"))
    };

    useEffect(() => {
        getAnimalById(id)
    }, []);

    useEffect(() => {
        setAnimalToReactivate(animal)
    }, [animal])

    const Cancel = () => {
        history.push(`/animal/details/${id}`)
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <Card style={{ border: "none", width: "50%", height: "50%", margin: "20px" }} className="smallContainer">
                    <CardBody>

                        <h5 align="center">Are you sure you want to make {animal.name} available?</h5>
                        <CardImg top src={animal.imageLocation} alt={animal.name} />

                        <Button style={{ margin: 2 }} color="success" id={animal.id} onClick={reactivateAnimal}>Reactivate</Button>&nbsp;
                        <Button style={{ margin: 2 }} onClick={Cancel}>Cancel</Button>

                    </CardBody>
                </Card>
            </div>


        </>

    )
}