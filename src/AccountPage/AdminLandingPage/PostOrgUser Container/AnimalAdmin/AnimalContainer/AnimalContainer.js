import "./AnimalContainer.css";
import { deleteAnimal, getAllAnimals } from "../../../../../API";

const AnimalContainer = ( {name, age, location, id, organisationId, reserved, adopted, breed, animals, setAnimals} ) => {

  const handleDeleteAnimal = (event) => {
    event.preventDefault()

    deleteAnimal(id);

    // Get all animals post deletion


    getAllAnimals(setAnimals)

    // Update displayed animals on form
  }

  return (
    <>
      <section className='Post-Admin-Cont AC__details--animalCont'>
          
          <span>Name: {name}</span>
          <span>Age: {age} year(s)</span>
          <span>Location: {location}</span>
          <span>Animal ID: {id}</span>
          <span>Organisation ID: {organisationId}</span>

          <span>Breed: {breed}</span>

          <div className='AC__form--animalCont'>
              <button type='button' onClick={handleDeleteAnimal}>Remove from system</button>
          </div>
      </section>
    </>
  )
}

export default AnimalContainer