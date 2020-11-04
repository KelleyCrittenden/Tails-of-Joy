
import React from "react";
import { Card, CardBody, Button, CardImg, CardTitle, CardText, CardImgOverlay } from "reactstrap";
import { useHistory } from "react-router-dom";


export default function Animal({ animal }) {
    const history = useHistory();
    const user = JSON.parse(sessionStorage.getItem("userProfile")).id

    const style = { width: "18em" };

    return (

        <Card className="animalCard" style={style}>
            <CardImg className="animalImage" top width="100%"
                src={animal.imageLocation} alt={animal.name}
            ></CardImg>

            <CardBody>

                <CardTitle>
                    <h4>{animal.name}</h4>
                </CardTitle>
                <CardText>{animal.title}</CardText>

                <Button className="align-self-end btn btn-lg btn-block btn-primary" onClick={() => history.push(`/animal/details/${animal.id}`)}>Details</Button>

            </CardBody>

        </Card>

    );
}