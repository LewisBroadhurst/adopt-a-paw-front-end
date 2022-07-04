import { useEffect, useState } from "react";
import "./UserLandPage.css";
import { getAllAnimals, getAllApplications, findCustomerByID } from "../../API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faPaw, faStar, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import HappyDog from "../happyDog.jpeg"
import Cat from "../catPortrait.jpeg"
import Ferret from "../ferret.jpeg"
import Rabbit from "../rabbit.jpeg"
import GunieaPig from "../GuineaPig.jpeg"
import PawPrint from "../pawPrint.jpeg"
import BorderLeavesTop from "../borderLeavesTop.jpeg"
import GrassBorderBottom from "../grassBorderBottom.jpeg"
import Computer from "../computer.jpeg"
import RSPCA from "../RSPCA.jpeg"
import Email from "../email.jpeg"

const UserLandPage = () => {

    const [animals, setAnimals] = useState([]);
    const [applications, setApplications] = useState([]);
    const [customer, setCustomer] = useState({adoptedAnimals : [{}]});

    useEffect( () => {
        getAllAnimals(setAnimals);
        getAllApplications(setApplications)
        findCustomerByID(setCustomer, 1);
    }, []);

    const toggleWishlistStar = () => {
        const star = document.querySelector(".ulp__starCont");

        if (star.style.color === "yellow") {
            star.style.color = "white";
        } else {
            star.style.color = "yellow";
        }
        
    }

    
    const speciesChecker = (species) => {

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

        customer.adoptedAnimals.map( (animal) => {

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
    
    
    
    

  return (
    <>

    
        <main className= 'backgroundPage'>

        

        
        <section className= "ulp__pageContainer">
        
        
        
        <section className="ulp__header" >
        
            <section className="ulp__header__picture">       
            </section>
            <section className="ulp__header__catTable">
            </section>
        </section>

        <h1 className="ulp__header__welcome">Welcome Lewis!</h1>
        <button type = "button" onClick={console.log("hi")}><FontAwesomeIcon icon={faArrowDown} /></button>
        

            
        
             

        
        

            <section className="ulp__mainContent">

                
                {/* <section className="ulp__leftSideBar">
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
                </section> */}

                {/* <section className="ulp__center">
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
                </section> */}

                <section className="ulp__cardContainer">

                <section className= "ulp__userAnimalsCard" >

                <h1>Your adopted animals</h1>
                

                    <section className="ulp__userAnimalsCard__rectangle">

                        
                        
                        

                    

                        


                        <section className="ulp__adoptedAnimalsContainer">

                            
                        
                            <ul className="ulp__adoptedAnimalsList">

                                {
                                    customer.adoptedAnimals.map( (animal, index) => {

                                        return <>
                                    
                                        <li key={index} className="ulp__adoptedAnimal">


                                            
                                            <span className="ulp__adoptedAnimalsList__adoptedAnimal_name">Name: {animal["name"]}</span>
                                            <span className="ulp__adoptedAnimalsList__adoptedAnimal_DOB">Date of birth: {animal["dateOfBirth"]}</span>
                                            <span className="ulp__adoptedAnimalsList__adoptedAnimal_species_breed"> {animal.breed}</span>
                                        
                                            
                                            {speciesChecker(animal["species"])}
                                            
                                        </li>
                                        
                                            
                                            


                                        </>

                                 })

                                }

                            </ul>

                            
                            
                        </section>
                    
                        

                    </section>
                </section>

                <section className= "ulp__container2" >
                    <section classname = "ulp__ulpContainer2__rectangle">

                    <img src={PawPrint} className = "pawPrintLeft"/>
                    <img src={PawPrint} className = "pawPrintRight"/>
                    </section>

                    

                    


                </section>

                <section className= "ulp__container2__left" >
                <section classname = "ulp__ulpContainer2__rectangle">

                    <img src={Email} className="email0"/>
                    <img src={Email} className="email"/>
                    <img src={Email} className="email2"/>
                    

                    
                </section>
                    


                </section>

                <section className= "ulp__userApplicationsCard" >

                <h1>Your applications</h1>
                

                    <section className="ulp__userAnimalsCard__rectangle">

                        
                        
                        

                    

                        


                        <section className="ulp__userApplicationsContainer">

                            
                        
                            <ul className="ulp__userApplicationsList">

                                {
                                    customer.application.map((application, index) => {

                                        return <>
                                        
                                            <li key={index} className="ulp__applications">
                                                
                                            
                                            {speciesChecker(application["animal"]["species"])}
                                            <span className="ulp__adoptedAnimalsList__application_status">Application Status:</span>
                                            <span className={`ulp__adoptedAnimalsList__application_statusReturn__${applicationStatusSetter(application["applicationStatus"])}`}>{application["applicationStatus"]}</span>

                                            

                                                <span className="ulp__applications__animalDetail_name">Animal Name: {application["animal"]["name"]}</span>
                            
                                                

                                           
                                            
                                                
                                                
                                                
                                                </li>
                                        
                                        
                                        
                                        
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
                                    customer.customerPreferredSpecies.map( (species, index) => {

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

                    


                </section>
                

                




                </section>

                
                

                <section className="ulp__rightSideBar">
                    {/* <section className="ulp__form">
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
                    </section> */}

                    {/* <section className="ulp__form">
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
                    </section> */}

                    {/* <section className="ulp__form">
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
                    </section> */}
                </section>
            </section>
        
        </section>
        </main>
    </>
  )
}

export default UserLandPage