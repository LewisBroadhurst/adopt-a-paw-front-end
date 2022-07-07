import { useEffect, useState } from "react";
import "./UserLandPage.css";
import { getAllAnimals, getAllApplications, findCustomerByID, addNewApplication } from "../../API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faPaw, faStar, faArrowDown, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import HappyDog from "../happyDog.jpeg"
import Cat from "../catPortrait.jpeg"
import Ferret from "../ferret.jpeg"
import Rabbit from "../rabbit.jpeg"
import GunieaPig from "../GuineaPig.jpeg"
import PawPrint from "../pawPrint.jpeg"
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { useParams } from "react-router-dom";

const UserLandPage = () => {

    const [animals, setAnimals] = useState([]);
    const [applications, setApplications] = useState([]);
    const [customer, setCustomer] = useState([]);
    
    const [userInput, setUserInput] = useState("null");
    const [userInputApp, setUserInputApp] = useState("null");
    
    const [animalInputType, setAnimalInputType] = useState("");
    const [applicationInputType, setApplicationInputType] = useState("");
    
    const[openAnimalSearchForm,setOpenAnimalSearchForm] = useState(false);
    const [animalSearchButtonDisplay, setAnimalSearchButtonDisplay] = useState("visible");
    
    const [openApplicationSearchForm, setOpenApplicationForm] = useState(false);
    const [applicationSearchButtonDisplay, setApplicationSearchButtonDisplay] = useState("visible");

    const params = useParams();

    useEffect( () => {
        getAllAnimals(setAnimals);
        getAllApplications(setApplications);
        findCustomerByID(setCustomer, sessionStorage.getItem('customer_id'));
    }, []);


    // Add New Application

    const [animal_id, setAnimal_id] = useState(0);
    const [customer_id, setCustomer_id] = useState(1);


    const handleAddNewApplication = async () => {
        
        await addNewApplication(animal_id, customer.id)

        await getAllApplications(setApplications)

        resetForms()
    }

    // Reset Forms

    const resetForms = () => {

        // document.getElementById("animalId").value = '';
        // document.getElementById("customerId").value = '';
        // setAnimal_id('');
        // setCustomer_id('');
    }
        
    const speciesChecker =  (species) => {

        if(species === 'Dog'){
            return <img className="ulp__adoptedAnimalsList__adoptedAnimalPic" src={HappyDog}/>;
        }
        if(species === 'Cat'){
            return <img className="ulp__adoptedAnimalsList__adoptedAnimalPic" src={Cat}/>;
        }
        if(species === 'Ferret'){
            return <img className="ulp__adoptedAnimalsList__adoptedAnimalPic" src={Ferret}/>;
        }
        if(species === 'Rabbit'){
            return <img className="ulp__adoptedAnimalsList__adoptedAnimalPic" src={Rabbit}/>;
        }
        if(species === 'Guineapig'){
            return <img className="ulp__adoptedAnimalsList__adoptedAnimalPic" src={GunieaPig}/>;
        }
    }

    const applicationStatusSetter = (applicationStatus) => {
        if(applicationStatus === "Approved"){
            return("approved");
        }
        if(applicationStatus === "Rejected"){
            return("rejected");
        }
        if(applicationStatus === "Pending"){
            return("pending");
        }
    }

    const favouriteOrganisationsFinder = () => {
        const organisationArray = [];
        const counts = {};
        const favouriteOrganisationsArray = [];
        customer.adoptedAnimals?.map( (animal) => {
            organisationArray.push(animal["organisation"]["name"]);
     })
        organisationArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1;});
        for( const key in counts){
            if(counts[key]>=2){
                favouriteOrganisationsArray.push(key);
            }
        }
        return favouriteOrganisationsArray;
    }

    const clearHandler = (e) => {
        e.preventDefault();
        alert("clicked");
    }

    const turnSearchFormOnAnimal = (e) => {
        e.preventDefault();
        setOpenAnimalSearchForm(true);
        setAnimalSearchButtonDisplay("hidden");
    }

    const turnSearchFormOffAnimal = (e) => {
        e.preventDefault();
        setOpenAnimalSearchForm(false);
        setAnimalSearchButtonDisplay("visible");
    }

    const turnSearchFormOnApplication = (e) => {
        e.preventDefault();
        setOpenApplicationForm(true);
        setApplicationSearchButtonDisplay("hidden");
    }

    const turnSearchFormOffApplication = (e) => {
        e.preventDefault();
        setOpenApplicationForm(false);
        setApplicationSearchButtonDisplay("visible");
    }

    const returnAdoptedAnimals = (userInput) => {

        if(userInput === "null"){
            return(
            customer.adoptedAnimals?.map( (animal, index) => {

                return <>
                <li key={index} className="ulp__adoptedAnimal">
    
                    <span className="ulp__adoptedAnimalsList__adoptedAnimal_name">Name: {animal["name"]}</span>
                    <span className="ulp__adoptedAnimalsList__adoptedAnimal_DOB">Date of birth: {animal["dateOfBirth"]}</span>
                    <span className="ulp__adoptedAnimalsList__adoptedAnimal_species_breed"> {animal.breed}</span>
                
                    {speciesChecker(animal["species"])}
            
                </li>
                
                </>
         }))

        }else if(userInput != "null" && animalInputType === "name"){

            return(

                customer.adoptedAnimals?.filter(animal => animal["name"].toLowerCase().match(userInput.toLowerCase())).map( (animal, index) => {

                        return <>
                
                        <li key={index} className="ulp__adoptedAnimal">
        
                            <span className="ulp__adoptedAnimalsList__adoptedAnimal_name">Name: {animal["name"]}</span>
                            <span className="ulp__adoptedAnimalsList__adoptedAnimal_DOB">Date of birth: {animal["dateOfBirth"]}</span>
                            <span className="ulp__adoptedAnimalsList__adoptedAnimal_species_breed"> {animal.breed}</span>
                    
                            {speciesChecker(animal["species"])}
                        
                        </li>
        
                    </>

             }))



        }else if(userInput != "null" && animalInputType === "DOB"){

            return(

                customer.adoptedAnimals?.filter(animal => animal["dateOfBirth"].toLowerCase().match(userInput.toLowerCase())).map( (animal, index) => {
                        return <>
                
                        <li key={index} className="ulp__adoptedAnimal">
        
        
                        
                            <span className="ulp__adoptedAnimalsList__adoptedAnimal_name">Name: {animal["name"]}</span>
                            <span className="ulp__adoptedAnimalsList__adoptedAnimal_DOB">Date of birth: {animal["dateOfBirth"]}</span>
                            <span className="ulp__adoptedAnimalsList__adoptedAnimal_species_breed"> {animal.breed}</span>
                    
                        
                            {speciesChecker(animal["species"])}
                        
                        </li>
                    </>
             }))

        }else if(userInput != "null" && animalInputType === "breed"){

            return(


                customer.adoptedAnimals?.filter(animal => animal["breed"].toLowerCase().match(userInput.toLowerCase())).map( (animal, index) => {

                    

                        return <>
                
                        <li key={index} className="ulp__adoptedAnimal">
        
        
                        
                            <span className="ulp__adoptedAnimalsList__adoptedAnimal_name">Name: {animal["name"]}</span>
                            <span className="ulp__adoptedAnimalsList__adoptedAnimal_DOB">Date of birth: {animal["dateOfBirth"]}</span>
                            <span className="ulp__adoptedAnimalsList__adoptedAnimal_species_breed"> {animal.breed}</span>
                    
                        
                            {speciesChecker(animal["species"])}
                        
                        </li>
                    </>
             }))
        }

    }

    const displaySearchFormAnimal = () => {

        if(openAnimalSearchForm === true){

            return(
                <>
                <form className = "animalSearchForm">

                    <label className="ulp__adoptedAnimalnameLabel">Name:</label> <input type="text" onChange={(e)=>{setUserInput(e.target.value); setAnimalInputType("name")}} className="ulp__adoptedAnimalnameInput"
                        placeholder="search by name"></input> 
                    <label className="ulp__adoptedAnimalDOBLabel">DOB:</label> <input type="text" onChange={(e)=>{setUserInput(e.target.value); setAnimalInputType("DOB") }} className="ulp__adoptedAnimalDOBInput"
                        placeholder="search by DOB"></input> 
                    <label className="ulp__adoptedAnimalBreedLabel">Breed:</label> <input type="text" onChange={(e)=>{setUserInput(e.target.value); setAnimalInputType("breed") }} className="ulp__adoptedAnimalBreedInput"
                        placeholder="search by breed"></input> 
                        <button className= "searchAnimalForm__arrowUpButton__left" onClick={turnSearchFormOffAnimal}><FontAwesomeIcon icon = {faArrowUp} /></button>
                        <button className= "searchAnimalForm__arrowUpButton__right" onClick={turnSearchFormOffAnimal}><FontAwesomeIcon icon = {faArrowUp} /></button>

                    </form>
                </>
                
            )

        }

    }


    const displaySearchFormApplications = () => {

        if(openApplicationSearchForm === true){

            return(
                <>
                <form className = "applicationSearchForm">

                    <label className="ulp__applicationStatusLabel">Status:</label> <input type="text" onChange={(e)=>{setUserInputApp(e.target.value); setApplicationInputType("status")}} className="ulp__applicationStatusInput"
                        placeholder="search by app status"></input> 
                    <label className="ulp__application_animalName_Label">Name:</label> <input type="text" onChange={(e)=>{setUserInputApp(e.target.value); setApplicationInputType("name") }} className="ulp__application_aniomalName_input"
                        placeholder="search by animal name"></input> 
                    
                        <button className= "searchApplicationForm__arrowUpButton__left" onClick={turnSearchFormOffApplication}><FontAwesomeIcon icon = {faArrowUp} /></button>
                        <button className= "searchApplicationForm__arrowUpButton__right" onClick={turnSearchFormOffApplication}><FontAwesomeIcon icon = {faArrowUp} /></button>

                    </form>
                </>
                
            )
        }

    }


    const filtAppByID = applications?.filter( (app, index) => app.customer.id === 1)

  return (
    <>
        <Header />

        <main className= 'backgroundPage'>
        <section className= "ulp__pageContainer">
        <section className="ulp__header" >
            <h2 className="UserWelcome">Welcome, {`${customer.firstName}`} <FontAwesomeIcon icon={faPaw} />
            </h2>
        </section>

        <section>
            <h2 className="user-id-tag">User id: {customer.id}</h2>
        </section>

        
        <section className="aap__forms">

            <section className="aap__form">
                <div id="aap__header__addA" className="ulp__form__header">
                    <h3>Add New Application</h3>
                </div>

                <form id="aap__aaForm" className="aap__aaForm">
                        
                    <input type="number" id="AnimalId" placeholder="Animal Ref Number" required onChange={(e) => setAnimal_id(e.target.value)}></input>

                    {/* <input value={`${customer.id}`} id="CustomerId" placeholder="Customer Id" required onChange={(e) => setCustomer_id(e.target.value)}></input> */}

                    <button type="button" className="submit_application_button" onClick={handleAddNewApplication}>Submit</button>
                </form>
            </section>
        </section>
        <br></br>
        <br></br>
            <section className="ulp__mainContent">
                <section className="ulp__cardContainer">

                <section className= "ulp__userAnimalsCard" >

                <h1>Your adopted animals</h1>
                

                    <section className="ulp__userAnimalsCard__rectangle">

                    <button className="openAnimalSearchForm__button" onClick={turnSearchFormOnAnimal} style={{visibility:animalSearchButtonDisplay}}><FontAwesomeIcon icon = {faArrowDown} /><FontAwesomeIcon icon = {faArrowDown} /><FontAwesomeIcon icon = {faArrowDown} /><FontAwesomeIcon icon = {faArrowDown} /></button>
                    {displaySearchFormAnimal()}
                        <section className="ulp__adoptedAnimalsContainer">
                            <ul className="ulp__adoptedAnimalsList">
                                {
                                    returnAdoptedAnimals(userInput)
                                }
                            </ul>      
                        </section>
                    
                        

                    </section>
                </section>

                <section className= "ulp__container2" >

                    <video autoPlay muted loop poster='https://woodgreen.org.uk/wp-content/uploads/2022/05/tokyo-summer-banner-img.jpg' src="https://vod-progressive.akamaized.net/exp=1657114792~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1854%2F17%2F434273934%2F1891403396.mp4~hmac=ea25fb9a8dc6773a9153db1e7af6d0ab60c98c499d074ee291549154e5dc1891/vimeo-prod-skyfire-std-us/01/1854/17/434273934/1891403396.mp4">
                    </video>

                </section>

                <section className= "ulp__container2__left" >
                <section classname = "ulp__ulpContainer2__rectangle">

                <img src={PawPrint} className = "pawPrintLeft"/>
                <img src={PawPrint} className = "pawPrintRight"/>
                    

                    
                </section>
                    


                </section>

                <section className= "ulp__userApplicationsCard" >

                <h1>Your applications</h1>
                

                    <section className="ulp__userAnimalsCard__rectangle">
                             
                    <button className="openApplicationSearchForm__button" onClick={turnSearchFormOnApplication} style={{visibility:applicationSearchButtonDisplay}}><FontAwesomeIcon icon = {faArrowDown} /><FontAwesomeIcon icon = {faArrowDown} /><FontAwesomeIcon icon = {faArrowDown} /><FontAwesomeIcon icon = {faArrowDown} /></button>

                                {displaySearchFormApplications()}
                        
                        <section className="ulp__userApplicationsContainer">

                            
                        
                            <ul className="ulp__userApplicationsList">

                                {
                                    // returnApplicationsList(userInputApp)

                                    filtAppByID?.map( (app, index) => {
                                        return <>
                                                    <section key={index} className="ulp__applications">
                                                        <img src={app.customer.application[0].animal.photoUrl} className="ulp__imgApplications" alt=""/>
                                                        <span className="ulp__applications__animalDetail_name">{app.customer.application[0].animal.name}</span>
                                                        <span className="ulp__adoptedAnimalsList__application_status">{app.customer.application[0].applicationStatus}</span>
                                                    </section>
                                                </>
                                    })
                                }
                            </ul>   
                        </section>
                    </section>
                </section>

                <section className= "ulp__userAboutCard" >
                        <h1>About you</h1>
                <section className="ulp__userAnimalsCard__rectangle">


                                <h2 className = "ulp__container2__preferredOrganisations__header2">Your preferred animals:</h2>

                                <ul className="ulp__preferredSpeciesList">

                                {
                                    customer.customerPreferredSpecies?.map( (species, index) => {

                                        return <>

                                        
                                        <li key={index} className="ulp__preferrredAnimals">
                                            <span className="ulp__prefferedANimals__Species">{species["species"]}s</span>
        
                                        </li>
                                        </>
                                 })
                                }

                            </ul>
                
                <h3 className = "ulp__container2__preferredOrganisations__header3">Your favourite organisations:</h3>
                            
                            <ul className="ulp__preferredSpeciesList">
                                {
                                    favouriteOrganisationsFinder().map((organisation, index) => {

                                        return <>
                                             
                                        <li key={index} className="ulp__preferrredAnimals">
                                            <span className="ulp__prefferedANimals__Species">{organisation}</span>
                                        </li>
                                        </>
                                    })
                                }
                            </ul>
                </section>
                </section>
                
                <section className= "ulp__container2" >
                    
                    <video autoPlay muted loop poster='https://woodgreen.org.uk/wp-content/uploads/2022/05/tokyo-summer-banner-img.jpg' src="https://vod-progressive.akamaized.net/exp=1657112758~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4661%2F18%2F473308772%2F2109393304.mp4~hmac=472d3c14cd2f9c14930d880a0dff178f94001e922c9b937fc9202461ba1a6412/vimeo-prod-skyfire-std-us/01/4661/18/473308772/2109393304.mp4">
                    </video>

                </section>
                </section>
                <section className="ulp__rightSideBar">
                </section>
            </section>
        
        </section>
        </main>

        <Footer />
    </>
  )
}

export default UserLandPage