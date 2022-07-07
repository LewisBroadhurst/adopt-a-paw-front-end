import "../OrgAniAppMaster.css";
import OrgHeader from "../../components/OrgHeader/OrgHeader.js";
import { useState, useEffect } from "react";
import { getAllApplications, deleteAdoptionApplication, updateAdoptionApplication } from "../../../API";
import "./OrgAppPage.css";


const OrgApplicationsPage = () => {

    const [applications, setApplications] = useState([]);
    const [appicationDeleteId, setApplicationDeleteId] = useState(-1);
    const [applicationUpdateId, setApplicationUpdateId] = useState(-1);
    const [applicationStatus, setApplicationStatus] = useState('');
    const [adopteeNameSearch, setAdopteeNameSearch] = useState('');
    const [animalLocationSearch, setAnimalLocationSearch] = useState('');
    const [applicationStatusSearch, setApplicationStatusSearch] = useState('');


    useEffect( () => {
        getAllApplications(setApplications)
    }, []);

    // Delete Application

    const handleApplicationDelete = async (event) => {
        event.preventDefault()

        if (appicationDeleteId === -1) {
            return alert("Please select an ID");
        }

        await deleteAdoptionApplication(appicationDeleteId)

        await getAllApplications(setApplications)

        document.querySelector("select").value = "default";
        document.querySelector("#aap_dr").innerText = "blank";

        resetForms()
    }

    // Update Application

    const handleApplicationUpdate = async (event) => {
        event.preventDefault();

        if (!applicationUpdateId) {
            return alert ("Please choose an Organisation ID");
        }

        await updateAdoptionApplication(applicationUpdateId, applicationStatus);

        await getAllApplications(setApplications);

        console.log(applicationStatus);

        resetForms()
    }

    // Search bar

    const getFilteredApplicationsByName = () => applications.filter( app => app.customer.firstName.toLowerCase().includes(adopteeNameSearch.toLowerCase()) || app.customer.lastName.toLowerCase().includes(adopteeNameSearch.toLowerCase()));

    const getFilteredApplicationsByLocation = () => getFilteredApplicationsByName().filter( app => app.customer.application[0].animal.location.toLowerCase().includes(animalLocationSearch.toLowerCase()));

    const getFilteredApplicationsByStatus = getFilteredApplicationsByLocation().filter( app => app.customer.application[0].applicationStatus.toLowerCase().includes(applicationStatusSearch.toLowerCase()));

    // Reset Forms

    const resetForms = () => {
        document.getElementById("oap__appUpdateId").value = 'default';
        document.getElementById("oap__appUpdateStatus").value = 'default';
        document.getElementById("oap__appUpdateReason").value = '';
        document.getElementById("oap__appDeleteId").value = 'default';
        document.getElementById("aap_dr").value = '';
        document.getElementById("oap____nameSB").value = '';
        document.getElementById("oap____locationSB").value = '';
        document.getElementById("oap____statusSB").value = '';
        setAdopteeNameSearch('');
        setAnimalLocationSearch('');
        setApplicationStatusSearch('');
    }

  return (
    <>
        <OrgHeader />
        <section className="oaap__headContainer" id="top">
            <section className="oaap__header ">
                <h2>Applications</h2>
            </section>

            <form className="oaap__searchBar">
                    <span>Filter by:</span>

                    <input type="text" id="oap____nameSB" placeholder="Adoptee Name" onChange={(e) => setAdopteeNameSearch(e.target.value)}></input>
                    <input type="text" id="oap____locationSB" placeholder="Animal Location" onChange={(e) => setAnimalLocationSearch(e.target.value)}></input>
                    <input type="text" id="oap____statusSB" placeholder="Application Status" onChange={(e) => setApplicationStatusSearch(e.target.value)}></input>

                    <button type="button" onClick={resetForms}>Reset</button>
            </form>
        </section>

        <main className="oaap__mainContent">

            <section className="oaap__applicationList">

                {
                   
                    getFilteredApplicationsByStatus?.map( (app, index) => {
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
                    <h3>Update Application</h3>
                    <form>
                        <select id="oap__appUpdateId" defaultValue="default" onChange={(e) => setApplicationUpdateId(e.target.value) }>
                        <option value="default" disabled hidden>Application ID</option>
                            {
                                applications?.map( (app, index) => {
                                    return <option key={index}>{app.id}</option>
                                })
                            }
                        </select>
                        
                        <select id="oap__appUpdateStatus" defaultValue="default" onChange={(e) => setApplicationStatus(e.target.value) }>
                            <option value="default" disabled hidden>Application Status</option>
                            <option>Rejected</option>
                            <option>Pending</option>
                            <option>Approved</option>
                        </select>
                        <input type="text" id="oap__appUpdateReason" placeholder="Reason" required></input>
                        <button type="button" onClick={handleApplicationUpdate}>Update Application</button>
                    </form>
                </section>

                <section className="oaap__form">
                    <h3>Delete Application</h3>
                    <form>
                         <select defaultValue="default" id="oap__appDeleteId" onChange={(e) => setApplicationDeleteId(e.target.value)}>
                            <option value="default" disabled hidden>Application ID</option>
                            {
                                applications?.map((app, index) => {
                                    return <option key={index}>{app.id}</option>
                                })
                            }
                        </select>
                        <input id="aap_dr" type="text" placeholder="Reason" required></input>
                        <button type="button" onClick={handleApplicationDelete}>Delete Application</button>
                    </form>
                </section>
            </section>

        </main>
    </>
  )
}

export default OrgApplicationsPage