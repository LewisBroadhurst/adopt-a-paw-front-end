import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import ApplicationContainer from '../../../AccountPage/AdminLandingPage/Containers/ApplicationAdmin/ApplicationContainer/ApplicationContainer'

const OrgApplicationContainer = ( {applications}) => {
  return (
    <>
        <section className="olp__sectionContainer">
            <div className="olp__headerElementCont">
                <h3>Applications</h3>
                <span><Link to="/account/organisation/applications">All Applications <FontAwesomeIcon icon={faSquareArrowUpRight} /></Link></span>
            </div>
            
            <div className="olp__cardContainers">
            {
                applications.slice(0, 2).map((app, index) => {
                return <ApplicationContainer key={index}
                                        id={app.id}
                                        firstName={app.customer.firstName}
                                        lastName={app.customer.lastName}
                                        animalName={app.customer.application[0].animal.name} 
                                        animalLocation={app.customer.application[0].animal.location} 
                                        applicationStatus={app.customer.application[0].applicationStatus}
                                        />
                })
            }
            </div>
        </section>
    </>
  )
}

export default OrgApplicationContainer