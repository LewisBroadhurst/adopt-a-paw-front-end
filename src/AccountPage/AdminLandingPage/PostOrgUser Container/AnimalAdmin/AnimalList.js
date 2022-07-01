import AnimalContainer from "./AnimalContainer/AnimalContainer";


const AnimalList = ( {animals} ) => {

  return (
    <>
        <section className='POU-Container'>

            <h3>Animals</h3>

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
                                        location={animal.location}/>
              })
            }

            <span className="LAP-Admin">All Animals</span>

        </section>
    </>
  )
}

export default AnimalList