import "./OrgContainer.css";
import { getOrganisations, deleteOrgansation } from "../../../../../API";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const OrgContainer = ( {name, id, setOrganisations, slogan, logo_url} ) => {

    const handleDeleteOrganisation = async (event) => {
        event.preventDefault();
        await deleteOrgansation(id);
        await getOrganisations(setOrganisations)
    }

  return (
    <>
        <section className='Post-Admin-Cont'>
            <span>{name}</span>

            <p>{slogan}</p>

            <p>A world where all animals are respected and treated with kindness and compassion.</p>

            <span>Posted: 11/22/3333</span>

            <div className='OC__form--formContainer'>
                <div className="OC__form--updateName">
                    <button type='button'>Update name <FontAwesomeIcon icon={faPaw}/> </button>
                    <input type="text"></input>
                </div>
                
                <button type='button' onClick={handleDeleteOrganisation}>Delete</button>
            </div>
        </section>
    </>
  )
}

export default OrgContainer