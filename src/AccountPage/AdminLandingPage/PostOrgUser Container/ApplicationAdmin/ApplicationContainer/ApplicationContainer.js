import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { deleteAdoptionApplication, getAllApplications } from "../../../../../API";
import "./ApplicationContainer.css";

const ApplicationContainer = ( {animalName, animalLocation, id, setApplications, applicationStatus, firstName, lastName} ) => {

    const handleApplicationDelete = event => {
        event.preventDefault();

        deleteAdoptionApplication(id);
        getAllApplications(setApplications)
    }

    const appStatusConverter = (id) => {
        if (applicationStatus === 1) {
            return "Pending";
        } 
        else if (applicationStatus === 2) {
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

            <div className='AC__form--formContainer'>
                <div className="AC__form--updateApp">
                    <button type='button'>Update <FontAwesomeIcon icon={faPaw} /></button>
                    <select>
                        <option>xyz</option>
                    </select>
                </div>
                
                <button type='button' className="Decline-Post" onClick={handleApplicationDelete}>Remove from system</button>
            </div>
        </section>
    </>

  )
}

export default ApplicationContainer