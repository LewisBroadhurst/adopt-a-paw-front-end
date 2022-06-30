import CustomerAdminContainer from "./CustomerContainer/CustomerAdminContainer";
import "./CustomerList.css";

const CustomerAdminCont = ( {customers} ) => {


  return (
    <>
        <section className='POU-Container'>

            <h3>Newest Users</h3>

            {
                customers.map( (cust, index) => {
                    return <CustomerAdminContainer key={index} firstName={cust.firstName} id={cust.id} />
                })
            }

            <span className="LAP-Admin">All Users</span>

        </section>
    
    </>
  )
}

export default CustomerAdminCont