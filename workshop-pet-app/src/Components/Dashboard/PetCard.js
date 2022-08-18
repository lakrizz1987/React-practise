import {Link} from 'react-router-dom'

export default function PetCard({pet}){
    return(
        <li className="otherPet">
                <h3>Name: {pet.name}</h3>
                <p>Type: {pet.type}</p>
                <p className="img"><img src={pet.img}/></p>
                <Link className="button" to={pet._id}>Details</Link>
            </li>
    )
}