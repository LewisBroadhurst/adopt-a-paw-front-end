import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import PawLogo from "./Images/white-paw-print-transparent-background-17.png";

import "./Header_Stylesheets/HeaderBasics.css";
import "./Header_Stylesheets/HeaderTablet+.css";

import { NavLink as Link } from "react-router-dom";

const Header = () => {

  const toggleMenuDisplay = () => {

    const menu = document.querySelector(".ScrollDown-Menu");

    if (menu.style.display === "none") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }

  }

  return (
    <>
        <header className="Header-Mobile">
           
            <img src={PawLogo} alt="Adopt A Paw Logo" className="Logo-Header"/>
            
            <Link to="/"><h1 className="AAP-Header-Title">Adopt A Paw</h1></Link>

            <nav className="Expanded-Navbar-Header">
              <ul>
                <li className="text_link"><Link to="/adopt">Adopt</Link></li>
                <li>|</li>
                <li className="text_link">Advice</li>
                <li>|</li>
                <li className="text_link"><Link to="/organisations">Organisations</Link></li>
                <li>|</li>
                <li  className="text_link">Success Stories</li>
                <li>|</li>
                <li  className="text_link"><Link to="/news">News</Link></li>
              </ul>
            </nav>
 
            <Link to="/account"  className="text_link"><span className="Account-Link">Account</span></Link>

            <button type="button" onClick={toggleMenuDisplay} className="Menu-Button-Header"><FontAwesomeIcon icon={faBars} /></button>

        </header>

        <ul className="ScrollDown-Menu">
          <li className="text_link">Adopt</li>
          <li className="text_link">Animals</li>
          <li className="text_link">Organisations</li>
          <li className="text_link">Success Stories</li>
          <li className="text_link">News</li>
        </ul>

    </>
  )
}

export default Header