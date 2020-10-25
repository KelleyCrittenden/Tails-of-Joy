import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import { useHistory } from "react-router-dom";


export default function Animal({ animal }) {
    const history = useHistory();
    return (
        <Card className="m-4" >
            <CardBody>

                <h4>{animal.name}</h4>
                <h5>{animal.breed}</h5>
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