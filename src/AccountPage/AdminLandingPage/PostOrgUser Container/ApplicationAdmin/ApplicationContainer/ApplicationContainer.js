import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { deleteAdoptionApplication, getAllApplications } from "../../../../../API";

const ApplicationContainer = ( {animalName, animalLocation, id, setApplications, applicationStatus, firstName, lastName} ) => {

    const handleApplicationDelete = event => {
        event.preventDefault();

        deleteAdoptionApplication(id);
        getAllApplications(setApplications)
    }

    const appStatusConverter = (id) => {
        if (applicationStatus === 0) {
            return "Pending";
        } 
        else if (applicationStatus === 1) {
            return "Accepted";
        }
        else {
            return "Rejected";
        }
    }


  return (

    <>
        <section className='Post-Admin-Cont'>
            
            <span>Name of applicant: {firstName} {lastName}</span>

            <span>Animal Name: {animalName}</span>

            <span>Location: {animalLocation}</span>

            <span>Application Status: {appStatusConverter()}</span>

            <div className='Approve-Post-Admin'>
                <button type='button' className="Accept-Post">Accept <FontAwesomeIcon icon={faPaw} /></button>
                <button type='button' className="Decline-Post" onClick={handleApplicationDelete}>Decline ❌</button>
            </div>
        </section>
    </>

  )
}

export default ApplicationContainer