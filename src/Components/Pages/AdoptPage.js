import React from 'react'
import AnimalCards from '../AnimalCards/AnimalCards'
import './AdoptPage.css'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer"
import AnimalFilter from './AnimalFilter';
import { useState } from 'react'

function AdoptPage() {

  const [filter, setFilter] = useState({});

  return (
    <>
    <Header />
    <div className='adoptPageContainer'>
      <h1 className='adoptTitle'>
        Adopt
      </h1>
      <AnimalFilter setFilter={setFilter}/>
      <AnimalCards filter={filter}/>
    </div>
    <Footer />
    </>
  )
}

export default AdoptPage