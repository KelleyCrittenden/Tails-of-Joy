
import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, Container, Col } from 'reactstrap';
import { useHistory, Link } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import "./Login.css";

export default function Login() {
    const history = useHistory();
    const { login } = useContext(UserProfileContext);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginSubmit = (e) => {
        e.preventDefault();
        login(email, password)
            .then(() => history.push("/"))
            .catch(() => alert("Invalid email or password"));
    };

    return (
        <>
            <div classname="login_img"></div>
            <div>
                <Container className="Login">
                    <Form className="form" onSubmit={loginSubmit}>
                        <fieldset>
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
                                    <Button>Login</Button>
                                </FormGroup>
                            </Col>

                            <em>
                                Not registered? <Link to="register">Register</Link>
                            </em>

                        </fieldset>
                    </Form>
                </Container>
            </div >
        </>
    );

}