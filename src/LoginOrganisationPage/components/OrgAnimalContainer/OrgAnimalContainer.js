import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import AnimalContainer from '../../../AccountPage/AdminLandingPage/Containers/AnimalAdmin/AnimalContainer/AnimalContainer'

const OrgAnimalContainer = ({animals}) => {
  return (
    <>
    <section className="olp__sectionContainer">
        <div className="olp__headerElementCont">
            <h3>Animals</h3>
            <span><Link to="/account/organisation/animals">All Animals <FontAwesomeIcon icon={faSquareArrowUpRight} /></Link></span>
        </div>
        
        <div className="olp__cardContainers">
        {
            animals.slice(0, 3).map((animal, index) => {
            return <AnimalContainer key={index}
                                    id={animal.id}
                                    organisationId={animal.organisation_id}
                                    name={animal.name}
                                    age={animal.age}
                                    reserved={animal.reserved}
                                    adopted={animal.adopted}
                                    breed={animal.breed}
                                    location={animal.location}
                                    // animals={animals}
                                    // setAnimals={setAnimals}
                                    />
            })
        }
        </div>
    </section>
    </>
  )
}

export default OrgAnimalContainer