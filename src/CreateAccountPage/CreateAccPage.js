import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CreateAccPage.css";

import gpMobForm from "./images/gpMobForm.jpeg";
import { addNewCustomer } from "../API";
import { useState } from "react";

const CreateAccPage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [location, setLocation] = useState('');
    const [prevAdopted, setPrevAdopted] = useState(false);



    const handleCreateNewCustomer = event => {
        event.preventDefault();

        console.log(age);

        const custData = {
            "id": 0,
            "firstName": `${firstName}`,
            "lastName": `${lastName}`,
            "age": `${age}`,
            "location": `${location}`,
            "previousAdoptions": false
        }

        addNewCustomer(custData)

        alert("Successfully created a new account! You will now be re-directed to the sign in page.")
    }


  return (
    <>
        <main className="cap__main--positioning">
            <p>This is your first step to taking a happy Animal home!</p>
            <p>Thank you, from us, our partner organisations, and most importantly, our animals <FontAwesomeIcon icon={faPaw} /></p>

            <section className="cap__imgCont--positioning">
                <img className="" src={gpMobForm} alt="happy doge" />
            </section>

            <form className="cap__form--positioning">

                <div className="cap__form--firstName">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}></input>
                </div>

                <div className="cap__form--lastName">
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}></input>
                </div>

                <div className="cap__form--age">
                    <label>Age</label>
                    <input type="text" placeholder="Age" onChange={(e) => setAge(parseInt(e.target.value))}></input>
                </div>

                <div className="cap__form--location">
                    <label>Location</label>
                    <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)}></input>
                </div>

                <div className="cap__form--prevAdopted">
                    <label>Previously Adopted?</label>
                    <input type="text" placeholder="Adopted before?"></input>
                </div>

                <button type="submit" onClick={handleCreateNewCustomer}>Create Account</button>

            </form>

            
        </main>
    </>
  )
}

export default CreateAccPage