import React, { useContext } from "react";
import { Card, CardBody, CardImg, Button } from "reactstrap";
import { useHistory } from "react-router-dom";

export default function Post({ post }) {
    const history = useHistory();

    return (
        <Card className="m-4" >
            <CardBody>

                <h4>{post.title}</h4>
                <h5>{post.content}</h5>
                <h6>Posted By: {post.userProfile.userName}</h6>
                <CardImg top src={post.imageLocation} alt={post.title} />

                <Button onClick={() => history.push(`/post/details/${post.id}`)}></Button>

                <>
                    <Button onClick={() => history.push(`/post/edit/${post.id}`)}></Button>
                    <Button onClick={() => history.push(`/post/delete/${post.id}`)}></Button>
                </>

            </CardBody>
        </Card>
    );
}