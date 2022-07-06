import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrgHeader from "./components/OrgHeader/OrgHeader";
import Footer from "../Footer/Footer";
import "./OrganisationLandingPage.css";
import { getAllAnimals, getAllApplications, getOrganisationById } from "../API";
import { useEffect, useState } from "react";
import OrgAnimalContainer from "./components/OrgAnimalContainer/OrgAnimalContainer";
import OrgApplicationContainer from "./components/OrgApplicationContainer/OrgApplicationContainer";
import OrgUpdateForms from "./components/OrgUpdateForms/OrgUpdateForms";


const OrganisationLandingPage = () => {

    const [animals, setAnimals] = useState([]);
    const [applications, setApplications] = useState([])
    const [organisation, setOrganisation] = useState({});

    useEffect( () => {
        getAllAnimals(setAnimals);
        getAllApplications(setApplications);
        getOrg()
    }, [])

    const getOrg = async () => {

        const org = await getOrganisationById(1);

        setOrganisation(org);

        console.log(org);
    }

  return (
    <>
        <OrgHeader />

        <div className="olpMain__header">
            <div className="olp__welcomeSlogan">
                <h1>Welcome to Adopt A Paw, {organisation.name} <FontAwesomeIcon icon={faPaw} /></h1>
                <span>{organisation.slogan}</span>
            </div>
            
            <img src={organisation.logo_url} alt=""/>
        </div>

        <section className="olp__background">

        <main className="mainOLP__container">

            <section className="olp__appAni--container">

                <OrgAnimalContainer animals={animals} />

                <OrgApplicationContainer applications={applications} />

            </section>

            <section className="olp__updateDetails--container">
                <OrgUpdateForms getOrg={getOrg}/>
            </section>

        </main>
        </section>

        <Footer />
    </>
  )
}

export default OrganisationLandingPage