import OrgAdminCont from "./PostOrgUser Container/OrgAdmin/OrgList.js";
import UserAdminCont from "./PostOrgUser Container/CustomerAdmin/CustomerList.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getCustomers, getOrganisations, getAllAnimals } from "../../API.js";
import ApplicationList from "./PostOrgUser Container/ApplicationAdmin/ApplicationList.js";
import { getAllApplications } from "../../API.js";
import AnimalList from "./PostOrgUser Container/AnimalAdmin/AnimalList.js";
import "./AdminContainers.css";
import "./AdminLandPage.css";



const AdminLandPage = () => {

  const [organisations, setOrganisations] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [applications, setApplications] = useState([])
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    getOrganisations(setOrganisations);
    getAllApplications(setApplications);
    getCustomers(setCustomers);
    getAllAnimals(setAnimals);
  }, []);


  return (
    <>
        <main id="AdminLandPage">

          <h2 className="AdminWelcome">Welcome, Admin User <FontAwesomeIcon icon={faPaw} /></h2>

          <section className="alp__containers--positioning">

            <ApplicationList className="al1__container--p" applications={applications} setApplications={setApplications}/>

            <AnimalList className="al2__container--p" animals={animals}/>
          
            <UserAdminCont className="uac__container--p" customers={customers}/>

            <OrgAdminCont className="oac__container--p" organisations={organisations} />

          </section>

        </main>
    </>
  )
}

export default AdminLandPage