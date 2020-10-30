import { useParams, Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Card, CardImg, CardBody, Row, ListGroup, Col, Button } from "reactstrap";
import { AdoptionContext } from "../../providers/PostProvider";
import { AnimalContext } from "../../providers/AnimalProvider"
import { UserProfileContext } from "../../providers/UserProfileProvider"
import Animal from "../animal/AnimalDetails"
import userProfile from "../userProfile/UserProfileDetails"

const AdoptionDetails = () => {

    const { id } = useParams();
    const { adoption, getById } = useContext(AdoptionContext);
    const { animal, getAllAnimalsForAdoption } = useContext(AnimalContext);
    const { userProfile, getUserProfilesForAdoption } = useContext(UserProfileContext)

    useEffect(() => {
        getById(id);
    }, []);

    useEffect(() => {
        getAnimalbyAdoption(id)
    }, []);

    useEffect(() => {
        getUserProfileByAdoption(id)
    }, []);

    return (
        <>
            <Card className="m-4">
                <Row margin="m-4">
                    <h3>Adoption Details</h3>
                    <h1><strong>{adoption.userprofile.firstName}{adoption.userProfile.lastName}</strong></h1>
                </Row>
                <Row margin="m-4">
                    <Col sm="6">
                        <h1>{post.content}</h1>
                    </Col>
                    <Col sm="6">
                        <h6>Posted By: {post.userProfile.firstName}</h6>
                    </Col>
                    <Col sm="6">
                        <h4>Posted On: {post.createDateTime}</h4>
                    </Col>

                </Row>
                <Row margin="m-4">
                </Row>
                <CardBody>
                    <CardImg className="postDetailImg" top src={post.imageLocation} alt={post.title} />
                </CardBody>
            </Card>

            <Link to={`/comment/add/${id}`}>
                <Button id="addCommentButton"> Add Comment </Button>
            </Link>

            {(aniamls.length > 0) ?


                < ListGroup >
                    <h4>Animal: </h4>
                    {
                        animals.map(a =>
                            <Animal key={a.id} animal={a} />
                        )
                    }
                </ListGroup>
                :
                null
            }

        </>


    );
}

export default PostDetails;