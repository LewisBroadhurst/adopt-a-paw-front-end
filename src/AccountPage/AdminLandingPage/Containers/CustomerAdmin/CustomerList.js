import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CustomerAdminContainer from "./CustomerContainer/CustomerAdminContainer";

const CustomerList = ( {customers, setCustomers} ) => {


  return (
    <>
        <section className='POU-Container'>

          <div className="pou__headerElementCont">
            <h3>Customers</h3>

            <span className="LAP-Admin"><Link to="/account/admin/customers">All Customers <FontAwesomeIcon icon={faSquareArrowUpRight}/></Link></span>
          </div>

          <div className="pou__cardContainers">
            {
                customers.slice(0, 4).map( (cust, index) => {
                    return <CustomerAdminContainer key={index} 
                                                  firstName={cust.firstName}
                                                  lastName={cust.lastName}
                                                  location={cust.location}
                                                  prevAdopted={cust.previousAdoptions}
                                                  id={cust.id}
                                                  setCustomers={setCustomers} />
                })
            }
          </div>
        </section>
    
    </>
  )
}

export default CustomerList