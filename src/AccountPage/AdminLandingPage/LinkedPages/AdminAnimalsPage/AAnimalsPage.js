import "./AAnimalsPage.css";
import { getAllAnimals, getOrganisations, addAnimal, updateAnimal, deleteAnimal } from "../../../../API";
import { useEffect, useState } from "react";
import AdminHeader from "../../AdminHeader/AdminHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";



const AAnimalsPage = () => {

    const [animals, setAnimals] = useState([]);
    const [organisations, setOrganisations] = useState([]);

    const [animalNameSearch, setAnimalNameSearch] = useState('');
    const [animalLocationSearch, setAnimalLocationSearch] = useState('');
    const [animalAvailableStatus, setAnimalAvailableStatus] = useState('');
    // const [animalOrganisationSearch, setAnimalOrganisationSearch] = useState('');

    useEffect( () => {
        getAllAnimals(setAnimals)
        getOrganisations(setOrganisations)
    }, []);

    // Delete Animal

    const [raID, setRaID] = useState(-1);

    const handleAnimalDelete = async (event) => {
        event.preventDefault()

        await deleteAnimal(raID)

        await getAllAnimals(setAnimals)
    }

    // Update Animal Location

    const [ulLocation, setUlLocation] = useState('');
    const [ulID, setUlID] = useState(-1);

    const handleLocationUpdate = async (event) => {
        event.preventDefault()

        const animalData = {
            "location": `${ulLocation}`
        }

        await updateAnimal(ulID ,animalData)

        await getAllAnimals(setAnimals)
    }

    // Add Animal

    const [aaAnimalName, setAaAnimalName] = useState('');
    const [aaSpecies, setAaSpecies] = useState('');
    const [aaSex, setAaSex] = useState('');
    const [aaLocation, setAaLocation] = useState('');


    const handleAddAnimal = async () => {
        
        const animalData = {
            "name": `${aaAnimalName}`,
            "sex": `${aaSex}`,
            "location": `${aaLocation}`,
            "species": `${aaSpecies}`,
            // "breed": "Daschund",
            "availableStatus": "Available",
            }
        
        await addAnimal(animalData)

        await getAllAnimals(setAnimals)
    }

    // Menu Toggle

    const handleMenuToggle = (event) => {
        event.preventDefault()

        const element = document.getElementById("aap__aaForm");

        if (element.style.display === "none") {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    }

    // Search Bar

    const handleSearchReset = (event) => {
        event.preventDefault();

        document.getElementById("aap__searchName").innerText = '';
    }

    const getFilteredAnimalsByName = () => animals.filter( (animal) => animal.name != null).filter( animal => animal.name.toLowerCase().includes(animalNameSearch.toLowerCase()));

    const getFilteredAnimalsByLocation = () => getFilteredAnimalsByName().filter( (animal) => animal.location != null).filter( animal => animal.location.toLowerCase().includes(animalLocationSearch.toLowerCase()));

    const getFilteredAnimalsByStatus = () => getFilteredAnimalsByLocation().filter( (animal) => animal.availableStatus != null).filter( animal => animal.availableStatus.toLowerCase().includes(animalAvailableStatus.toLowerCase()));

    // const getFilteredAnimalsByOrg = () => getFilteredAnimalsByStatus().filter( (animal) => animal.organisation != null).filter( animal => animal.organisation.name.toLowerCase().includes(animalOrganisationSearch.toLowerCase()));


  return (
    <>  
        <AdminHeader />
        <section className="aap__headContainer">
            <section className="aap__header">
                <h2>Animals</h2>
            </section>

            <form className="aap__searchBar">
                    <span>Filter by:</span>

                    <input id="aap__searchName" type="text" placeholder="Name" onChange={(e) => setAnimalNameSearch(e.target.value)}></input>
                    <input type="text" placeholder="Location" onChange={(e) => setAnimalLocationSearch(e.target.value)}></input>
                    <input type="text" placeholder="Adoption Status" onChange={(e) => setAnimalAvailableStatus(e.target.value)}></input>
                    <input type="text" placeholder="Organisation" onChange={(e) => (e.target.value)}></input>

                    <button type="button" onClick={handleSearchReset}>Reset</button>
            </form>
        </section>

        <main className="aap__mainContent">

            <section className="aap__applicationList">

                {
                    getFilteredAnimalsByStatus().map( (animal, index) => {
                        return <section key={index} className="aap__appContainer">
                        <section className="aap__customerInfo">
                            <h3>Animal Info.</h3>
                            <span>Reference number: {animal.id}</span>
                            <span>Name: {animal.name}</span>
                            <span>DOB: {animal.dateOfBirth}</span>
                            <span>Location: {animal.location}</span>
                            {/* <span>Organisation: {animal.organisation.name != null ? animal.organisation.name : "Not specified"}</span> */}
                            <span>Adoption status: {animal.availableStatus}</span>
                        </section>
        
                        <section className="aap__animalImg">
                            <img src={animal.photoUrl} alt="" />
                        </section>
                    </section>
                    })
                }

            </section>

            <section className="aap__forms">

                <section className="aap__form">
                    <div id="aap__header__addA" className="ulp__form__header aap__arrow">
                        <h3>Add Animal</h3>
                        <span onClick={handleMenuToggle}><FontAwesomeIcon icon={faArrowUp} /></span>
                    </div>
                    <form id="aap__aaForm">
                        
                        <input type="text" placeholder="Name" required onChange={(e) => setAaAnimalName(e.target.value)}></input>
                        <input type="text" placeholder="Species" required onChange={(e) => setAaSpecies(e.target.value)}></input>
                        <input type="text" placeholder="Sex (Male or Female)" required onChange={(e) => setAaSex(e.target.value)}></input>
                        <input type="text" placeholder="Location" required onChange={(e) => setAaLocation(e.target.value)}></input>

                        <select defaultValue="default" onChange={(e) => (e.target.value) }>
                        <option value="default" disabled hidden>Organisation</option>
                            {
                                organisations.map( (org, index) => {
                                    return <option key={index}>{org.name}, ID: {org.id}</option>
                                })
                            }
                        </select>
                        <button type="button" onClick={handleAddAnimal}>Add Animal</button>
                    </form>
                </section>

                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Update Location</h3>
                    </div>
                    <form>
                        <select defaultValue="default" onChange={(e) => setUlID(e.target.value) }>
                        <option value="default" disabled hidden>Animal Reference No.</option>
                            {
                                animals.map( (app, index) => {
                                    return <option key={index}>{app.id}</option>
                                })
                            }
                        </select>
                        
                        <input placeholder="Location" onChange={(e) => setUlLocation(parseInt(e.target.value))}></input>
                        <button type="button" onClick={handleLocationUpdate}>Update Location</button>
                    </form>
                </section>

                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Remove Animal</h3>
                    </div>
                    <form>
                         <select defaultValue="default" onChange={(e) => setRaID(e.target.value)}>
                            <option value="default" disabled hidden>Animal Reference No.</option>
                            {
                                animals.map( (app, index) => {
                                    return <option key={index}>{app.id}</option>
                                })
                            }
                        </select>
                        <input id="aap_dr" type="text" placeholder="Reason" required></input>
                        <button type="button" onClick={handleAnimalDelete}>Delete Animal</button>
                    </form>
                </section>
            </section>

        </main>

        <div className="aap__footer"></div>
    </>
  )
}

export default AAnimalsPage