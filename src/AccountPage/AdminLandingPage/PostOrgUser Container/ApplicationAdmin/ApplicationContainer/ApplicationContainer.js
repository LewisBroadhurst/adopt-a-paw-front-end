import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { deleteAdoptionApplication, getAllApplications } from "../../../../../API";
import "./ApplicationContainer.css";

const ApplicationContainer = ( {animalName, animalLocation, id, setApplications, applicationStatus, firstName, lastName} ) => {

    const handleApplicationDelete = async event => {
        event.preventDefault();

        const animalId = await getId();

        deleteAdoptionApplication(animalId);

        getAllApplications(setApplications)
    }

    const getId = () => {
        return new Promise ( (resolve) => {
            const outputId = id;
            resolve(outputId);
        })
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
                        <option>Accepted</option>
                        <option>Rejected</option>
                        <option>Pending</option>
                    </select>
                </div>
                
                <button type='button' onClick={handleApplicationDelete}>Reject and Delete</button>
            </div>
        </section>
    </>

  )
}

export default ApplicationContainer