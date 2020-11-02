
import React from "react";
import { Card, CardBody, Button, CardImg, CardTitle, CardText } from "reactstrap";
import { useHistory } from "react-router-dom";


export default function Animal({ animal }) {
    const history = useHistory();
    const user = JSON.parse(sessionStorage.getItem("userProfile")).id

    const style = { width: "18em" };

    return (
        <Card style={style}>
            <CardImg top width="100%"
                src={animal.imageLocation} alt={animal.name}
            ></CardImg>
            <CardBody>

                <CardTitle>{animal.name}</CardTitle>
                <CardText>{animal.title}</CardText>

                <Button onClick={() => history.push(`/animal/details/${animal.id}`)}>Details</Button>
                {/* {user == 1 ?
                    <>
                        <Button onClick={() => history.push(`/animal/edit/${animal.id}`)}>Edit</Button>
                        <Button onClick={() => history.push(`/animal/delete/${animal.id}`)}>Delete</Button>
                    </>
                    : null} */}
            </CardBody>
        </Card>
    );
}