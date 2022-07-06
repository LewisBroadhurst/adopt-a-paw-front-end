import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getCustomers, getOrganisations, getAllAnimals } from "../../API.js";
import ApplicationList from "./Containers/ApplicationAdmin/ApplicationList.js";
import { getAllApplications } from "../../API.js";
import AnimalList from "./Containers/AnimalAdmin/AnimalList.js";
import "./AdminContainers.css";
import "./AdminLandPage.css";
import CustomerList from "./Containers/CustomerAdmin/CustomerList.js";
import OrgList from "./Containers/OrgAdmin/OrgList.js";
import AdminHeader from "./AdminHeader/AdminHeader.js";



const AdminLandPage = () => {

  const [organisations, setOrganisations] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [animals, setAnimals] = useState([]);

  

  useEffect( () => {

    const forceSync = async () => {
      await getOrganisations(setOrganisations);
      await getCustomers(setCustomers);
      await getAllAnimals(setAnimals)
    }

    forceSync()
    
  }, []);

  


  return (
    <>
    <AdminHeader />
        <main id="AdminLandPage">
          
          <h2 className="AdminWelcome">Welcome, Admin User <FontAwesomeIcon icon={faPaw} /></h2>

          <section className="alp__containers--positioning">

            <ApplicationList className="al1__container--p"/>

            <AnimalList className="al2__container--p" animals={animals} setAnimals={setAnimals}/>
          
            <CustomerList className="uac__container--p" customers={customers} setCustomers={setCustomers}/>

            <OrgList className="oac__container--p" organisations={organisations} setOrganisations={setOrganisations} />

          </section>

        </main>
    </>
  )
}

export default AdminLandPage