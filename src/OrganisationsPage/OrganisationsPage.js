import OrganisationCardContainer from "./OrganisationCardContainer/OrganisationCardContainer.js";
import OrganisationFilter from "./OrganisationFilter/OrganisationFilter.js";
import "./OrganisationsPage.css";


const OrganisationsPage = () => {
  return (
    <>
        <main id="Organisation-Page-Main">

            <h2>Organisations</h2>

            <OrganisationFilter />

            <OrganisationCardContainer />

            <OrganisationCardContainer />

            <OrganisationCardContainer />


        </main>
    </>
  )
}

export default OrganisationsPage