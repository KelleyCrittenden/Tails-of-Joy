import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";

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

    return (
        <Form onSubmit={registerClick}>
            <fieldset>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" type="text" onChange={e => setUsername(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="FirstName">First Name</Label>
                    <Input id="firstName" type="text" onChange={e => setFirstName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="LastName">Last Name</Label>
                    <Input id="lastName" type="text" onChange={e => setLastName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="bio">A little Bit About You</Label>
                    <Input id="bio" type="text" onChange={e => setBio(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="imageLocation">Profile Picture </Label>
                    <Input id="imageLocation" type="text" onChange={e => setImageLocation(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Button>Register</Button>
                </FormGroup>
            </fieldset>
        </Form>
    );
}