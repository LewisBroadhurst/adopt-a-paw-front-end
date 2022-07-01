import { faPaw } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const OrgContainer = ( {name, id} ) => {

    const handleDeleteOrganisation = () => {
        console.log(id);
    }

  return (
    <>
        <section className='Post-Admin-Cont'>
            <span>{name}</span>

            <p>A world where all animals are respected and treated with kindness and compassion.</p>

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