import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ApplicationContainer from "./ApplicationContainer/ApplicationContainer";

const ApplicationList = ({applications, setApplications}) => {

  return (
    <>
        <section className='POU-Container'>

            <div className="pou__headerElementCont">
              <h3>Adoption Applications</h3>

              <span className="LAP-Admin"><Link to="/account/admin/applications">All Applications <FontAwesomeIcon icon={faSquareArrowUpRight}/></Link></span>
            </div>

            <div className="pou__cardContainers">
            {
                  applications.slice(0, 3).map( (app, index) => {
                      return <ApplicationContainer key={index} 
                                                  id={app.id} 
                                                  firstName={app.customer.firstName}
                                                  lastName={app.customer.lastName}
                                                  // animalName={app.application.animal.name} 
                                                  // animalLocation={app.application.animal.location} 
                                                  // applicationStatus={app.application.animal.applicationStatus}
                                                  setApplications={setApplications}/>
                  })
            }
            </div>
            {/* <span className="LAP-Admin"><Link to="/account/admin/applications">All Adoption Applications</Link></span> */}

        </section>
    </>
  )
}

export default ApplicationList