import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getAllApplications } from "../../../API";
import "./AApplicationsPage.css";



const AApplicationsPage = () => {

    const [applications, setApplications] = useState([]);

    useEffect( () => {
        getAllApplications(setApplications)
    }, [])

  return (
    <>
        <section className="aap__pageContainer">
            <section className="aap__header">
                <h2>Applications</h2>

                <form className="aap_searchBar">
                    <span>Filter by:</span>

                    <input type="text" placeholder="Animal Name"></input>
                    <input type="text" placeholder="Animal Location"></input>
                    <input type="text" placeholder="Application Status"></input>
                </form>
            </section>

            <main className="aap__mainContent">

                <section className="aap__applicationList">

                    {
                        applications.map( (app, index) => {
                            return  <section key={index} className="aap__appContainer">
                                        <section className="aap__customerInfo">
                                            <h3>Customer Info.</h3>
                                            <span>Application number: {app.id}</span>
                                            <span>{app.customer.firstName} {app.customer.lastName}</span>
                                            <span>{app.customer.location}</span>
                                            <span>Previously adopted? {app.customer.previousAdoptions.toString()}</span>
                                        </section>
                        
                                        <section className="aap__animalInfo">
                                            <h3>Animal Info.</h3>
                                            <span>Name: {app.customer.application[0].animal.name}</span>
                                            <span>DOB: {app.customer.application[0].animal.dateOfBirth}</span>
                                            <span>Location: {app.customer.application[0].animal.location}</span>
                                            <span>Organisation: {app.customer.application[0].animal.organisation.name}</span>
                                        </section>
                                    </section>
                        })
                    }

                </section>

                <section className="aap__forms">
                    <section className="aap__form">
                        <div className="ulp__form__header">
                            <h3>Update Application Status</h3>
                            <button><FontAwesomeIcon icon={faArrowUp} /></button>
                        </div>
                        <form>
                            <input type="text"></input>
                            <input type="text"></input>
                            <input type="text"></input>
                            <button type="button">Press me!</button>
                        </form>
                    </section>

                    <section className="aap__form">
                        <div className="ulp__form__header">
                            <h3>Delete Application</h3>
                            <button><FontAwesomeIcon icon={faArrowUp} /></button>
                        </div>
                        <form>
                            <input type="text"></input>
                            <input type="text"></input>
                            <input type="text"></input>
                            <button type="button">Press me!</button>
                        </form>
                    </section>
                </section>

            </main>
        </section>
    </>
  )
}

export default AApplicationsPage