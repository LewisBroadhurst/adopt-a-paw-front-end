import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const OrgAnimalsPage = () => {
  return (
    <>
    <section className="aap__headContainer">
            <section className="aap__header">
                <h2>Animals</h2>
            </section>

            <form className="aap__searchBar">
                    <span>Filter by:</span>

                    <input id="aap__searchName" type="text" placeholder="Name" onChange={(e) => (e.target.value)}></input>
                    <input type="text" placeholder="Location" onChange={(e) => (e.target.value)}></input>
                    <input type="text" placeholder="Adoption Status" onChange={(e) => (e.target.value)}></input>
                    <input type="text" placeholder="Organisation" onChange={(e) => (e.target.value)}></input>

                    <button type="button" onClick="">Reset</button>
            </form>
        </section>

        <main className="aap__mainContent">

            <section className="aap__applicationList">

                {
                    ( (animal, index) => {
                        return <section key={index} className="aap__appContainer">
                        <section className="aap__customerInfo">
                            <h3>Animal Info.</h3>
                            <span>Reference number: {animal.id}</span>
                            <span>Name: {animal.name}</span>
                            <span>DOB: {animal.dateOfBirth}</span>
                            <span>Location: {animal.location}</span>
                            {/* <span>Organisation: {animal.organisation.name != null ? animal.organisation.name : "Not specified"}</span> */}
                            <span>Adoption status: {animal.availableStatus}</span>
                        </section>
        
                        <section className="aap__animalImg">
                            <img src={animal.photoUrl} alt="" />
                        </section>
                    </section>
                    })
                }

            </section>

            <section className="aap__forms">

                <section className="aap__form">
                    <div id="aap__header__addA" className="ulp__form__header aap__arrow">
                        <h3>Add Animal</h3>
                        <span onClick=""><FontAwesomeIcon icon={faArrowUp} /></span>
                    </div>
                    <form id="aap__aaForm">
                        
                        <input type="text" placeholder="Name" required onChange={(e) => (e.target.value)}></input>
                        <input type="text" placeholder="Species" required onChange={(e) => (e.target.value)}></input>
                        <input type="text" placeholder="Sex (Male or Female)" required onChange={(e) => (e.target.value)}></input>
                        <input type="text" placeholder="Location" required onChange={(e) => (e.target.value)}></input>

                        <select defaultValue="default" onChange={(e) => (e.target.value) }>
                        <option value="default" disabled hidden>Organisation</option>
                            {
                                (org, index) => {
                                    return <option key={index}>{org.name}, ID: {org.id}</option>
                                }
                            }
                        </select>
                        <button type="button" onClick="">Add Animal</button>
                    </form>
                </section>

                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Update Location</h3>
                    </div>
                    <form>
                        <select defaultValue="default" onChange={(e) => (e.target.value) }>
                        <option value="default" disabled hidden>Animal Reference No.</option>
                            {
                                (app, index) => {
                                    return <option key={index}>{app.id}</option>
                                }
                            }
                        </select>
                        
                        <input placeholder="Location" onChange={(e) => (parseInt(e.target.value))}></input>
                        <button type="button" onClick="">Update Location</button>
                    </form>
                </section>

                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Remove Animal</h3>
                    </div>
                    <form>
                         <select defaultValue="default" onChange={(e) => (e.target.value)}>
                            <option value="default" disabled hidden>Animal Reference No.</option>
                            {
                                ( (app, index) => {
                                    return <option key={index}>{app.id}</option>
                                })
                            }
                        </select>
                        <input id="aap_dr" type="text" placeholder="Reason" required></input>
                        <button type="button" onClick="">Delete Animal</button>
                    </form>
                </section>
            </section>

        </main>
    </>
  )
}

export default OrgAnimalsPage