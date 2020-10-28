import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const AnimalContext = createContext();

export const AnimalProvider = (props) => {
    const [animal, setAnimal] = useState({});
    const [animals, setAnimals] = useState([]);
    const { getToken } = useContext(UserProfileContext);

    const getAllAvailableAnimals = () =>
        getToken().then((token) => {
            fetch(("/api/animal"), {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.json())
                .then(setAnimals);
        });

    const getAnimalById = (id) => {
        return getToken().then((token) => {
            fetch((`/api/animal/${id}`), {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(res => res.json()).then(setAnimal)
        })
    };

    const addAnimal = (animal) => {
        console.log(typeof animal)
        return getToken().then((token) => {
            fetch(("/api/animal"), {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(animal),
            })
        });
    };

    const updateAnimal = (animal) => {
        getToken().then((token) => {
            fetch(`/api/animal/${animal.id}`, {
                method: "PUT",
                headers: {
                    Authoriziation: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(animal),
            })
        })
    }

    const deleteAnimal = (animalId) => {
        return getToken().then((token) => {
            fetch(`/api/animal/${animalId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        })
    }

    return (
        <AnimalContext.Provider value={{ animal, animals, getAllAvailableAnimals, getAnimalById, addAnimal, updateAnimal, deleteAnimal }}>
            {props.children}
        </AnimalContext.Provider>
    );
};