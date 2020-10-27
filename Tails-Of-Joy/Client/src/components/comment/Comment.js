import React, { useContext } from "react";
import { Card, CardBody } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function Comment({ comment }) {

    const { postId } = useParams();
    const currentUser = JSON.parse(sessionStorage.getItem('userProfile')).id;

    return (
        <Card style={{ border: "none" }}>
            <div className="commentCard">
                <CardBody>
                    {/* <div>{comment.userProfile.username}</div> */}
                    <div>{comment.createDateTime}</div>
                    <div className="commentTextArea">{comment.content}</div>
                    <div>
                        {(currentUser === comment.userProfileId) ?
                            <Link to={`/posts/${postId}/comments/${comment.id}/delete`}>
                                <Button color="danger" className="commentButton">Delete</Button>
                            </Link>
                            : <div></div>}

                        {(currentUser === comment.userProfileId) ?
                            <Link to={`/posts/${postId}/comments/${comment.id}/edit`}>
                                <Button className="commentButton">Edit</Button>
                            </Link>
                            : <div></div>}
                    </div>
                </CardBody>
            </div>
        </Card>
    );
}