import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const AdoptionContext = createContext();

export const AdoptionProvider = (props) => {
    const [adoption, setAdoption] = useState({});
    const [adoption, setAdoption] = useState([]);
    const { getToken } = useContext(UserProfileContext);

    const getAllApprovedAdoptions = () =>
        getToken().then((token) => {
            fetch(("/api/adoption"), {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.json())
                .then(setAdoptions);
        });

    const getAllPendingAdoptions = () =>
        getToken().then((token) => {
            fetch(("/api/adoption/pending"), {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.json())
                .then(setAdoptions);
        });

    const getById = (id) => {
        return getToken().then((token) => {
            fetch((`/api/adoption/${id}`), {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(res => res.json()).then(setAdoption)
        })
    };

    const getByUserId = (id) => {
        return getToken().then((token) => {
            fetch((`/api/adoption/user/${id}`), {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(res => res.json()).then(setAdoption)
        })
    };

    const addAdoption = (adoption) => {
        return getToken().then((token) => {
            fetch(("/api/adoption"), {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(adoption),
            })
        });
    };

    const updateAdoption = (adoption) => {
        getToken().then((token) => {
            fetch(`/api/adoption/${animal.id}`, {
                method: "PUT",
                headers: {
                    Authoriziation: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(adoption),
            })
        })
    }

    const deleteAdoption = (adoptionId) => {
        return getToken().then((token) => {
            fetch(`/api/adoption/${adoptionId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        })
    }

    return (
        <AnimalContext.Provider value={{ adoption, adoptions, getById, getByUserId, getAllPendingAdoptions, getAllApprovedAdoptions, addAdoption, updateAdoption, deleteAdoption }}>
            {props.children}
        </AnimalContext.Provider>
    );
};