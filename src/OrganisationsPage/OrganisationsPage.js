import "./OrganisationsPage.css";


const OrganisationsPage = () => {
  return (
    <>
        <main id="Organisation-Page-Main">

          <section className="orgPage__mainHeader--pos">
            <span>Our Partner Organisations</span>

            <section className="orgPage__logoBar--pos">
              <ul>
                <li>img</li>
                <li>img</li>
                <li>img</li>
                <li>img</li>
                <li>img</li>
              </ul>
            </section>
  
          </section>

          <form className="orgPage__searchBar--pos">
            <input type="text" placeholder="Enter Organisation Name"></input>
            <input type="text" placeholder="Enter Keyword"></input>
            <button>Search</button>
          </form>

          <section className="orgPage__orgList--pos">

            

          </section>

        </main>
    </>
  )
}

export default OrganisationsPage