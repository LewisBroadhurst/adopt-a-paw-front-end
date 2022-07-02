import { deleteCustomer, getCustomers } from '../../../../../API';



const CustomerAdminContainer = ( {firstName, id, lastName, location, prevAdopted, setCustomers} ) => {

  const handleDeleteCustomer = async event => {
    event.preventDefault()

    await deleteCustomer(id);

    await getCustomers(setCustomers);
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