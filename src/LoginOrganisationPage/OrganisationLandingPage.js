import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrgHeader from "./components/OrgHeader/OrgHeader";
import Footer from "../Footer/Footer";
import "./OrganisationLandingPage.css";
import { getAllAnimals } from "../API";
import { useEffect, useState } from "react";
import OrgAnimalContainer from "./components/OrgAnimalContainer/OrgAnimalContainer";
import OrgApplicationContainer from "./components/OrgApplicationContainer/OrgApplicationContainer";


const OrganisationLandingPage = () => {

    const [animals, setAnimals] = useState([]);

    useEffect( () => {
        getAllAnimals(setAnimals)
    }, [])

  return (
    <>
        <OrgHeader />

        <div className="olpMain__header">
            <h1>Welcome to Adopt A Paw, RSPCA <FontAwesomeIcon icon={faPaw} /></h1>
        </div>

        <section className="olp__background">

        <main className="mainOLP__container">

            <section className="olp__appAni--container">

                <OrgAnimalContainer animals={animals} />

                <OrgApplicationContainer animals={animals} />

            </section>

            <section className="olp__updateDetails--container">
                <h2>Update Details</h2>
                <section className="olp__form--container">
                    <h3>Update Name</h3>
                    <form>
                        <input type="text" placeholder="Org. Name"></input>
                        <button type="button">Confirm</button>
                    </form>
                </section>

                <section className="olp__form--container">
                    <h3>Update Slogan</h3>
                    <form>
                        <input type="text" placeholder="Org. Slogan"></input>
                        <button type="button">Confirm</button>
                    </form>
                </section>

                <section className="olp__form--container">
                    <h3>Update Address</h3>
                    <form>
                        <input type="text" placeholder="Org. Address"></input>
                        <button type="button">Confirm</button>
                    </form>
                </section>

                <section className="olp__form--container">
                    <h3>Update Logo</h3>
                    <form>
                        <input type="text" placeholder="Logo URL"></input>
                        <button type="button">Confirm</button>
                    </form>
                </section>
            </section>

        </main>
        </section>

        <Footer />
    </>
  )
}

export default OrganisationLandingPage