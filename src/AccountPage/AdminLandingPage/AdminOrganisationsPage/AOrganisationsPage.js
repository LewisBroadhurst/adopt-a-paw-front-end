import { useEffect, useState } from "react";
import { getOrganisations } from "../../../API";
import "./AOrganisationsPage.css";


const AOrganisationsPage = () => {

    const [organisations, seteOrganisations] = useState([]);
    
    useEffect( () => {
        getOrganisations(seteOrganisations)
    }, [])

  return (
    <>  
        <section className="aap__headContainer">
            <section className="aap__header">
                <h2>Organisations</h2>
            </section>

            <form className="aap__searchBar">
                    <span>Filter by:</span>

                    <input type="text" placeholder="Organisation Name" onChange={(e) => (e.target.value)}></input>
                    <input type="text" placeholder="Org. Ref. Number" onChange={(e) => (e.target.value)}></input>
            </form>
        </section>

        <main className="aap__mainContent">

            <section className="aap__applicationList">

                {
                   
                    organisations.map( (org, index) => {
                        return  <section key={index} className="aap__appContainer">
                                    <section className="aap__customerInfo">
                                        <h3>Organisation Info.</h3>
                                        <span>Organisation Ref. Number: {org.id}</span>
                                        <span>{org.slogan}</span>
                                    </section>
                                </section>
                })}

            </section>

            <section className="aap__forms">
                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Update Organisation</h3>
                    </div>
                    <form>
                        <select defaultValue="default" onChange={(e) => (e.target.value) }>
                        <option value="default" disabled hidden>Organisation Ref. ID</option>
                            {
                                organisations.map( (org, index) => {
                                    return <option key={index}>{org.id}</option>
                                })
                            }
                        </select>
                        
                        <input type="text" placeholder="Name"></input>
                        <input type="text" placeholder="Slogan"></input>
                        <button type="button" onClick="">Update Organisation</button>
                    </form>
                </section>

                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Delete Organisation</h3>
                    </div>
                    <form>
                         <select defaultValue="default" onChange={(e) => (e.target.value)}>
                            <option value="default" disabled hidden>Organisation Ref. ID</option>
                            {
                                organisations.map( (org, index) => {
                                    return <option key={index}>{org.id}</option>
                                })
                            }
                        </select>
                        <input id="aap_dr" type="text" placeholder="Reason" required></input>
                        <button type="button" onClick="">Delete Organisation</button>
                    </form>
                </section>
            </section>

        </main>

        <div className="aap__footer"></div>
    </>
  )
}

export default AOrganisationsPage