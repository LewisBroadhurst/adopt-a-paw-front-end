// import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import OrgHeader from "../../components/OrgHeader/OrgHeader.js";
import { getAllAnimals, getAllApplications } from "../../../API.js";


const OrgAnimalsPage = () => {

    const [animals, setAnimals] = useState([]);

    useEffect( () => {
        getAllAnimals(setAnimals)
    }, []);

  return (
    <>
    <OrgHeader />
    <section className="oaap__headContainer">
            <section className="oaap__header ">
                <h2>Animals</h2>
            </section>

            <form className="oaap__searchBar">
                    <span>Filter by:</span>

                    <input type="text" placeholder="Adoptee Name" onChange={(e) => (e.target.value)}></input>
                    <input type="text" placeholder="Animal Location" onChange={(e) => (e.target.value)}></input>
                    <input type="text" placeholder="Application Status" onChange={(e) => (e.target.value)}></input>
            </form>
        </section>

        <main className="oaap__mainContent">

            <section className="oaap__applicationList">

                {
                   
                    animals?.map( (animal, index) => {
                        return <section key={index} className="aap__appContainer">
                                    <section className="aap__customerInfo">
                                        <h3>Animal Info.</h3>
                                        <span>Reference number: {animal.id}</span>
                                        <span>Name: {animal.name}</span>
                                        <span>DOB: {animal.dateOfBirth}</span>
                                        <span>Location: {animal.location}</span>
                                        {/* <span>Organisation: {animal.organisation.name != null ? animal.organisation.name : "Not specified"}</span> */}
                                        <span>Adoption status: {animal.availableStatus}</span>
                                    </section>
                    
                                    <section className="aap__animalImg">
                                        <img src={animal.photoUrl} alt="" />
                                    </section>
                                </section>
                })}

            </section>

            <section className="oaap__forms">
                <section className="oaap__form">
                    <div className="ulp__form__header">
                        <h3>Update Application</h3>
                    </div>
                    <form>
                        <select defaultValue="default" onChange={(e) => (e.target.value) }>
                        <option value="default" disabled hidden>Application ID</option>
                            {
                                animals.map((app, index) => {
                                    return <option key={index}>{app.id}</option>
                                })
                            }
                        </select>
                        
                        <select defaultValue="default" onChange={(e) => (e.target.value) }>
                            <option value="default" disabled hidden>Application Status</option>
                            <option>Rejected</option>
                            <option>Pending</option>
                            <option>Approved</option>
                        </select>
                        <input type="text" placeholder="Reason" required></input>
                        <button type="button" onClick="">Update Application</button>
                    </form>
                </section>

                <section className="oaap__form">
                    <div className="ulp__form__header">
                        <h3>Delete Animal</h3>
                    </div>
                    <form>
                         <select defaultValue="default" onChange={(e) => (e.target.value)}>
                            <option value="default" disabled hidden>Application ID</option>
                            {
                                animals.map((animal, index) => {
                                    return <option key={index}>{animal.id}</option>
                                })
                            }
                        </select>
                        <input id="aap_dr" type="text" placeholder="Reason" required></input>
                        <button type="button" onClick="">Delete Application</button>
                    </form>
                </section>
            </section>

        </main>
    </>
  )
}

export default OrgAnimalsPage