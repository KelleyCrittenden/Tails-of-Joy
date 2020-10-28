import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function Comment({ comment }) {

    const { postId } = useParams();
    const history = useHistory();
    const currentUser = JSON.parse(sessionStorage.getItem('userProfile')).id;

    return (
        <Card style={{ border: "none" }}>
            <div className="commentCard">
                <CardBody>
                    {/* <div>{comment.userProfile.username}</div> */}
                    <div>{comment.createDateTime}</div>
                    <div className="commentTextArea">{comment.content}</div>

                    {(currentUser === comment.userProfileId) ?

                        <div>
                            <Button onClick={() => history.push(`/comment/edit/${comment.id}`)}>Edit</Button>
                            <Button onClick={() => history.push(`/comment/delete/${comment.id}`)}>Delete</Button>
                        </div>
                        :
                        null}
                </CardBody>
            </div>
        </Card>
    );
}