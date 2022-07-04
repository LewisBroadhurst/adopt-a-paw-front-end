import React from 'react'
import { useParams } from 'react-router-dom'
import { getAnimalByID, getOrganisations } from '../../API';
import {useEffect, useState} from 'react';
import './AnimalPage.css';

function AnimalPage() {

    const params = useParams();
    const [animal, setAnimal] = useState({});

    useEffect(() => {
        getAnimalByID(setAnimal, params.id);
    }, [])



    const [organisation, setOrganisation] = useState({});

    useEffect(() => {
        getOrganisations(setOrganisation, params.id);
    }, [])

    
    let gender = ""

    if(animal.sex === "Male") {
        gender = "boy";
    } else if (animal.sex === "Female") {
        gender = "girl";
    } else {
        gender = "";
    }


    const calculateAge = (DOB) => {
        const ageDifMs = Date.now() - new Date(DOB).getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }


  return (
    <>
        <h1 className='animalname'>{animal.name}</h1>
        <section className="animalpage_container">
            <br/>
            <div className='left_align'>
                <button className='back_button'><a href="../adopt">Back to results</a></button>
            </div>
            <div>
                <img className='picture_container' src={animal.photoUrl} onError={(e)=>{e.target.onerror = null; e.target.src="../../familydog.jpeg"}}/>
            </div>
            <div className='basic_info_container'><h3>Hi, I'm a little {gender} called {animal.name}. I'm a {calculateAge(animal.dateOfBirth)} year old {animal.breed} {animal.species} from {animal.location} and I'm looking for my forever home!</h3>
            <br></br>
            </div>
            <div className='org_info_container'>
                <h3>Contact your local centre or branch to find out more about this animal:</h3>
                <br/>
                <p>Name: {organisation.name}</p>
                <p>Email: </p>
                <p>Contact Number:</p>
                <br/>
                <div className='center_text'>Or click here to enquire now</div>
                <div className='center_text'><button className='adopt_button'><a href="../account/userLandPage">Adopt me!</a></button></div>
                <br/>
                <div className='center_text'>Check out our advice page for more information on rehoming a pet</div>
                <div className='center_text'><button className='advice_button'><a href="../advice">Rehoming Advice</a></button></div>
            </div>
        </section>
        <br/>
    </>
    
  )
}

export default AnimalPage