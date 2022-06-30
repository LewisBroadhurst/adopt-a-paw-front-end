import { faPaw } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const OrgContainer = ( {name, id} ) => {

    const handleDeleteOrganisation = () => {
        console.log(id);
    }

  return (
    <>
        <section className='Post-Admin-Cont'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at libero ultrices, condimentum tellus sit amet, tempus metus. Aenean id tortor at nisi consequat facilisis.</p>

            <span>{name}</span>

            <span>Posted: 11/22/3333</span>

            <div className='Approve-Post-Admin'>
                <button type='button' className="Accept-Post">Accept <FontAwesomeIcon icon={faPaw} /></button>
                <button type='button' className="Decline-Post" onClick={handleDeleteOrganisation}>Decline ❌</button>
            </div>
        </section>
    </>
  )
}

export default OrgContainer