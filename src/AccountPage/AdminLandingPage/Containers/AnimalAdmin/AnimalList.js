import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-regular-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import AnimalContainer from "./AnimalContainer/AnimalContainer";


const AnimalList = ( {animals, setAnimals} ) => {

  return (
    <>
        <section className='POU-Container'>

          <div className="pou__headerElementCont">
            <h3>Animals</h3>

            <span className="LAP-Admin"><Link to="/account/admin/animals">All Animals <FontAwesomeIcon icon={faSquareArrowUpRight}/></Link></span>
          </div>
            
          <div className="pou__cardContainers">
            {
              animals.slice(0, 4).map((animal, index) => {
                return <AnimalContainer key={index}
                                        id={animal.id}
                                        organisationId={animal.organisation_id}
                                        name={animal.name}
                                        age={animal.age}
                                        reserved={animal.reserved}
                                        adopted={animal.adopted}
                                        breed={animal.breed}
                                        location={animal.location}
                                        animals={animals}
                                        setAnimals={setAnimals}/>
              })
            }
          </div>
        </section>
    </>
  )
}

export default AnimalList