import { useEffect, useState } from "react";
import AnimalList from "../AdminLandingPage/PostOrgUser Container/AnimalAdmin/AnimalList";
import "./UserLandPage.css";
import { getAllAnimals, getAllApplications } from "../../API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const UserLandPage = () => {

    const [animals, setAnimals] = useState([]);
    const [applications, setApplications] = useState([]);

    useEffect( () => {
        getAllAnimals(setAnimals);
        getAllApplications(setApplications)
    }, [])

  return (
    <>
        <section className="ulp__header">
                    <h2>Welcome to your UI, Customer!</h2>
        </section>
        
        <main id="ulp__mainContainer">

            <section className="ulp__mainContent">
                <section className="ulp__leftSideBar">
                    <h3>Your Applications</h3>
                    <ul>
                        {
                            applications.map( (app, index) => {
                                return <li key={index}>{app.id} {app.customer.firstName} {app.customer.lastName}
                                                    {app.customer.application.map((application, index) => {
                                                        return <li>{application.animal.name}, {application.animal.location}</li>
                                                    })}</li>
                            })
                        }
                    </ul>
                </section>

                <section className="ulp__center">
                    <h2>Available Animals!</h2>
                    <ul>
                    {
                        animals.map( (animal, index) => {
                            return <li key={index}>{animal.name}, {animal.location}, {animal.breed}, {animal.sex}, {animal.dateOfBirth}, {animal.organisation.name}
                                        {animal.name}, {animal.location}, {animal.breed}, {animal.sex}, {animal.dateOfBirth}, {animal.organisation.name}
                                        {animal.name}, {animal.location}, {animal.breed}, {animal.sex}, {animal.dateOfBirth}, {animal.organisation.name}</li>
                        })
                    }
                    </ul>
                </section>

                <section className="ulp__rightSideBar">
                    <section className="ulp__form">
                        <button><FontAwesomeIcon icon={faArrowDown} /></button>
                        <h3>Animal Wishlist</h3>
                        <ul>
                            <li>A1</li>
                            <li>A1</li>
                            <li>A1</li>
                            <li>A1</li>
                            <li>A1</li>
                        </ul>
                    </section>

                    <section className="ulp__form">
                        <button><FontAwesomeIcon icon={faArrowDown} /></button>
                        <h3>Apply to Adopt!</h3>
                        <form>
                            <input type="text"></input>
                            <input type="text"></input>
                            <input type="text"></input>
                            <button type="button">Press me!</button>
                        </form>
                    </section>

                    <section className="ulp__form">
                        <button><FontAwesomeIcon icon={faArrowDown} /></button>
                        <h2>Change your details</h2>
                        <form>
                            <input type="text"></input>
                            <input type="text"></input>
                            <input type="text"></input>
                            <button type="button">Press me!</button>
                        </form>
                    </section>
                </section>
            </section>
        </main>
    </>
  )
}

export default UserLandPage