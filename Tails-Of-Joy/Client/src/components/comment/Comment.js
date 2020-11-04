import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./comment.css"
import DayJS from 'react-dayjs';

export default function Comment({ comment }) {

    const { postId } = useParams();
    const history = useHistory();
    const currentUser = JSON.parse(sessionStorage.getItem('userProfile')).id;

    return (
        <Card style={{ border: "none" }}>
            <div className="commentCard">
                <CardBody>
                    <div>Posted By: {comment.userProfile.username}</div>
                    <p>Posted: <DayJS format="MMM D, YY h:mm A">{comment.createDateTime}</DayJS></p>

                    <div className="commentTextArea mb-3 row=10">{comment.content}</div>

                    {(currentUser === comment.userProfileId) ?

                        <div>
                            <Button style={{ margin: 2 }} onClick={() => history.push(`/comment/edit/${comment.id}`)}>Edit</Button>
                            <Button style={{ margin: 2 }} color="danger" onClick={() => history.push(`/comment/delete/${comment.id}`)}>Delete</Button>
                        </div>
                        :
                        null}
                </CardBody>
            </div>
        </Card>
    );
}