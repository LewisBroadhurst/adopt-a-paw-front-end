import { useEffect, useState } from "react";
import { getCustomers } from "../../../API";
import "./ACustomersPage.css";



const ACustomersPage = () => {

    const [customers, setCustomers] = useState([]);


    useEffect( () => {
        
        getCustomers(setCustomers)

    }, []);


  return (
    <>  
        <section className="aap__headContainer">
            <section className="aap__header">
                <h2>Customers</h2>
            </section>

            <form className="aap__searchBar">
                    <span>Filter by:</span>

                    <input type="text" placeholder="Name" onChange={(e) => (e.target.value)}></input>
                    <input type="text" placeholder="Location" onChange={(e) => (e.target.value)}></input>
                    <input type="text" placeholder="Previously adopted?" onChange={(e) => (e.target.value)}></input>
            </form>
        </section>

        <main className="aap__mainContent">

            <section className="aap__applicationList">

                {
                   
                    customers.map( (customer, index) => {
                        return  <section key={index} className="aap__appContainer">
                                    <section className="aap__customerInfo">
                                        <h3>Customer Info.</h3>
                                        <span>Customer Ref. Number: {customer.id}</span>
                                        <span>Name: {customer.firstName} {customer.lastName}</span>
                                        <span>DOB: {customer.dateOfBirth}</span>
                                        <span>Previously adopted? {customer.previousAdoptions.toString()}</span>
                                    </section>
                    
                                    {/* <section className="aap__animalInfo">
                                        <h3>Animal Info.</h3>
                                        <span>Name: </span>
                                        <span>DOB: </span>
                                        <span>Location: </span>
                                        <span>Organisation: </span>
                                    </section> */}
                                </section>
                })}

            </section>

            <section className="aap__forms">
                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Delete Customer</h3>
                    </div>
                    <form>
                         <select defaultValue="default" onChange={(e) => (e.target.value)}>
                            <option value="default" disabled hidden>Customer ID</option>
                            {
                                customers.map( (customer, index) => {
                                    return <option key={index}>{customer.id}</option>
                                })
                            }
                        </select>
                        <input id="aap_dr" type="text" placeholder="Reason" required></input>
                        <button type="button" onClick="">Delete Customer</button>
                    </form>
                </section>
            </section>

        </main>

        <div className="aap__footer"></div>
    </>
  )
}

export default ACustomersPage