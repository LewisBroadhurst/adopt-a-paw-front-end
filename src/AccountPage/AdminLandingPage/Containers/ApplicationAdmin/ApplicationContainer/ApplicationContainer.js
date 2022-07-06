import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { deleteAdoptionApplication, getAllApplications, updateAdoptionApplication } from "../../../../../API";
import "./ApplicationContainer.css";
import { useState } from "react";

const ApplicationContainer = ( {animalName, animalLocation, id, setApplications, applicationStatus, firstName, lastName} ) => {

    const handleApplicationDelete = async event => {
        event.preventDefault();

        const animalId = await getId();

        await deleteAdoptionApplication(animalId);

        await getAllApplications(setApplications);
    }

    const getId = () => {
        return new Promise ( (resolve) => {
            const outputId = id;
            resolve(outputId);
        })
    }

    // Update App

    const [status, setStatus] = useState('');

    const handleApplicationUpdate = async (event) => {
        event.preventDefault()

        const animalId = await getId()

        const statusData = {
            "applicationStatus": `${status}`
        }

        await updateAdoptionApplication(animalId, statusData);

        await getAllApplications(setApplications);
    }

  return (

    <>
        <section className='Post-Admin-Cont'>
            
            <span>Name of applicant: {firstName} {lastName}</span>

            <span>Animal Name: {animalName}</span>

            <span>Location: {animalLocation}</span>

            <span>Application Status: {applicationStatus}</span>

            <div className='AC__form--formContainer'>
                <div className="AC__form--updateApp">
                    <button type='button' onClick={handleApplicationUpdate}>Update <FontAwesomeIcon icon={faPaw} /></button>
                    <select defaultValue='default' onChange={(e) => setStatus(e.target.value)}>
                        <option value='default' hidden disabled>Status</option>
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