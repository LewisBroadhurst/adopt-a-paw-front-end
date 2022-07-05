import BatterseaLogo from "../images/battersea-logo.png";
import "./OrganisationCardContainer.css";


const OrganisationCardContainer = () => {
  return (
    <>
        <section className="Organ-Container">

            <div className="Organ-Img-Div">
                <img className="Organ-Img" src={BatterseaLogo} alt="Battersea Logo" />
            </div>

            <div>
                <div className="Organ-Text-Div">Battersea Dogs & Cats Home</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet blandit lectus, id sodales nunc.</p>
            </div>

        </section>
    </>
  )
}

export default OrganisationCardContainer