import React from 'react'

const OrgApplicationsPage = () => {
  return (
    <>
        <section className="aap__headContainer">
            <section className="aap__header">
                <h2>Applications</h2>
            </section>

            <form className="aap__searchBar">
                    <span>Filter by:</span>

                    <input type="text" placeholder="Adoptee Name" onChange={(e) => (e.target.value)}></input>
                    <input type="text" placeholder="Animal Location" onChange={(e) => (e.target.value)}></input>
                    <input type="text" placeholder="Application Status" onChange={(e) => (e.target.value)}></input>
            </form>
        </section>

        <main className="aap__mainContent">

            <section className="aap__applicationList">

                {
                   
                    ( (app, index) => {
                        return  <section key={index} className="aap__appContainer aap__appContainerImage">
                                    <section className="aap__customerInfo">
                                        <h3>Customer Info.</h3>
                                        <span>Application number: {app.id}</span>
                                        <span>{app.customer.firstName} {app.customer.lastName}</span>
                                        <span>{app.customer.location}</span>
                                        <span>Previously adopted? {app.customer.previousAdoptions.toString()}</span>
                                        <span>App. Status: {app.customer.application[0].applicationStatus}</span>
                                    </section>
                    
                                    <section className="aap__animalInfo">
                                        <h3>Animal Info.</h3>
                                        <span>Name: {app.customer.application[0].animal.name}</span>
                                        <span>Sex: {app.customer.application[0].animal.sex}</span>
                                        <span>DOB: {app.customer.application[0].animal.dateOfBirth}</span>
                                        <span>Location: {app.customer.application[0].animal.location}</span>
                                        <span>Organisation: {app.customer.application[0].animal.organisation.name}</span>
                                    </section>

                                    <section className="aap__applicationImg">
                                        <img src={app.customer.application[0].animal.photoUrl} alt=""/>
                                    </section>
                                </section>
                })}

            </section>

            <section className="aap__forms">
                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Update Application</h3>
                    </div>
                    <form>
                        <select defaultValue="default" onChange={(e) => (e.target.value) }>
                        <option value="default" disabled hidden>Application ID</option>
                            {
                                (app, index) => {
                                    return <option key={index}>{app.id}</option>
                                }
                            }
                        </select>
                        
                        <select defaultValue="default" onChange={(e) => (e.target.value) }>
                            <option value="default" disabled hidden>Application Status</option>
                            <option>Rejected</option>
                            <option>Pending</option>
                            <option>Approved</option>
                        </select>
                        <input type="text" placeholder="Reason" required></input>
                        <button type="button" onClick="">Update Application</button>
                    </form>
                </section>

                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Delete Application</h3>
                    </div>
                    <form>
                         <select defaultValue="default" onChange={(e) => (e.target.value)}>
                            <option value="default" disabled hidden>Application ID</option>
                            {
                                (app, index) => {
                                    return <option key={index}>{app.id}</option>
                                }
                            }
                        </select>
                        <input id="aap_dr" type="text" placeholder="Reason" required></input>
                        <button type="button" onClick="">Delete Application</button>
                    </form>
                </section>
            </section>

        </main>
    </>
  )
}

export default OrgApplicationsPage