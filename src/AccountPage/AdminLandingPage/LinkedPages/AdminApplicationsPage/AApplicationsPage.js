import { useEffect, useState } from "react";
import { getAllApplications, deleteAdoptionApplication, updateAdoptionApplication } from "../../../../API";
import "./AApplicationsPage.css";
import memeAppCrop from "./Images/memeAppCrop.png";
import AdminHeader from "../../AdminHeader/AdminHeader.js"



const AApplicationsPage = () => {

    const [applications, setApplications] = useState([]);
    const [appicationDeleteId, setApplicationDeleteId] = useState(-1);
    const [applicationUpdateId, setApplicationUpdateId] = useState(-1);
    const [applicationStatus, setApplicationStatus] = useState('');
    const [adopteeNameSearch, setAdopteeNameSearch] = useState('');
    const [animalLocationSearch, setAnimalLocationSearch] = useState('');
    const [applicationStatusSearch, setApplicationStatusSearch] = useState('');

    useEffect( () => {
        getAllApplications(setApplications)

        let refreshApplicationsAfterSearch = async () => {
            setApplications(applications)
        }

        refreshApplicationsAfterSearch()
    }, [applications]);

    const handleApplicationDelete = async (event) => {
        event.preventDefault()

        if (appicationDeleteId === -1) {
            return alert("Please select an ID");
        }

        await deleteAdoptionApplication(appicationDeleteId)

        await getAllApplications(setApplications)

        document.querySelector("select").value = "default";
        document.querySelector("#aap_dr").innerText = "blank";
    }

    const handleApplicationUpdate = async (event) => {
        event.preventDefault();

        await updateAdoptionApplication(applicationUpdateId, applicationStatus);

        await getAllApplications(setApplications);
    }

    const getFilteredApplicationsByName = () => applications.filter( app => app.customer.firstName.toLowerCase().includes(adopteeNameSearch.toLowerCase()) || app.customer.lastName.toLowerCase().includes(adopteeNameSearch.toLowerCase()));

    const getFilteredApplicationsByLocation = () => getFilteredApplicationsByName().filter( app => app.customer.application[0].animal.location.toLowerCase().includes(animalLocationSearch.toLowerCase()));

    const getFilteredApplicationsByStatus = () => getFilteredApplicationsByLocation().filter( app => app.customer.application[0].applicationStatus.toLowerCase().includes(applicationStatusSearch.toLowerCase()));

  return (
    <>  
        <AdminHeader />
        <section className="aap__headContainer">
            <section className="aap__header">
                <h2>Applications</h2>
            </section>

            <form className="aap__searchBar">
                    <span>Filter by:</span>

                    <input type="text" placeholder="Adoptee Name" onChange={(e) => setAdopteeNameSearch(e.target.value)}></input>
                    <input type="text" placeholder="Animal Location" onChange={(e) => setAnimalLocationSearch(e.target.value)}></input>
                    <input type="text" placeholder="Application Status" onChange={(e) => setApplicationStatusSearch(e.target.value)}></input>
            </form>
        </section>

        <main className="aap__mainContent">

            <section className="aap__applicationList">

                {
                   
                    getFilteredApplicationsByStatus().length > 0 ? getFilteredApplicationsByStatus().map( (app, index) => {
                        return  <section key={index} className="aap__appContainer aap__appContainerImage">
                                    <section className="aap__customerInfo">
                                        <h3>Customer Info.</h3>
                                        <span>Application number: {app.id}</span>
                                        <span>{app.customer.firstName} {app.customer.lastName}</span>
                                        <span>{app.customer.location}</span>
                                        <span>Previously adopted? {app.customer.previousAdoptions.toString()}</span>
                                        <span>App. Status: {app.customer.application[0].applicationStatus}</span>
                                    </section>
                    
                                    <section className="aap__animalInfo">
                                        <h3>Animal Info.</h3>
                                        <span>Name: {app.customer.application[0].animal.name}</span>
                                        <span>Sex: {app.customer.application[0].animal.sex}</span>
                                        <span>DOB: {app.customer.application[0].animal.dateOfBirth}</span>
                                        <span>Location: {app.customer.application[0].animal.location}</span>
                                        <span>Organisation: {app.customer.application[0].animal.organisation.name}</span>
                                    </section>

                                    <section className="aap__applicationImg">
                                        <img src={app.customer.application[0].animal.photoUrl} alt=""/>
                                    </section>
                                </section>
                }) : <><p>No applications match your search filters!</p> <img src={memeAppCrop} className="aap__noAppSearch" alt="" /></>}

            </section>

            <section className="aap__forms">
                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Update Application</h3>
                    </div>
                    <form>
                        <select defaultValue="default" onChange={(e) => setApplicationUpdateId(e.target.value) }>
                        <option value="default" disabled hidden>Application ID</option>
                            {
                                applications.map( (app, index) => {
                                    return <option key={index}>{app.id}</option>
                                })
                            }
                        </select>
                        
                        <select defaultValue="default" onChange={(e) => setApplicationStatus(e.target.value) }>
                            <option value="default" disabled hidden>Application Status</option>
                            <option>Rejected</option>
                            <option>Pending</option>
                            <option>Approved</option>
                        </select>
                        <input type="text" placeholder="Reason" required></input>
                        <button type="button" onClick={handleApplicationUpdate}>Update Application</button>
                    </form>
                </section>

                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Delete Application</h3>
                    </div>
                    <form>
                         <select defaultValue="default" onChange={(e) => setApplicationDeleteId(e.target.value)}>
                            <option value="default" disabled hidden>Application ID</option>
                            {
                                applications.map( (app, index) => {
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

        <div className="aap__footer"></div>
    </>
  )
}

export default AApplicationsPage