import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getOne } from "../services/services";

export default function Edit() {
    let [pet, setPet] = useState({})

    const match = useParams()
    const id = match.id

    useEffect(() => {
        getOne(id)
            .then(data => setPet(data))

    }, []);



    function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        const { name, description, imageUrl, type } = Object.fromEntries(formData);
        console.log(name, description, imageUrl, type)
    }

    function onChangeHandler(e) {
        const chekedOption = e.target.value;
        const newArr = { ...pet };
        newArr.type = chekedOption;
        setPet(newArr);
    }

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" action="#" method="POST" onSubmit={submitHandler} >
                <fieldset>
                    <legend>Edit my Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" defaultValue={pet.name} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description"
                                id="description" defaultValue='today, some dogs are used as pets, others are used to help humans do their work. They are a popular pet because they are usually playful, friendly, loyal and listen to humans. Thirty million dogs in the United States are registered as pets.[5] Dogs eat both meat and vegetables, often mixed together and sold in stores as dog food. Dogs often have jobs, including as police dogs, army dogs, assistance dogs, fire dogs, messenger dogs, hunting dogs, herding dogs, or rescue dogs.' />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={pet.img} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" value={pet.type} onChange={onChangeHandler} >
                                <option defaultValue="cat">Cat</option>
                                <option defaultValue="dog" >Dog</option>
                                <option defaultValue="parrot" >Parrot</option>
                                <option defaultValue="reptile">Reptile</option>
                                <option defaultValue="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" defaultValue="Save" />
                </fieldset>
            </form>
        </section>
    )
} 