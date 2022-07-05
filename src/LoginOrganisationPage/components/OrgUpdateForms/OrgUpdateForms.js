import { updateOrganisation } from "../../../API"

const OrgUpdateForms = () => {

    const handleOrgNameUpdate = (event) => {
        event.preventDefault()
    }

    const handleOrgSloganUpdate = (event) => {
        event.preventDefault()
    }

    const handleOrgAddressUpdate = (event) => {
        event.preventDefault()
    }

  return (
    <>
        <h2>Update Details</h2>
        <section className="olp__form--container">
            <h3>Update Name</h3>
            <form>
                <input type="text" placeholder="Org. Name"></input>
                <button type="button" onClick={handleOrgNameUpdate}>Confirm</button>
            </form>
        </section>

        <section className="olp__form--container">
            <h3>Update Slogan</h3>
            <form>
                <input type="text" placeholder="Org. Slogan"></input>
                <button type="button" onClick={handleOrgSloganUpdate}>Confirm</button>
            </form>
        </section>

        <section className="olp__form--container">
            <h3>Update Address</h3>
            <form>
                <input type="text" placeholder="Org. Address"></input>
                <button type="button" onClick={handleOrgAddressUpdate}>Confirm</button>
            </form>
        </section>

        <section className="olp__form--container">
            <h3>Update Logo</h3>
            <form>
                <input type="text" placeholder="Logo URL"></input>
                <button type="button">Confirm</button>
            </form>
        </section>
    </>
  )
}

export default OrgUpdateForms