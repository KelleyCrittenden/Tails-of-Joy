import { AnimalContext } from "../../providers/AnimalProvider";
import React, { useEffect, useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { Button, CardBody, Col } from 'reactstrap'

export default function AnimalDelete() {

    const history = useHistory();
    const { id } = useParams();
    const { animal, deleteAnimal, getAnimalById } = useContext(AnimalContext)
    const [animalToDelete, setAnimalToDelete] = useState({});

    const handleDeleteAnimal = (e) => {
        e.preventDefault();
        deleteAnimal(animalToDelete.id)
            .then(() => history.push("/animal"))
    };

    useEffect(() => {
        getAnimalById(id)
    }, []);

    useEffect(() => {
        setAnimalToDelete(animal)
    }, [animal])

    const Cancel = () => {
        history.push("/animal")
    }

    return (
        <>
            <Col sm="12" md={{ size: 6, offset: 3 }}></Col>


            <p>Are you sure you want to delete this Animal?</p>


            <Button id={animal.id} onClick={handleDeleteAnimal}>Delete</Button>&nbsp;

            <Button onClick={Cancel}>Cancel</Button>
            <CardBody>

                <h4>{animal.name}</h4>
                <h5>{animal.breed}</h5>
                <p>{animal.title}</p>

            </CardBody>

        </>

    )
}