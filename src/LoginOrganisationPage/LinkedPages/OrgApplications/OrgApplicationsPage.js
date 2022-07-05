import "../OrgAniAppMaster.css";
import OrgHeader from "../../components/OrgHeader/OrgHeader.js";
import { useState, useEffect } from "react";
import { getAllAnimals, getAllApplications } from "../../../API";

const OrgApplicationsPage = () => {

    const [animals, setAnimals] = useState([]);

    useEffect( () => {
        getAllApplications(setAnimals)
    }, []);

  return (
    <>
        <OrgHeader />
        <section className="oaap__headContainer">
            <section className="oaap__header ">
                <h2>Applications</h2>
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
                   
                    animals.map( (app, index) => {
                        return  <section key={index} className="oaap__appContainer oaap__appContainerImage">
                                    <section className="oaap__customerInfo">
                                        <h3>Customer Info.</h3>
                                        <span>Application number: {app.id}</span>
                                        <span>{app.customer.firstName} {app.customer.lastName}</span>
                                        <span>{app.customer.location}</span>
                                        <span>Previously adopted? {app.customer.previousAdoptions.toString()}</span>
                                        <span>App. Status: {app.customer.application[0].applicationStatus}</span>
                                    </section>
                    
                                    <section className="oaap__animalInfo">
                                        <h3>Animal Info.</h3>
                                        <span>Name: {app.customer.application[0].animal.name}</span>
                                        <span>Sex: {app.customer.application[0].animal.sex}</span>
                                        <span>DOB: {app.customer.application[0].animal.dateOfBirth}</span>
                                        <span>Location: {app.customer.application[0].animal.location}</span>
                                        <span>Organisation: {app.customer.application[0].animal.organisation.name}</span>
                                    </section>

                                    <section className="oaap__applicationImg">
                                        <img src={app.customer.application[0].animal.photoUrl} alt=""/>
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
                                (app, index) => {
                                    return <option key={index}>{app.id}</option>
                                }
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
                        <h3>Delete Application</h3>
                    </div>
                    <form>
                         <select defaultValue="default" onChange={(e) => (e.target.value)}>
                            <option value="default" disabled hidden>Application ID</option>
                            {
                                (app, index) => {
                                    return <option key={index}>{app.id}</option>
                                }
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

export default OrgApplicationsPage