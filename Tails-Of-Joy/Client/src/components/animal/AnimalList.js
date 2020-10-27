
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AnimalContext } from "../../providers/AnimalProvider";
import { Button } from "reactstrap";
import Animal from "./Animal"

export default function AnimlalList() {
    const history = useHistory();
    const { animals, getAllAvailableAnimals } = useContext(AnimalContext)

    const Create = () => {
        history.push("animal/add")
    }

    useEffect(() => {
        getAllAvailableAnimals();
    }, []);

    return (
        <>
            <div>
                <Button onClick={Create}>
                    Add Animal
                </Button>
            </div>

            <section>
                {animals.map((animal) => (
                    <Animal key={animal.id} animal={animal} />
                ))}
            </section>

        </>
    )
}