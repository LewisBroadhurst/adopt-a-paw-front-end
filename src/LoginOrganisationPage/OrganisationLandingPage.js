import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrgHeader from "./OrgHeader/OrgHeader";
import Footer from "../Footer/Footer";
import "./OrganisationLandingPage.css";
import { getAllAnimals } from "../API";
import { useEffect, useState } from "react";
import AnimalContainer from "../AccountPage/AdminLandingPage/Containers/AnimalAdmin/AnimalContainer/AnimalContainer";


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

                <section className="olp__sectionContainer">
                    <div className="olp__headerElementCont">
                        <h3>Animals</h3>
                        <span>All Animals</span>
                    </div>
                    
                    <div className="olp__cardContainers">
                    {
                        animals.slice(0, 3).map((animal, index) => {
                        return <AnimalContainer key={index}
                                                id={animal.id}
                                                organisationId={animal.organisation_id}
                                                name={animal.name}
                                                age={animal.age}
                                                reserved={animal.reserved}
                                                adopted={animal.adopted}
                                                breed={animal.breed}
                                                location={animal.location}
                                                animals={animals}
                                                setAnimals={setAnimals}/>
                        })
                    }
                    </div>
                </section>

                <section className="olp__sectionContainer">
                    <div className="olp__headerElementCont">
                        <h3>Applications</h3>
                        <span>All Applications</span>
                    </div>
                    
                    <div className="olp__cardContainers">
                    {
                        animals.slice(0, 3).map((animal, index) => {
                        return <AnimalContainer key={index}
                                                id={animal.id}
                                                organisationId={animal.organisation_id}
                                                name={animal.name}
                                                age={animal.age}
                                                reserved={animal.reserved}
                                                adopted={animal.adopted}
                                                breed={animal.breed}
                                                location={animal.location}
                                                animals={animals}
                                                setAnimals={setAnimals}/>
                        })
                    }
                    </div>
                </section>


            </section>

            <section className="olp__updateDetails--container">
                <section className="olp__form--container">
                    <h3>Update Name</h3>
                    <form>
                        <input type="text"></input>
                        <button type="button">Bacon</button>
                    </form>
                </section>

                <section className="olp__form--container">
                    <h3>Update Slogan</h3>
                    <form>
                        <input type="text"></input>
                        <button type="button">Bacon</button>
                    </form>
                </section>

                <section className="olp__form--container">
                    <h3>Update Address</h3>
                    <form>
                        <input type="text"></input>
                        <button type="button">Bacon</button>
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