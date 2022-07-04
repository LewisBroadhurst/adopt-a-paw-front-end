import { useEffect, useState } from "react";
import { getCustomers, deleteCustomer } from "../../../../API";
import AdminHeader from "../../AdminHeader/AdminHeader";
import "./ACustomersPage.css";



const ACustomersPage = () => {

    const [customers, setCustomers] = useState([]);


    useEffect( () => {
        getCustomers(setCustomers)
    }, []);

    // Delete Customer

    const [dcID, setDcID] = useState(-1);

    const handleDeleteCustomer = async (event) => {
        event.preventDefault();

        await deleteCustomer(dcID);

        await getCustomers(setCustomers);
    }

    // Search bar

    const [nameSearch, setNameSearch] = useState('');
    const [locationSearch, setLocationSearch] = useState([]);
    const [prevAdoptSearch, setPrevAdoptSearch] = useState([]);

    const customersFiltName = customers.filter( customer => customer.firstName.toLowerCase().includes(nameSearch.toLowerCase()));

    const customersFiltLocation = customersFiltName.filter( customer => customer.location.toLowerCase().includes(locationSearch));

    const customersFiltAdopted = customersFiltLocation.filter( customer => customer.previousAdoptions.toString().includes(prevAdoptSearch))

  return (
    <>  
        <AdminHeader />
        <section className="aap__headContainer">
            <section className="aap__header">
                <h2>Customers</h2>
            </section>

            <form className="aap__searchBar">
                    <span>Filter by:</span>

                    <input type="text" placeholder="Name" onChange={(e) => setNameSearch(e.target.value)}></input>
                    <input type="text" placeholder="Location" onChange={(e) => setLocationSearch(e.target.value)}></input>
                    <input type="text" placeholder="Previously adopted?" onChange={(e) => setPrevAdoptSearch(e.target.value)}></input>
            </form>
        </section>

        <main className="aap__mainContent">

            <section className="aap__applicationList">

                {
                   
                    customersFiltAdopted.map( (customer, index) => {
                        return  <section key={index} className="aap__appContainer">
                                    <section className="aap__customerInfo">
                                        <h3>Customer Info.</h3>
                                        <span>Customer Ref. Number: {customer.id}</span>
                                        <span>Name: {customer.firstName} {customer.lastName}</span>
                                        <span>DOB: {customer.dateOfBirth}</span>
                                        <span>Location: {customer.location}</span>
                                        <span>Previously adopted? {customer.previousAdoptions.toString()}</span>
                                    </section>
                    
                                    <section className="aap__locationInfo">
                                        <h3>Cem Location Map</h3>
                                    </section>
                                </section>
                })}

            </section>

            <section className="aap__forms">
                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Delete Customer</h3>
                    </div>
                    <form>
                         <select defaultValue="default" onChange={(e) => setDcID(e.target.value)}>
                            <option value="default" disabled hidden>Customer ID</option>
                            {
                                customers.map( (customer, index) => {
                                    return <option key={index}>{customer.id}</option>
                                })
                            }
                        </select>
                        <input id="aap_dr" type="text" placeholder="Reason" required></input>
                        <button type="button" onClick={handleDeleteCustomer}>Delete Customer</button>
                    </form>
                </section>
            </section>

        </main>

        <div className="aap__footer"></div>
    </>
  )
}

export default ACustomersPage