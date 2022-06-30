import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { deleteAdoptionApplication, getAllApplications } from "../../../../../API";

const ApplicationContainer = ( {animalName, animalLocation, id, setApplications} ) => {

    const handleApplicationDelete = event => {
        event.preventDefault();

        deleteAdoptionApplication(id);
        getAllApplications(setApplications)
    }


  return (

    <>
        <section className='Post-Admin-Cont'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at libero ultrices, condimentum tellus sit amet, tempus metus. Aenean id tortor at nisi consequat facilisis.</p>

            <span>Animal Name: {animalName}</span>

            <span>Location: {animalLocation}</span>

            <div className='Approve-Post-Admin'>
                <button type='button' className="Accept-Post">Accept <FontAwesomeIcon icon={faPaw} /></button>
                <button type='button' className="Decline-Post" onClick={handleApplicationDelete}>Decline ❌</button>
            </div>
        </section>
    </>

  )
}

export default ApplicationContainer