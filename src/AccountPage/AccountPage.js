import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./AccountPageBasic.css";
import "./AccPageTablet+.css";


const AccountPage = () => {
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
                    <button type="submit">Log In</button>
                </form>

                <span className="Forgot-Password-Acc">Forgot your password?</span>

                <button className="New-Acc-BTN" type="button">Create New Account</button>
            </section>
        </main>
    </>
  )
}

export default AccountPage