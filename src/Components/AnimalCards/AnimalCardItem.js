import React from 'react'
import { Link } from 'react-router-dom'
import './AnimalCardItem.css';

function AnimalCardItem(props) {

    const animal = props.animalobj;

  return (
    <>
        <li className='animalcards_item'>
            <Link className='animalcards_item_link' to={`${animal.id}`}>
                <div className='cardleft'>
                        <img
                        className='animalcards_item_img'
                        src={props.src} alt=""
                        />
                </div>
                <div className='cardright'>
                    <p className='animalcards_item_text'>Hi, my name is: {animal.name}</p>
                        <p>Species: {animal.species}</p>
                        <p>Breed: {animal.breed}</p>
                        <p>Age: {animal.age}</p>
                        <p>Location: {animal.location}</p>
                </div>
            </Link>
        </li>
    </>
  )
}

export default AnimalCardItem