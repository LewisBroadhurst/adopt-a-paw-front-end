import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteCustomer } from '../../../../../API';



const CustomerAdminContainer = ( {firstName, id, lastName, location, prevAdopted} ) => {

  const handleDeleteCustomer = event => {
    event.preventDefault()

    deleteCustomer(id);
  }


  return (
    <>
        <section className='Post-Admin-Cont'>
            <span>{firstName} {lastName}</span>

            <span>Location: {location}</span>

            <span>Previously adopted? {prevAdopted}</span>

            <div className='Approve-Post-Admin'>
                <button type='button' className="Accept-Post">Accept <FontAwesomeIcon icon={faPaw} /></button>
                <button type='button' className="Decline-Post" onClick={handleDeleteCustomer}>Decline ❌</button>
            </div>
        </section>
    </>
  )
}

export default CustomerAdminContainer