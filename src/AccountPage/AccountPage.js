import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./AccountPage.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { useEffect, useState } from "react";
import { FindUserBy_email_password } from "../API";




const AccountPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [appUser, setAppUser] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{

        FindUserBy_email_password(setAppUser, email, password);


    })

    

    const handleLogIn = (e) => {
        
        e.preventDefault();
        console.log(appUser);
        if(appUser.data?.enabled === false){
            alert("please verify your email to login");
        }
        
        else if(appUser.data?.appUserRole === "ADMIN"){

            navigate('/account/admin');

        }else if(appUser.data?.appUserRole === "USER"){

            navigate('/account/userLandPage');


        }else if(appUser.data?.appUserRole === "ORGANISATION"){

            navigate('/account/organisation');
        }



    }

    const handleCreateAccount = (e) => {

        e.preventDefault();

        navigate('/account/createAccount');





    }



  return (
    <>
        <Header />
        <section className="ap__background--color">
            <h2>Join us, and begin your adoption journey...</h2>
            <main id="Account-Main-Page">
                <section className="LogIn-Section">
                    <h3>Adopt A Paw <FontAwesomeIcon icon={faPaw} /> </h3>

                    <form>
                        <input type="text" placeholder="Email Address" onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                        <button type="submit" onClick={handleLogIn}>Log In</button>
                    </form>

                    <span className="Forgot-Password-Acc">Forgot your password?</span>

                    <button className="New-Acc-BTN" type="button" onClick={handleCreateAccount}>Create New Account</button>
                </section>

                <section className="Animal-Image-Acc">
                    <img src="https://placedog.net/600/600" alt="" />
                </section>
            </main>
        </section>
        <Footer />
    </>
  )
}

export default AccountPage