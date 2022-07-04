import React from 'react'
import { useParams } from 'react-router-dom'
import { getAnimalByID } from '../../API';
import {useEffect, useState} from 'react';
import './AnimalPage.css';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer"

function AnimalPage() {

    const params = useParams();
    const [animal, setAnimal] = useState({});

    useEffect(() => {
        getAnimalByID(setAnimal, params.id);
    }, [])

  return (
    <>  
        <Header />
        <h1 className='animalname'>{animal.name}</h1>
        <section className="animalpage_container">
            <div className='picture_container'>
                <img src={require("./images/golder-retriever-puppy.jpeg")}/>
            </div>
            <div className='basic_info_container'></div>
        </section>
        <Footer />
    </>
  )
}

export default AnimalPage