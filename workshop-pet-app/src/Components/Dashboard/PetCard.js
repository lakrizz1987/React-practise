
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';

export default function PetCard({ pet }) {
    const [user, setUser] = useState('');
    const prop = useContext(AuthContext);

    useEffect(() => {
        setUser(prop.user)
    }, [prop.user])

    return (
        <li className="otherPet">
            <h3>Name: {pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p className="img"><img src={pet.img} alt='' /></p>
            {user ? <Link className="button" to={pet._id}>Details</Link> : ''}

        </li>
    );
};