import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./AccountPage.css";
import { Link } from "react-router-dom";



const AccountPage = () => {

    const handleLogIn = event => {
        event.preventDefault()
    }

  return (
    <>
        <main id="Account-Main-Page">
            <section className="Animal-Image-Acc">
                <img src="https://placedog.net/600/600" alt="" />
            </section>

            <section className="LogIn-Section">
                <h3>Adopt A Paw <FontAwesomeIcon icon={faPaw} /> </h3>

                <form>
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Password" />
                    <button type="submit" onClick={handleLogIn}><Link to="/account/admin">Log In</Link></button>
                </form>

                <span className="Forgot-Password-Acc">Forgot your password?</span>

                <button className="New-Acc-BTN" type="button"><Link to="/account/createAccount">Create New Account</Link></button>
            </section>
        </main>
    </>
  )
}

export default AccountPage