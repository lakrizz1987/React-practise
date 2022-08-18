import {  useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getOne } from "../services/services";

export default function Edit(){
    const [pet, setPet] = useState({})
    const match = useParams()
    const id = match.id

    useEffect(() => {
        getOne(id)
            .then(data => setPet(data))

    }, [])
    
    return(
        <section id="edit-page" className="edit">
        <form id="edit-form" action="#" method="">
            <fieldset>
                <legend>Edit my Pet</legend>
                <p className="field">
                    <label htmlFor="name">Name</label>
                    <span className="input">
                        <input type="text" name="name" id="name" value={pet.name}/>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea name="description" 
                            id="description" defaultValue={'Today, some dogs are used as pets, others are used to help humans do their work. They are a popular pet because they are usually playful, friendly, loyal and listen to humans. Thirty million dogs in the United States are registered as pets.[5] Dogs eat both meat and vegetables, often mixed together and sold in stores as dog food. Dogs often have jobs, including as police dogs, army dogs, assistance dogs, fire dogs, messenger dogs, hunting dogs, herding dogs, or rescue dogs.'} />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input type="text" name="imageUrl" id="image" value={pet.img}/>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="type">Type</label>
                    <span className="input">
                        <select id="type" name="type" defaultValue={pet.type}>
                            <option value="cat">Cat</option>
                            <option value="dog" selected>Dog</option>
                            <option value="parrot">Parrot</option>
                            <option value="reptile">Reptile</option>
                            <option value="other">Other</option>
                        </select>
                    </span>
                </p>
                <input className="button submit" type="submit" value="Save"/>
            </fieldset>
        </form>
    </section>
    )
} 