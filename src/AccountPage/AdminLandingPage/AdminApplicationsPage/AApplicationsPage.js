import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const AApplicationsPage = () => {
  return (
    <>
        <section className="aap_header">
            <h2>Applications</h2>

            <form className="aap_searchBar">
                <span>Filter by:</span>

                <input type="text" placeholder="Animal Name"></input>
                <input type="text" placeholder="Animal Location"></input>
                <input type="text" placeholder="Application Status"></input>
            </form>
        </section>

        <main>

            <section className="aap_forms">
                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Update Application Status</h3>
                        <button><FontAwesomeIcon icon={faArrowUp} /></button>
                    </div>
                    <form>
                        <input type="text"></input>
                        <input type="text"></input>
                        <input type="text"></input>
                        <button type="button">Press me!</button>
                    </form>
                </section>

                <section className="aap__form">
                    <div className="ulp__form__header">
                        <h3>Delete Application</h3>
                        <button><FontAwesomeIcon icon={faArrowUp} /></button>
                    </div>
                    <form>
                        <input type="text"></input>
                        <input type="text"></input>
                        <input type="text"></input>
                        <button type="button">Press me!</button>
                    </form>
                </section>
            </section>

        </main>
    </>
  )
}

export default AApplicationsPage