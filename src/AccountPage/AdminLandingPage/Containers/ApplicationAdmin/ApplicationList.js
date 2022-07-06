import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ApplicationContainer from "./ApplicationContainer/ApplicationContainer";
import { getAllApplications } from "../../../../API";
import { useEffect, useState } from "react";

const ApplicationList = () => {

  const [applications, setApplications] = useState([]);

  useEffect( () => {
    getAllApplications(setApplications)
  }, [])

  return (
    <>
        <section className='POU-Container'>

            <div className="pou__headerElementCont">
              <h3>Adoption Applications</h3>

              <span className="LAP-Admin"><Link to="/account/admin/applications">All Applications <FontAwesomeIcon icon={faSquareArrowUpRight}/></Link></span>
            </div>

            <div className="pou__cardContainers">
            {
                  applications?.slice(0, 3).map( (app, index) => {
                      return <ApplicationContainer key={index} 
                                                  id={app.id} 
                                                  firstName={app.customer.firstName}
                                                  lastName={app.customer.lastName}
                                                  animalName={app.customer.application[0].animal.name} 
                                                  animalLocation={app.customer.application[0].animal.location} 
                                                  applicationStatus={app.customer.application[0].applicationStatus}
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