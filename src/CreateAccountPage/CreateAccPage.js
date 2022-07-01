import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CreateAccPage.css";

import gpMobForm from "./images/gpMobForm.jpeg";
import { addNewCustomer } from "../API";

const CreateAccPage = () => {

    const handleCreateNewCustomer = event => {
        addNewCustomer()
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
                <div className="cap__form--id">
                    <label>ID</label>
                    <input type="text" placeholder="ID number"></input>
                </div>

                <div className="cap__form--firstName">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name"></input>
                </div>

                <div className="cap__form--lastName">
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name"></input>
                </div>

                <div className="cap__form--age">
                    <label>Age</label>
                    <input type="text" placeholder="Age"></input>
                </div>

                <div className="cap__form--location">
                    <label>Location</label>
                    <input type="text" placeholder="Location"></input>
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