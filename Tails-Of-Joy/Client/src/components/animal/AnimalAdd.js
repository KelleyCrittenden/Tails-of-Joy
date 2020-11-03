import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AnimalContext } from "../../providers/AnimalProvider";
import { Button, Form, FormGroup, Card, CardBody, Label, Input, Col } from "reactstrap";
import { render } from "@testing-library/react";


const AnimalAdd = () => {

    const history = useHistory();
    const { addAnimal } = useContext(AnimalContext)

    const [isAdoptable, setIsAdoptable] = useState();
    const [name, setName] = useState();
    const [breed, setBreed] = useState();
    const [gender, setGender] = useState();
    const [age, setAge] = useState();
    const [size, setSize] = useState();
    const [childFriendly, setChildFriendly] = useState();
    const [smallAnimalFriendly, setSmallAnimalFriendly] = useState();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [imageLocation, setImageLocation] = useState();
    const [imageName, setImageName] = useState();

    const createNewAnimal = (e) => {
        e.preventDefault();
        const animalToSave = {
            isAdoptable: true,
            name,
            breed,
            gender,
            age,
            size,
            childFriendly: true,
            smallAnimalFriendly: true,
            title,
            content,
            imageLocation
        }
        if (animalToSave.IsAdoptable === "" || animalToSave.Name === "" || animalToSave.Breed === "" || animalToSave.Gender === "" || animalToSave.Age === "" || animalToSave.Size === "" || animalToSave.ChildFriendly === "" || animalToSave.SmallAnimalFriendly === "" || animalToSave.Title === "" || animalToSave.Content === "") {
            alert("Please Fill Out All Fields");
        } else {
            addAnimal(animalToSave)
                .then(() => history.push("/animal"))
        }
    }

    const checkUploadResult = (resultEvent) => {
        if (resultEvent.event === 'success') {

            setImageLocation(resultEvent.info.secure_url)
            setImageName(resultEvent.info.original_filename + `.${resultEvent.info.original_extension}`)

        }
    }

    const showWidget = (event) => {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: "kelleycrittenden",
            uploadPreset: "Tails_of_Joy"
        },
            (error, result) => { checkUploadResult(result) })

        widget.open()
    }

    const Cancel = () => {
        history.push("/animal")
    }

    return (
        <div className="container pt-4">
            <div className="row justify-content-center">
                <Card className="col-sm-12 col-lg-6">
                    <CardBody>
                        <Form encType="multipart/form-data">

                            <FormGroup>
                                <Label for="isAdoptable">Availble for Adoption: </Label>
                                <select id="IsAdoptable" onChange={e => setIsAdoptable(e.target.value)} required>
                                    <option value="">Select</option>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label for="name">Name: </Label>
                                <Input
                                    id="Name"
                                    type="text"
                                    onChange={e => setName(e.target.value)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="breed">Breed: </Label>
                                <Input
                                    id="Breed"
                                    type="text"
                                    onChange={e => setBreed(e.target.value)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="gender">Gender: </Label>
                                <select id="Gender" onChange={e => setGender(e.target.value)} required>
                                    <option value="">Select</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label for="age">Age: </Label>
                                <select id="Age" onChange={e => setAge(e.target.value)} required>
                                    <option value="">Select</option>
                                    <option value="young">Baby</option>
                                    <option value="young">Young</option>
                                    <option value="adult">Adult</option>
                                    <option value="senior">Senior</option>
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label for="size">Size: </Label>
                                <select id="Size" onChange={e => setSize(e.target.value)} required>
                                    <option value="">Select</option>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                    <option value="x-large">X-large</option>
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label for="childFriendly">Child Friendly: </Label>
                                <select id="ChildFriendly" onChange={e => setChildFriendly(e.target.value)} required>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label for="smallAnimalFriendly">Small Animal Friendly: </Label>
                                <select id="SmallAnimalFriendly" onChange={e => setSmallAnimalFriendly(e.target.value)} required>
                                    <option value={true}>Yes</option>
                                    <option value={false} >No</option>
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label for="title">Title: </Label>
                                <Input
                                    id="Title"
                                    type="text"
                                    onChange={e => setTitle(e.target.value)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="content">Description: </Label>
                                <Input
                                    id="Content"
                                    type="text"
                                    onChange={e => setContent(e.target.value)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="imageLocation">Image: </Label>
                                <div>
                                    <Button onClick={showWidget}>Upload Photo</Button> <p>{imageName}</p>
                                </div>
                            </FormGroup>

                        </Form>
                        <Button
                            className="aniamlButton"
                            onClick={createNewAnimal}
                            variant="custom"
                            type="submit">
                            Save Animal
                    </Button>


                        <Button onClick={Cancel}>Cancel</Button>

                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default AnimalAdd;

