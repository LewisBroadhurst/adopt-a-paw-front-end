import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CreateAccPage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"

import gpMobForm from "./images/gpMobForm.jpeg";
import { addNewCustomer, RegisterNewUser } from "../API";
import { useState } from "react";

const CreateAccPage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userRole, setUserRole] = useState('');
    const [showPassword, setShowPassword] = useState("password");
    // const [age, setAge] = useState(0);
    // const [location, setLocation] = useState('');
    // const [prevAdopted, setPrevAdopted] = useState(false);



    const handleCreateNewCustomer = event => {
        event.preventDefault();

        // console.log(age);

        // const custData = {
        //     "id": 0,
        //     "firstName": `${firstName}`,
        //     "lastName": `${lastName}`,
        //     "age": `${age}`,
        //     "location": `${location}`,
        //     "previousAdoptions": false
        // }

        // addNewCustomer(custData);

        alert("Successfully created a new account! You will now be re-directed to the sign in page.")
    }


    const registerUser = event => {

      event.preventDefault();

      const request = {

        "firstName": `${firstName}`,
        "lastName": `${lastName}`,
        "email" : `${email}`,
        "password" : `${password}`,
        "appUserRole" : `${userRole}`


      }
      
      RegisterNewUser(request);


      alert("Successfully created a new account! You will now be re-directed to the sign in page.")




    }

    const handleShowPassWordClick = () => {

        if(showPassword === "password"){

          setShowPassword("text");

        }else if(showPassword === "text"){

          setShowPassword("password")

        }

    }

    const handleSelectRole = (e) => {

      setUserRole(e.target.value);





    }


  return (
    <>
    <div className=".fill-window">
        <Header />

        <section className='create-hero'>

          <div className='create-hero-shape'>
            <div className='create-hero-video'>
              <video autoPlay muted loop poster='https://woodgreen.org.uk/wp-content/uploads/2022/05/tokyo-summer-banner-img.jpg' id="html5_video_gc9ibputb4" src="https://cdn.videvo.net/videvo_files/video/free/2021-08/large_watermarked/210804_01_Dog%20Walk_4k_031_preview.mp4">
              </video>
            </div>
          </div>

          <div className='create-hero__content-container'>
            <div className='create-hero-content'>
              <h1 className='create-hero-title'>This is your first step to taking a happy animal home!</h1>
              <h2 className='create-hero-subtitle'>
                  Thank you, from us, our
                  <br></br>
                  partner organisations, and
                  <br></br>
                  most importantly, our animals  <FontAwesomeIcon icon={faPaw} />
              </h2>
            </div>

            <br></br>

            <form className="create-account-form">

                <div className="cap__form--firstName">
                    {/* <label>First Name</label> */}
                    <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}></input>
                </div>

                <div className="cap__form--lastName">
                    {/* <label>Last Name</label> */}
                    <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}></input>
                </div>

                <div className="cap__form--lastName">
                    {/* <label>Last Name</label> */}
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                </div>

                <div className="password__input">
                    {/* <label>Last Name</label> */}
                    <input type={`${showPassword}`} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <label>Show password</label>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onClick={()=>{handleShowPassWordClick()}}></input>



                {/* <div className="cap__form--lastName">
                    <label>Last Name</label>
                    <input type="text" placeholder="Role" onChange={(e) => setUserRole(e.target.value)}></input>
                </div> */}
                <label className="whoAreYouLabel">Who are you?</label>
                <select className="userRolesDropdown" name="cars" onChange={handleSelectRole}>
                  <option value="USER">USER</option>
                  <option value="ORGANISATION">ORGANISATION</option>
                  <option value="ADMIN">ADMIN</option>
                </select>
                
              

                {/* <div className="cap__form--age">
                    <label>Age</label>
                    <input type="text" placeholder="Age" onChange={(e) => setAge(parseInt(e.target.value))}></input>
                </div>

                <div className="cap__form--location">
                    <label>Location</label>
                    <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)}></input>
                </div>

                <div className="cap__form--prevAdopted">
                    <label>Previously Adopted?</label>
                    <input type="text" placeholder="Adopted before?"></input>
                </div> */}

                <br></br>

                <button type="submit" onClick={registerUser}>Create Account</button>

            </form>


          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default CreateAccPage