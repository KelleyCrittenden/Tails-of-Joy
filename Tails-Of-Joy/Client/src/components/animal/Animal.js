import { useHistory, useParams } from "react-router-dom";
import React from "react";
import { Card, CardBody, Button } from "reactstrap";

export default function Animal({ animal }) {
    const history = useHistory();
    const { id } = useParams();
    const intId = parseInt(id);

    return (
        <Card className="m-4" >
            <CardBody>

                <image>{animal.imageLocation}</image>
                <strong> {animal.name}</strong>
                <h4>{animal.breed}</h4>
                <p>{animal.title}</p>

                <Button onClick={() => history.push(`/animal/details/${animal.id}`)}></Button>

                {active.userTypeId === 1 &&
                    <>
                        <Button onClick={() => history.push(`/animal/edit/${animal.id}`)}></Button>
                        <Button onClick={() => history.push(`/animal/delete/${animal.id}`)}></Button>
                    </>
                }
            </CardBody>
        </Card>
    );
}