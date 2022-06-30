import React from 'react'
import { Link } from 'react-router-dom'
import './AnimalCardItem.css';

function AnimalCardItem(props) {
  return (
    <>
        <li className='animalcards_item'>
            <Link className='animalcards_item_link' to={`${props.id}`}>
                <div className='cardleft'>
                        <img
                        className='animalcards_item_img'
                        src={props.src} alt=""
                        />
                </div>
                <div className='cardright'>
                    <h1 className='animalcards_item_text'>Hi, my name is: {props.name}
                        <p>Species:</p>
                        <p>Breed:</p>
                        <p>Age:</p>
                        <p>Location:</p>
                    </h1>
                </div>
            </Link>
        </li>
    </>
  )
}

export default AnimalCardItem