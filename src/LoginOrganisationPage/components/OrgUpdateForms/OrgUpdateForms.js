import { useEffect, useState } from "react"
import { updateOrganisation, getOrganisations } from "../../../API"

const OrgUpdateForms = ({getOrg}) => {

    const [organisations, setOrganisations] = useState([]);
    const [newOrgName, setNewOrgName] = useState('');
    const [newOrgEmail, setNewOrgEmail] = useState('');
    const [newOrgSlogan, setNewOrgSlogan] = useState('');
    const [newOrgLogo, setNewOrgLogo] = useState('');
    const [updateOrgId, setUpdateOrgId] = useState(-1);

    useEffect( () => {
        getOrganisations(setOrganisations)
    }, [])

    // Name Update

    const handleOrgNameUpdate = async (event) => {
        event.preventDefault()

        const orgData = {
            "name": `${newOrgName}`
        }

        await updateOrganisation(updateOrgId, orgData)

        await getOrganisations(setOrganisations)

        await getOrg()

        resetForm()
    }

    // Slogan Update

    const handleOrgSloganUpdate = async (event) => {
        event.preventDefault()

        const orgData = {
            "slogan": `${newOrgSlogan}`
        }

        await updateOrganisation(updateOrgId, orgData)

        await getOrganisations(setOrganisations)

        await getOrg()

        resetForm()
    }

    // Address Update

    const handleOrgAddressUpdate = async (event) => {
        event.preventDefault()

        const orgData = {
            "email": `${newOrgEmail}`
        }

        await updateOrganisation(updateOrgId, orgData)

        await getOrganisations(setOrganisations)

        await getOrg()

        resetForm()
    }

    // Logo Update

    const handleOrgLogoUpdate = async (event) => {
        event.preventDefault()

        const orgData = {
            "logo_url": `${newOrgLogo}`
        }

        await updateOrganisation(updateOrgId, orgData)

        await getOrganisations(setOrganisations)

        await getOrg()

        resetForm()
    }

    // Reset values

    const resetForm = () => {
        setNewOrgEmail('');
        setNewOrgLogo('');
        setNewOrgName('');
        setNewOrgSlogan('');
        setUpdateOrgId('');

        document.getElementById('oup__nameInput').value= '';
        document.getElementById('oup__sloganInput').value= '';
        document.getElementById('oup__logoInput').value= '';
        document.getElementById('oup__emailInput').value= '';
        document.getElementById('oup__idInput').value= 'default';
    }

  return (
    <>
        <h2>Update Details</h2>

        <section className="olp__form--container">
            <h3>Organisation ID</h3>
            <select defaultValue="default" id="oup__idInput" onChange={(e) => setUpdateOrgId(e.target.value)}>
                <option value="default" hidden disabled> Org. Ref. ID</option>
                {
                organisations.map( (org, index) => {
                    return <option key={index}>{org.id}</option>
                })
                }       
            </select>
        </section>

        <section className="olp__form--container">
            <h3>Update Name</h3>
            <form>
                <input type="text" id="oup__nameInput" placeholder="Org. Name" onChange={(e) => setNewOrgName(e.target.value)}></input>
                <button type="button" onClick={handleOrgNameUpdate}>Confirm</button>
            </form>
        </section>

        <section className="olp__form--container">
            <h3>Update Slogan</h3>
            <form>
                <input type="text" id="oup__sloganInput" placeholder="Org. Slogan" onChange={(e) => setNewOrgSlogan(e.target.value)}></input>
                <button type="button" onClick={handleOrgSloganUpdate}>Confirm</button>
            </form>
        </section>

        <section className="olp__form--container">
            <h3>Update Address</h3>
            <form>
                <input type="text" id="oup__emailInput" placeholder="Org. Address" onChange={(e) => setNewOrgEmail(e.target.value)}></input>
                <button type="button" onClick={handleOrgAddressUpdate}>Confirm</button>
            </form>
        </section>

        <section className="olp__form--container">
            <h3>Update Logo</h3>
            <form>
                <input type="text" id="oup__logoInput" placeholder="Logo URL" onChange={(e) => setNewOrgLogo(e.target.value)}></input>
                <button type="button" onClick={handleOrgLogoUpdate}>Confirm</button>
            </form>
        </section>
    </>
  )
}

export default OrgUpdateForms