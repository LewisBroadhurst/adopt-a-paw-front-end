import { useEffect, useState } from "react";
import { deleteOrgansation, getOrganisations, updateOrganisation } from "../../../../API";
import AdminHeader from "../../AdminHeader/AdminHeader";
import "./AOrganisationsPage.css";


const AOrganisationsPage = () => {

    const [organisations, setOrganisations] = useState([]);
    
    useEffect( () => {
        getOrganisations(setOrganisations)
    }, [])

    // Update Organisation

    const [uoID, setUoID] = useState('');
    const [newOrgName, setNewOrgName] = useState('');
    const [newOrgSlogan, setNewOrgSlogan] = useState('');

    const handleUpdateOrganisation = async (event) => {
        event.preventDefault();

        let orgData;

        if (newOrgName === "" && newOrgSlogan) {
            orgData = {
                "slogan": `${newOrgSlogan}`
            }
        } else if (newOrgName && newOrgSlogan === "") {
            orgData = {
                "name": `${newOrgName}`
            }
        } else if (newOrgName && newOrgSlogan) {
            orgData = {
                "name": `${newOrgName}`,
                "slogan": `${newOrgSlogan}`
            }
        } else {
            return alert("Need to specify a value to change");
        }

        console.log(orgData);
        
        await updateOrganisation(uoID, orgData);

        await getOrganisations(setOrganisations)

        resetForm()
    }

    // Delete Organisation

    const [doID, setDoID] = useState(-1);

    const handleDeleteOrg = async (event) => {
        event.preventDefault()

        await deleteOrgansation(doID);

        await getOrganisations(setOrganisations);

        resetForm()
    }

    // ORG SEARCH

    const [orgNameSearch, setOrgNameSearch] = useState('');

    const orgFiltName = organisations.filter( (org) => org.name.toLowerCase().includes(orgNameSearch))

    // Reset Forms

    const resetForm = () => {
        document.getElementById("aop__nameS").value = ''
        setOrgNameSearch('')

        document.getElementById('aap_dr').value = ''
        document.getElementById("aop_doID").value = 'default'
        setDoID('');

        document.getElementById('acp_uoSlogan').value = ''
        document.getElementById("acp_uoID").value = 'default'
        document.getElementById('acp_uoName').value = ''
        
    }

  return (
    <>  
    <AdminHeader />
        <section className="aap__headContainer">
            <section className="aap__header">
                <h2>Organisations</h2>
            </section>

            <form className="aap__searchBar">
                    <span>Filter by:</span>

                    <input type="text" id="aop__nameS" placeholder="Organisation Name" onChange={(e) => setOrgNameSearch(e.target.value)}></input>
                    {/* <input type="text" placeholder="Org. Ref. Number" onChange={(e) => (e.target.value)}></input> */}
                    <button type="button" onClick={resetForm}>Reset</button>
            </form>
        </section>

        <main className="aap__mainContent">

            <section className="aap__applicationList">

                {
                   
                    orgFiltName.map( (org, index) => {
                        return  <section key={index} className="aap__appContainer">
                                    <section className="aop__customerInfo">
                                        <h3>Organisation Info.</h3>
                                        <span>Name: {org.name}</span>
                                        <span>Organisation Ref. Number: {org.id}</span>
                                        <span>{org.slogan}</span>
                                    </section>

                                    <section className="aap__orgLogo">
                                        <img src={org.logo_url} alt=""/>
                                    </section>
                                </section>
                })}

            </section>

            <section className="aap__forms">
                <section className="aap__form">
                    <h3>Update Organisation</h3>
                    <form>
                        <select defaultValue="default" id="acp_uoID" onChange={(e) => setUoID(e.target.value) }>
                        <option value="default" disabled hidden>Organisation Ref. ID</option>
                            {
                                organisations.map( (org, index) => {
                                    return <option key={index}>{org.id}</option>
                                })
                            }
                        </select>
                        
                        <input type="text" id="acp_uoName"  placeholder="Name" onChange={(e) => setNewOrgName(e.target.value)}></input>
                        <input type="text" id="acp_uoSlogan" placeholder="Slogan" onChange={(e) => setNewOrgSlogan(e.target.value)}></input>
                        <button type="button"  onClick={handleUpdateOrganisation}>Update Organisation</button>
                    </form>
                </section>

                <section className="aap__form">
                    <h3>Delete Organisation</h3>
                    <form>
                         <select defaultValue="default" id="aop_doID" onChange={(e) => setDoID(e.target.value)}>
                            <option value="default" disabled hidden>Organisation Ref. ID</option>
                            {
                                organisations.map( (org, index) => {
                                    return <option key={index}>{org.id}</option>
                                })
                            }
                        </select>
                        <input id="aap_dr" type="text" placeholder="Reason" required></input>
                        <button type="button" onClick={handleDeleteOrg}>Delete Organisation</button>
                    </form>
                </section>
            </section>

        </main>

    </>
  )
}

export default AOrganisationsPage