import OrgAdminCont from "./PostOrgUser Container/OrgAdmin/OrgList.js";
import UserAdminCont from "./PostOrgUser Container/CustomerAdmin/CustomerList.js";
import "./AdminLandPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getCustomers, getOrganisations, getAllAnimals } from "../../API.js";
import ApplicationList from "./PostOrgUser Container/ApplicationAdmin/ApplicationList.js";
import { getAllApplications } from "../../API.js";
import AnimalList from "./PostOrgUser Container/PostAdmin/AnimalList.js";



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

          <div className="Split-Admin-AppPost">
            <ApplicationList applications={applications} setApplications={setApplications}/>
            <AnimalList animals={animals}/>
          </div>

          <div className="Split-Admin-UserOrg">
            <UserAdminCont customers={customers}/>
            <OrgAdminCont organisations={organisations} />
          </div>
 
        </main>
    </>
  )
}

export default AdminLandPage