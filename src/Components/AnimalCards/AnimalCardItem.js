import React from 'react'
import { Link } from 'react-router-dom'
import './AnimalCardItem.css';




function AnimalCardItem(props) {

    const animal = props.animalobj;

    const calculateAge = (DOB) => {
        const ageDifMs = Date.now() - new Date(DOB).getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

  return (
    <>
        <li className='animalcards_item'>
            <Link className='animalcards_item_link' to={`${animal.id}`}>
                <div className='cardleft'>
                        <img
                        className='animalcards_item_img'
                        src={animal.photoUrl}
                        alt=""
                        onError={(e)=>{e.target.onerror = null; e.target.src="./public/familydog.jpeg"}}
                        />
                </div>
                <div className='cardright'>
                    <p className='animalcards_item_name'>{animal.name}</p>
                        <p className='animalcards_item_text'>Species: {animal.species}</p>
                        <p className='animalcards_item_text'>Breed: {animal.breed}</p>
                        <p className='animalcards_item_text'>Age: {calculateAge(animal.dateOfBirth)}</p>
                        <p className='animalcards_item_text'>Sex: {animal.sex}</p>
                        <p className='animalcards_item_text'>Location: {animal.location}</p>
                </div>
            </Link>
        </li>
    </>
  )
}

export default AnimalCardItem