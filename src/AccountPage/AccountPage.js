import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./AccountPage.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { useState } from "react";



const AccountPage = () => {

    

    const handleLogIn = event => {
        event.preventDefault()
    }

  return (
    <>
        <Header />
        <section className="ap__background--color">
            <h2><Link to="/account/organisation">Join us, and begin your adoption journey...</Link></h2>
            <main id="Account-Main-Page">
                <section className="LogIn-Section">
                    <h3>Adopt A Paw <FontAwesomeIcon icon={faPaw} /> </h3>

                    <form>
                        <input type="text" placeholder="Email Address" />
                        <input type="text" placeholder="Password" />
                        <button type="submit" onClick={handleLogIn}><Link to="/account/admin">Log In</Link></button>
                    </form>

                    <span className="Forgot-Password-Acc"><Link to="/account/userLandPage">Forgot your password?</Link></span>

                    <button className="New-Acc-BTN" type="button"><Link to="/account/createAccount">Create New Account</Link></button>
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