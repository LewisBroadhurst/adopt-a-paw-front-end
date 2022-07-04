import React from 'react'
import AnimalCards from '../AnimalCards/AnimalCards'
import './AdoptPage.css'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer"

function AdoptPage() {
  return (
    <>
    <Header />
    <div className='adoptPageContainer'>
      <h1 className='adoptTitle'>
        Adopt
      </h1>
      <AnimalCards />
    </div>
    <Footer />
    </>
  )
}

export default AdoptPage