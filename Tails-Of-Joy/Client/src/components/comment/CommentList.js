
import React, { useContext, useEffect } from "react";
import { CommentContext } from "../../providers/CommentProvider";
import Comment from "./Comment"

export default function CommentList() {
    const history = useHistory();
    const { comments, etAllCommentsForPost } = useContext(CommentContext)

    useEffect(() => {
        getAllAvailableAnimals();
    }, []);

    return (

        <section>
            {animals.map((animal) => (
                <Animal key={animal.id} animal={animal} />
            ))}
        </section>

    )
}