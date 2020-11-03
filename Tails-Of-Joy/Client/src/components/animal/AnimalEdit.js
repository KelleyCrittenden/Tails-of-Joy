import React, { useContext, useState, useEffect } from "react";
import { Button, Form, Card, CardBody, FormGroup, Label, Input, Col } from "reactstrap";
import { useHistory, useParams } from "react-router-dom"
import { AnimalContext } from "../../providers/AnimalProvider";

const AnimalEdit = () => {

    const { id } = useParams();
    const history = useHistory();
    const { animal, getAnimalById, updateAnimal } = useContext(AnimalContext)
    const [editedAnimal, setEditedAnimal] = useState({});


    const handleFieldChange = (e) => {
        const stateToChange = { ...editedAnimal }
        stateToChange[e.target.id] = e.target.value;
        setEditedAnimal(stateToChange);
    };

    const saveEditedAnimal = (e) => {
        e.preventDefault();
        updateAnimal(editedAnimal)
        history.push(`/animal/details/${id}`)
    };

    useEffect(() => {
        getAnimalById(id)
    }, []);

    useEffect(() => {
        setEditedAnimal(animal)
    }, []);

    const Cancel = () => {
        history.push(`/animal/details/${id}`)
    }

    return (

        <div className="container pt-4">
            <div className="row justify-content-center">
                <Card className="col-sm-12 col-lg-6">
                    <CardBody>
                        <Form encType="multipart/form-data">
                            {animal.isAdoptable === true ?
                                <FormGroup>
                                    <Label for="isAdoptable">Availble for Adoption: </Label>
                                    <select id="IsAdoptable" onChange={handleFieldChange}>

                                        <option selected>Yes</option>
                                        <option value={true}>Yes</option>
                                        <option value={false} >No</option>

                                    </select>

                                </FormGroup>
                                :
                                <FormGroup>
                                    <Label for="isAdoptable">Availble for Adoption: </Label>
                                    <select id="IsAdoptable" onChange={handleFieldChange}>

                                        <option selected>No</option>
                                        <option value={true}>Yes</option>
                                        <option value={false} >No</option>

                                    </select>

                                </FormGroup>

                            }

                            <FormGroup>
                                <Label for="name">Name: </Label>
                                <Input
                                    id="Name"
                                    defaultValue={animal.name}
                                    type="text"
                                    onChange={handleFieldChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="breed">Breed: </Label>
                                <Input
                                    id="Breed"
                                    defaultValue={animal.breed}
                                    type="text"
                                    onChange={handleFieldChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="gender">Gender: </Label>
                                <select id="Gender" onChange={handleFieldChange}>
                                    <option selected>{animal.gender}</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label for="age">Age: </Label>
                                <select id="Age" onChange={handleFieldChange}>
                                    <option selected>{animal.age} </option>
                                    <option value="baby">Baby</option>
                                    <option value="young">Young</option>
                                    <option value="adult">Adult</option>
                                    <option value="senior">Senior</option>
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label for="size">Size: </Label>
                                <select id="Size" onChange={handleFieldChange}>
                                    <option selected>{animal.size} </option>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                    <option value="x-large">X-large</option>
                                </select>
                            </FormGroup>

                            {animal.childFriendly === true ?
                                <FormGroup>
                                    <Label for="childFriendly">Child Friendly: </Label>
                                    <select id="ChildFriendly" onChange={handleFieldChange}>
                                        <option selected>Yes</option>
                                        <option value={true}>Yes</option>
                                        <option value={false} >No</option>
                                    </select>
                                </FormGroup>
                                :
                                <FormGroup>
                                    <Label for="childFriendly">Child Friendly: </Label>
                                    <select id="ChildFriendly" onChange={handleFieldChange}>
                                        <option selected>No</option>
                                        <option value={true}>Yes</option>
                                        <option value={false} >No</option>
                                    </select>
                                </FormGroup>
                            }

                            {animal.childFriendly === true ?
                                <FormGroup>
                                    <Label for="smallAnimalFriendly">Small Animal Friendly: </Label>
                                    <select id="SmallAnimalFriendly" onChange={handleFieldChange}>
                                        <option selected>{animal.SmallAnimalFriendly}</option>
                                        <option value={true}>Yes</option>
                                        <option value={false} >No</option>
                                    </select>
                                </FormGroup>
                                :
                                <FormGroup>
                                    <Label for="smallAnimalFriendly">Small Animal Friendly: </Label>
                                    <select id="SmallAnimalFriendly" onChange={handleFieldChange}>
                                        <option selected>No</option>
                                        <option value={true}>Yes</option>
                                        <option value={false} >No</option>
                                    </select>
                                </FormGroup>
                            }

                            <FormGroup>
                                <Label for="title">Title: </Label>
                                <Input
                                    id="Title"
                                    defaultValue={animal.title}
                                    type="text"
                                    onChange={handleFieldChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="content">Description: </Label>
                                <Input
                                    id="Content"
                                    defaultValue={animal.content}
                                    type="text"
                                    onChange={handleFieldChange} />
                            </FormGroup>

                            {/* <FormGroup>
                    <Label for="imageLocation">Image: </Label>
                    <Input
                        id="ImageLocation"
                        defaultValue={animal.imageLocation}
                        type="text"
                        onChange={handleFieldChange} />
                </FormGroup> */}

                            <FormGroup>
                                <Button
                                    className="aniamlButton"
                                    onClick={saveEditedAnimal}
                                    variant="custom"
                                    type="submit">
                                    Save Animal
                </Button>&nbsp;

                <Button onClick={Cancel}>Cancel</Button>
                            </FormGroup>

                        </Form >
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default AnimalEdit;