import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AnimalContext } from "../../providers/AnimalProvider";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";


const AnimalAdd = () => {

    const history = useHistory();
    const { addAnimal } = useContext(AnimalContext)

    const [animal, setAnimal] = useState({
        IsAdoptable: true,
        Name: "",
        Breed: "",
        Gender: "",
        Age: "",
        Size: "",
        ChildFriendly: "",
        SmallAnimalFriendly: "",
        Title: "",
        Content: "",
        ImageLocation: ""
    })

    const createNewAnimal = (e) => {
        e.preventDefault();
        const animalToSave = {
            IsAdoptable: animal.IsAdoptable == `true`,
            Name: animal.Name,
            Breed: animal.Breed,
            Gender: animal.Gender,
            Age: animal.Age,
            Size: animal.Size,
            ChildFriendly: parseInt(animal.ChildFriendly),
            SmallAnimalFriendly: parseInt(animal.SmallAnimalFriendly),
            Title: animal.Title,
            Content: animal.Content,
            ImageLocation: animal.ImageLocation
        }
        addAnimal(animalToSave);
        console.log("added animal", animalToSave)
        history.push("/animal");
    }

    const handleFieldChange = (e) => {
        const stateToChange = { ...animal };
        stateToChange[e.target.id] = e.target.value;
        setAnimal(stateToChange)
    }

    return (
        <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Form >

                <FormGroup>
                    <Label for="isAdoptable">Availble for Adoption: </Label>
                    <select id="IsAdoptable" onChange={handleFieldChange}>
                        <option>Choose...</option>
                        <option value={true}>Yes</option>
                        <option value={false} >No</option>
                    </select>
                </FormGroup>

                <FormGroup>
                    <Label for="name">Name: </Label>
                    <Input
                        id="Name"
                        type="text"
                        onChange={handleFieldChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="breed">Breed: </Label>
                    <Input
                        id="Breed"
                        type="text"
                        onChange={handleFieldChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="gender">Gender: </Label>
                    <select id="Gender" onChange={handleFieldChange}>
                        <option>Choose...</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                </FormGroup>

                <FormGroup>
                    <Label for="age">Age: </Label>
                    <select id="Age" onChange={handleFieldChange}>
                        <option>Choose...</option>
                        <option value="young">Baby</option>
                        <option value="young">Young</option>
                        <option value="adult">Adult</option>
                        <option value="senior">Senior</option>
                    </select>
                </FormGroup>

                <FormGroup>
                    <Label for="size">Size: </Label>
                    <select id="Size" onChange={handleFieldChange}>
                        <option>Choose...</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="x-large">X-large</option>
                    </select>
                </FormGroup>

                <FormGroup>
                    <Label for="childFriendly">Child Friendly: </Label>
                    <select id="ChildFriendly" onChange={handleFieldChange}>
                        <option>Choose...</option>
                        <option value={0}>Yes</option>
                        <option value={1} >No</option>
                    </select>
                </FormGroup>

                <FormGroup>
                    <Label for="smallAnimalFriendly">Small Animal Friendly: </Label>
                    <select id="SmallAnimalFriendly" onChange={handleFieldChange}>
                        <option>Choose...</option>
                        <option value={0}>Yes</option>
                        <option value={1} >No</option>
                    </select>
                </FormGroup>

                <FormGroup>
                    <Label for="title">Title: </Label>
                    <Input
                        id="Title"
                        type="text"
                        onChange={handleFieldChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="content">Description: </Label>
                    <Input
                        id="Content"
                        type="text"
                        onChange={handleFieldChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="imageLocation">Image: </Label>
                    <Input
                        id="ImageLocation"
                        type="text"
                        onChange={handleFieldChange} />
                </FormGroup>

                <FormGroup>
                    <Button
                        className="aniamlButton"
                        onClick={createNewAnimal}
                        variant="custom"
                        type="submit">
                        Save Animal
                    </Button>
                </FormGroup>

            </Form>
        </Col>
    )
}

export default AnimalAdd;

