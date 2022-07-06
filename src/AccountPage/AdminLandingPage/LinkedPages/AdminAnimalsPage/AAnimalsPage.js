import "./AAnimalsPage.css";
import { getAllAnimals, getOrganisations, addAnimal, updateAnimal, deleteAnimal } from "../../../../API";
import { useEffect, useState } from "react";
import AdminHeader from "../../AdminHeader/AdminHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";



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

        resetForms()
    }


    // Search Bar

    const getFilteredAnimalsByName = () => animals.filter( (animal) => animal.name != null).filter( animal => animal.name.toLowerCase().includes(animalNameSearch.toLowerCase()));

    const getFilteredAnimalsByLocation = () => getFilteredAnimalsByName().filter( (animal) => animal.location != null).filter( animal => animal.location.toLowerCase().includes(animalLocationSearch.toLowerCase()));

    const getFilteredAnimalsByStatus = () => getFilteredAnimalsByLocation().filter( (animal) => animal.availableStatus != null).filter( animal => animal.availableStatus.toLowerCase().includes(animalAvailableStatus.toLowerCase()));

    // const getFilteredAnimalsByOrg = () => getFilteredAnimalsByStatus().filter( (animal) => animal.organisation != null).filter( animal => animal.organisation.name.toLowerCase().includes(animalOrganisationSearch.toLowerCase()));

    // Reset Forms

    const resetForms = () => {

        document.getElementById("aap__searchName").value = '';
        document.getElementById("aap__searchL").value = '';
        document.getElementById("aap__searchAA").value = '';
        document.getElementById("aap__searchO").value = '';
        setAnimalNameSearch('');
        setAnimalLocationSearch('');
        setAnimalAvailableStatus('');

        document.getElementById("aap_aaName").value = '';
        document.getElementById("aap_aaLoc").value = '';
        document.getElementById("aap_aaSex").value = '';
        document.getElementById("aap_aaSpec").value = '';
        document.getElementById("aap_aaOrg").value = 'default';
        setAaAnimalName('');
        setAaLocation('');
        setAaSex('');
        setAaSpecies('');
        
        document.getElementById("aap_ulL").value = '';
        document.getElementById("aap_ulId").value = 'default';
        document.getElementById("aap_dr").value = '';
        document.getElementById("aap_raD").value = 'default';
        setRaID(-1);
        setUlID(-1);
    }

    // Menu Toggle

    const handleMenuToggle = (event) => {
        event.preventDefault()

        const element = document.getElementById("aap__aaForm");
        const arrow = document.getElementById("menuToggleAA")


        if (element.style.display === "none") {
            element.style.display = "flex";
            arrow.style.transform = "rotate(0deg)";
        } else {
            element.style.display = "none";
            arrow.style.transform = "rotate(180deg)";
        }
    }


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
                    <input type="text" id="aap__searchL" placeholder="Location" onChange={(e) => setAnimalLocationSearch(e.target.value)}></input>
                    <input type="text" id="aap__searchAA" placeholder="Adoption Status" onChange={(e) => setAnimalAvailableStatus(e.target.value)}></input>
                    <input type="text" id="aap__searchO" placeholder="Organisation" onChange={(e) => (e.target.value)}></input>

                    <button type="button" onClick={resetForms}>Reset</button>
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
                        <span onClick={handleMenuToggle}><FontAwesomeIcon id="menuToggleAA" className="FAI" icon={faArrowDown} /></span>
                    </div>
                    <form id="aap__aaForm">
                        
                        <input type="text" id="aap_aaName" placeholder="Name" required onChange={(e) => setAaAnimalName(e.target.value)}></input>
                        <input type="text" id="aap_aaSpec" placeholder="Species" required onChange={(e) => setAaSpecies(e.target.value)}></input>
                        <input type="text" id="aap_aaSex" placeholder="Sex (Male or Female)" required onChange={(e) => setAaSex(e.target.value)}></input>
                        <input type="text" id="aap_aaLoc" placeholder="Location" required onChange={(e) => setAaLocation(e.target.value)}></input>
                        <button type="button" onClick={handleAddAnimal}>Add Animal</button>
                    </form>
                </section>

                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Update Location</h3>
                    </div>
                    <form>
                        <select defaultValue="default" id="aap_ulId" onChange={(e) => setUlID(e.target.value) }>
                        <option value="default" disabled hidden>Animal Reference No.</option>
                            {
                                animals.map( (app, index) => {
                                    return <option key={index}>{app.id}</option>
                                })
                            }
                        </select>
                        
                        <input placeholder="Location" id="aap_ulL" onChange={(e) => setUlLocation(parseInt(e.target.value))}></input>
                        <button type="button" onClick={handleLocationUpdate}>Update Location</button>
                    </form>
                </section>

                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Remove Animal</h3>
                    </div>
                    <form>
                         <select defaultValue="default" id="aap_raD" onChange={(e) => setRaID(e.target.value)}>
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