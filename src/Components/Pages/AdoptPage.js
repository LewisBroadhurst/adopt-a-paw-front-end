import React from 'react'
import AnimalCards from '../AnimalCards/AnimalCards'
import './AdoptPage.css'

function AdoptPage() {
  return (
    <div className='adoptPageContainer'>
      <h1 className='adoptTitle'>
        Adopt
      </h1>
      <AnimalCards />
    </div>
  )
}

export default AdoptPage