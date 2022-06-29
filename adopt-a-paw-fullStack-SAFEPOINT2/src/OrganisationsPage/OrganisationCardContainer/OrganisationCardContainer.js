import BatterseaLogo from "../images/battersea-logo.png";
import "./OrganisationCardContainerBasic.css";
import "./OrganCardContTablet.css";
import "./OrganCardContLaptop+.css"

const OrganisationCardContainer = () => {
  return (
    <>
        <section className="Organ-Container">

            <div className="Organ-Img-Div">
                <img className="Organ-Img" src={BatterseaLogo} alt="Battersea Logo" />
            </div>

            <div className="Organ-Text-Div">
                <h3>Battersea Dogs & Cats Home</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet blandit lectus, id sodales nunc.</p>
            </div>

        </section>
    </>
  )
}

export default OrganisationCardContainer