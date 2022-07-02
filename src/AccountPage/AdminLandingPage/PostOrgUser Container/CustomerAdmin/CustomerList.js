import CustomerAdminContainer from "./CustomerContainer/CustomerAdminContainer";

const CustomerList = ( {customers, setCustomers} ) => {


  return (
    <>
        <section className='POU-Container'>

            <h3>Customers</h3>

            {
                customers.map( (cust, index) => {
                    return <CustomerAdminContainer key={index} 
                                                  firstName={cust.firstName}
                                                  lastName={cust.lastName}
                                                  location={cust.location}
                                                  prevAdopted={cust.previousAdoptions}
                                                  id={cust.id}
                                                  setCustomers={setCustomers} />
                })
            }

            <span className="LAP-Admin">All Customers</span>

        </section>
    
    </>
  )
}

export default CustomerList