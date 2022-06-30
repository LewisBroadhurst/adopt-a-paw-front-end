import BatterseaLogo from "../images/battersea-logo.png";
import "./OrganisationCardContainerBasic.css";
import "./OrganCardContTablet.css";
import "./OrganCardContLaptop+.css"
import { useEffect, useState } from "react";
import { getAllOrganisations } from "../../API";


const OrganisationCardContainer = () => {

  const [organisations, setOrganisations] = useState([])
  
  useEffect (() => {
    getAllOrganisations(setOrganisations)
  }, [])

  return (
    <>
        <ul className="Organ-Container">
          <li>
            <div className="Organ-Img-Div">
                <img className="Organ-Img" src={BatterseaLogo} alt="Battersea Logo" />
            </div>

            <div className="Organ-Text-Div">
                <h3>Battersea Dogs & Cats Home</h3>
                <p>{organisations.name}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet blandit lectus, id sodales nunc.</p>
            </div>
          </li>
        </ul>
    </>
  )
}

export default OrganisationCardContainer