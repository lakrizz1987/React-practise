import PetCard from "./PetCard";
import { useState, useEffect } from 'react';
import { getAll } from "../../services/services";
import Loader from '../Loader/Loader'

export default function Dashboard() {
    const [pets, setPets] = useState('');

    useEffect(() => {
        getAll()
            .then(data => setPets(Object.values(data)))

    }, []);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <ul className="other-pets-list">
                {pets ? (pets.length > 0)
                    ?
                    pets.map(pet => <PetCard key={pet._id} pet={pet} />)
                    :
                    <p className="no-pets">No pets in database!</p> : <Loader />}
            </ul>

        </section>
    )
} 