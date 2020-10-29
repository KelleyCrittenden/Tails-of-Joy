import React, { useContext } from "react";
import { Card, CardBody, CardImg, Button } from "reactstrap";
import { useHistory, useParams } from "react-router-dom";
import { UserProfileContext } from "../../providers/UserProfileProvider";


export default function Post({ post }) {
    const history = useHistory();
    const currentUser = JSON.parse(sessionStorage.getItem('userProfile')).id;
    const { userProfile } = useContext(UserProfileContext)
    const { id } = useParams();

    return (
        <Card className="m-4" >
            <CardBody>

                <h4>{post.title}</h4>
                <h5>{post.content}</h5>
                <h6>Posted By: {post.userProfile.username}</h6>
                <Button onClick={() => history.push(`/userProfile/q=${post.userProfile.id}`)}>{post.userProfile.username}'s Profile</Button>
                <CardImg top src={post.imageLocation} alt={post.title} />

                <Button onClick={() => history.push(`/post/details/${post.id}`)}>Details</Button>

                {(currentUser === post.userProfileId) ?

                    <div>
                        <Button onClick={() => history.push(`/post/edit/${post.id}`)}>Edit</Button>
                        <Button onClick={() => history.push(`/post/delete/${post.id}`)}>Delete</Button>
                    </div>
                    :
                    null}

            </CardBody>
        </Card>
    );
}