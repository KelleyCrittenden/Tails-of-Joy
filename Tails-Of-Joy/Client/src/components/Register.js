import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, Container, Col } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import "./Register.css"

export default function Register() {
    const history = useHistory();
    const { register } = useContext(UserProfileContext);

    const [username, setUsername] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [bio, setBio] = useState();
    const [imageLocation, setImageLocation] = useState();
    const [imageName, setImageName] = useState();


    const registerClick = (e) => {
        e.preventDefault();
        if (password && password !== confirmPassword) {
            alert("Passwords don't match. Do better.");
        } else {
            const userProfile = { username, firstName, lastName, email, bio, imageLocation };
            register(userProfile, password)
                .then(() => history.push("/"));
        }
    };

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


    return (
        <>
            <Container className="Register">
                <Form className="form" onSubmit={registerClick}>
                    <fieldset>
                        <Col>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" type="text" onChange={e => setUsername(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label htmlFor="FirstName">First Name</Label>
                                <Input id="firstName" type="text" onChange={e => setFirstName(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label htmlFor="LastName">Last Name</Label>
                                <Input id="lastName" type="text" onChange={e => setLastName(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="confirmPassword">Confirm Password</Label>
                                <Input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="bio">A little Bit About You</Label>
                                <Input id="bio" type="text" onChange={e => setBio(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="imageLocation">Profile Picture </Label>
                                <div>
                                    <Button onClick={showWidget}>Upload Photo</Button> <p>{imageName}</p>
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Button>Register</Button>
                            </FormGroup>
                        </Col>
                    </fieldset>
                </Form>
            </Container>
        </>
    );
}