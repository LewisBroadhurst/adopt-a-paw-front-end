import "./AnimalContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const AnimalContainer = ( {name, age, location, id, organisationId, reserved, adopted, breed} ) => {
  return (
    <>
      <section className='Post-Admin-Cont'>
          
          <span>{name}, {age} year(s), {location}</span>

          <span>Animal ID: {id}, Organisation ID: {organisationId}</span>

          <span>Breed: {breed}</span>

          <div className='Approve-Post-Admin'>
              <button type='button' className="Accept-Post">Accept <FontAwesomeIcon icon={faPaw} /></button>
              <button type='button' className="Decline-Post">Decline ❌</button>
          </div>
      </section>
    </>
  )
}

export default AnimalContainer