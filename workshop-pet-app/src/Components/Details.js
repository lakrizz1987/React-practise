import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { getOne } from "../services/services";

export default function Details() {
    const [pet, setPet] = useState({});
    const match = useParams();
    const id = match.id;

    useEffect(() => {
        getOne(id)
            .then(data => setPet(data))

    }, []);

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.img} /></p>
                <div className="actions">
                    <Link className="button" to={`/edit/${pet._id}`}>Edit</Link>
                    <Link className="button" to="#">Delete</Link>

                    <Link className="button" to="#">Like</Link>

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: 0</span>
                    </div>
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>Today, some dogs are used as pets, others are used to help humans do their work. They are a popular
                    pet because they are usually playful, friendly, loyal and listen to humans. Thirty million dogs in
                    the United States are registered as pets.[5] Dogs eat both meat and vegetables, often mixed together
                    and sold in stores as dog food. Dogs often have jobs, including as police dogs, army dogs,
                    assistance dogs, fire dogs, messenger dogs, hunting dogs, herding dogs, or rescue dogs.</p>
            </div>
        </section>
    )
} 