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

            <div className='AC__form--animalCont'>
                <button type='button' onClick={handleDeleteCustomer}>Remove from system</button>
            </div>
        </section>
    </>
  )
}

export default CustomerAdminContainer