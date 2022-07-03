import { useEffect, useState } from "react";
import AnimalList from "../AdminLandingPage/PostOrgUser Container/AnimalAdmin/AnimalList";
import "./UserLandPage.css";
import { getAllAnimals, getAllApplications } from "../../API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faPaw, faStar } from "@fortawesome/free-solid-svg-icons";

const UserLandPage = () => {

    const [animals, setAnimals] = useState([]);
    const [applications, setApplications] = useState([]);

    useEffect( () => {
        getAllAnimals(setAnimals);
        getAllApplications(setApplications)
    }, []);

    const toggleWishlistStar = () => {
        const star = document.querySelector(".ulp__starCont");

        if (star.style.color === "yellow") {
            star.style.color = "white";
        } else {
            star.style.color = "yellow";
        }
        
    }

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
                                                        return <li key={index}>{application.animal.name}, {application.animal.location}, {application.animal.id}</li>
                                                    })}</li>
                            })
                        }
                    </ul>
                </section>

                <section className="ulp__center">
                    <h2>Available Animals <FontAwesomeIcon icon={faPaw} /></h2>
                    <ul className="ulp__animalList">
                    {
                        animals.map( (animal, index) => {
                            return  <li key={index} className="ulp__animalCont">
                                            <section className="ulp__animalCont__text">
                                                <h3>{animal.name}    <span onClick={toggleWishlistStar}><FontAwesomeIcon icon={faStar}  className="ulp__starCont"/></span></h3>
                                                <span>Location: {animal.location}</span>
                                                <span>Date of birth: {animal.dateOfBirth}</span>
                                                <span>Specie & Breed: {animal.species}, {animal.breed}</span>
                                                <span>Adoption status: {animal.availableStatus}</span>
                                            </section>

                                            <section className="ulp__animalCont__img">
                                                <img src="https://placedog.net/250/250" alt="dog" />
                                            </section>
                                    </li>
                        })
                    }
                    </ul>
                </section>

                <section className="ulp__rightSideBar">
                    <section className="ulp__form">
                        <div className="ulp__form__header">
                            <h3>Animal Wishlist</h3>
                            <button><FontAwesomeIcon icon={faArrowUp} /></button>
                        </div>
                        
                        <ul>
                            <li>A1</li>
                            <li>A1</li>
                            <li>A1</li>
                            <li>A1</li>
                            <li>A1</li>
                        </ul>
                    </section>

                    <section className="ulp__form">
                        <div className="ulp__form__header">
                            <h3>Apply to Adopt</h3>
                            <button><FontAwesomeIcon icon={faArrowUp} /></button>
                        </div>
                        <form>
                            <input type="text"></input>
                            <input type="text"></input>
                            <input type="text"></input>
                            <button type="button">Press me!</button>
                        </form>
                    </section>

                    <section className="ulp__form">
                        <div className="ulp__form__header">
                            <h3>Change your details</h3>
                            <button><FontAwesomeIcon icon={faArrowUp} /></button>
                        </div>
                        
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