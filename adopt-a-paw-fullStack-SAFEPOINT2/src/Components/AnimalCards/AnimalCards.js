import React from 'react'
import AnimalCardItem from './AnimalCardItem'

function AnimalCards() {
  return (
    <div className='animalcards'>
        <div className='animalcards_container'>
            <ul>
                <AnimalCardItem 
                src={process.env.PUBLIC_URL + '/familydog.jpeg'}
                />
            </ul>
        </div>
    </div>
  )
}

export default AnimalCards