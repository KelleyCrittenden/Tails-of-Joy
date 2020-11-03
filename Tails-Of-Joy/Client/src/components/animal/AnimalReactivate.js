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
                <Card style={{ border: "none", width: "30%", height: "30%", margin: "20px" }} className="smallContainer">
                    <CardBody>

                        <p>Are you sure you want to make this Animal Available?</p>

                        <h4>{animal.name}</h4>
                        <h5>{animal.breed}</h5>
                        <p>{animal.title}</p>
                        <CardImg top src={animal.imageLocation} alt={animal.name} />

                        <Button color="danger" id={animal.id} onClick={handleReactivateAnimal}>Reactivate</Button>&nbsp;
                        <Button onClick={Cancel}>Cancel</Button>
                    </CardBody>
                </Card>
            </div>


        </>

    )
}