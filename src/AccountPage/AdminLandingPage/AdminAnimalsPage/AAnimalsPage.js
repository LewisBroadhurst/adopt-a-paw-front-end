import "./AAnimalsPage.css";
import { getAllAnimals, getOrganisations } from "../../../API";
import { useEffect, useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";



const AAnimalsPage = () => {

    const [animals, setAnimals] = useState([]);
    const [organisations, setOrganisations] = useState([]);

    useEffect( () => {
        getAllAnimals(setAnimals)
        getOrganisations(setOrganisations)
    }, []);

    // const handleApplicationDelete = async (event) => {
    //     event.preventDefault()

    //     if (appicationDeleteId === -1) {
    //         return alert("Please select an ID");
    //     }

    //     await deleteAdoptionApplication(appicationDeleteId)

    //     await getAllApplications(setApplications)

    //     document.querySelector("select").value = "default";
    //     document.querySelector("#aap_dr").innerText = "blank";
    // }

    // const handleApplicationUpdate = async (event) => {
    //     event.preventDefault();

    //     await updateAdoptionApplication(applicationUpdateId, applicationStatus);

    //     await getAllApplications(setApplications);
    // }

    // const getFilteredApplicationsByName = () => applications.filter( app => app.customer.firstName.toLowerCase().includes(adopteeNameSearch.toLowerCase()) || app.customer.lastName.toLowerCase().includes(adopteeNameSearch.toLowerCase()));

    // const getFilteredApplicationsByLocation = () => getFilteredApplicationsByName().filter( app => app.customer.application[0].animal.location.toLowerCase().includes(animalLocationSearch.toLowerCase()));

    // const getFilteredApplicationsByStatus = () => getFilteredApplicationsByLocation().filter( app => app.customer.application[0].applicationStatus.toLowerCase().includes(applicationStatusSearch.toLowerCase()));

  return (
    <>  
        <AdminHeader />
        <section className="aap__headContainer">
            <section className="aap__header">
                <h2>Animals</h2>
            </section>

            <form className="aap__searchBar">
                    <span>Filter by:</span>

                    <input type="text" placeholder="Adoptee Name" onChange={(e) => (e.target.value)}></input>
                    <input type="text" placeholder="Animal Location" onChange={(e) => (e.target.value)}></input>
                    <input type="text" placeholder="Application Status" onChange={(e) => (e.target.value)}></input>
            </form>
        </section>

        <main className="aap__mainContent">

            <section className="aap__applicationList">

                {
                    animals.map( (animal, index) => {
                        return <section key={index} className="aap__appContainer">
                        <section className="aap__customerInfo">
                            <h3>Animal Info.</h3>
                            <span>Reference number: {animal.id}</span>
                            <span>Name: {animal.name}</span>
                            <span>DOB: {animal.dateOfBirth}</span>
                            <span>Location: {animal.location}</span>
                            <span>Organisation: {animal.organisation.name}</span>
                            <span>Adoption status: {animal.availableStatus}</span>
                        </section>
        
                        <section className="aap__animalInfo">
                            {/* <h3>Animal Info.</h3>
                            <span>Name: {app.customer.application[0].animal.name}</span>
                            <span>DOB: {app.customer.application[0].animal.dateOfBirth}</span>
                            <span>Location: {app.customer.application[0].animal.location}</span>
                            <span>Organisation: {app.customer.application[0].animal.organisation.name}</span> */}
                        </section>
                    </section>
                    })
                }

            </section>

            <section className="aap__forms">

                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Add Animal</h3>
                    </div>
                    <form>
                        <select defaultValue="default" onChange={(e) => (e.target.value) }>
                        <option value="default" disabled hidden>Animal Reference No.</option>
                            {
                                animals.map( (app, index) => {
                                    return <option key={index}>{app.id}</option>
                                })
                            }
                        </select>
                        
                        <input type="text" placeholder="Name" required></input>
                        <input type="text" placeholder="Date Of Birth" required></input>
                        <input type="text" placeholder="Sex (Male or Female)" required></input>
                        <input type="text" placeholder="Location" required></input>
                        <select defaultValue="default" onChange={(e) => (e.target.value) }>
                        <option value="default" disabled hidden>Organisation</option>
                            {
                                organisations.map( (org, index) => {
                                    return <option key={index}>{org.name}, ID: {org.id}</option>
                                })
                            }
                        </select>
                        <button type="button" onClick="">Add Animal</button>
                    </form>
                </section>

                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Update Animal</h3>
                    </div>
                    <form>
                        <select defaultValue="default" onChange={(e) => (e.target.value) }>
                        <option value="default" disabled hidden>Animal Reference No.</option>
                            {
                                animals.map( (app, index) => {
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
                        <button type="button" onClick="">Update Animal</button>
                    </form>
                </section>

                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Remove Animal</h3>
                    </div>
                    <form>
                         <select defaultValue="default" onChange={(e) => (e.target.value)}>
                            <option value="default" disabled hidden>Animal Reference No.</option>
                            {
                                animals.map( (app, index) => {
                                    return <option key={index}>{app.id}</option>
                                })
                            }
                        </select>
                        <input id="aap_dr" type="text" placeholder="Reason" required></input>
                        <button type="button" onClick="{handleApplicationDelete}">Delete Animal</button>
                    </form>
                </section>
            </section>

        </main>

        <div className="aap__footer"></div>
    </>
  )
}

export default AAnimalsPage