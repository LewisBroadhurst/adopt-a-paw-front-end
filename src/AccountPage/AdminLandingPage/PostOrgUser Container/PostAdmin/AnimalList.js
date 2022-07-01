import { useEffect, useState } from "react"
import AnimalContainer from "./AnimalContainer/AnimalContainer"


const AnimalList = ( {animals} ) => {

  return (
    <>
        <section className='POU-Container'>

            <h3>Latest Adoption Posts</h3>

            {
              animals.slice(0, 3).map((animal, index) => {
                return <AnimalContainer key={index}
                                        id={animal.id}
                                        organisationId={animal.organisation_id}
                                        name={animal.name}
                                        age={animal.age}
                                        location={animal.location}/>
              })
            }

            <span className="LAP-Admin">All posts</span>

        </section>
    </>
  )
}

export default AnimalList