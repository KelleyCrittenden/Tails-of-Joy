import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import { useHistory } from "react-router-dom";


export default function Animal({ animal }) {
    const history = useHistory();
    return (
        <Card className="m-4" >
            <CardBody>

                <strong>{animal.name}</strong>
                <h4>{animal.breed}</h4>
                <p>{animal.title}</p>

                <Button onClick={() => history.push(`/animal/details/${animal.id}`)}></Button>

                <>
                    <Button onClick={() => history.push(`/animal/edit/${animal.id}`)}></Button>
                    <Button onClick={() => history.push(`/animal/delete/${animal.id}`)}></Button>
                </>

            </CardBody>
        </Card>
    );
}