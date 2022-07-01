import ApplicationContainer from "./ApplicationContainer/ApplicationContainer";

const ApplicationList = ({applications, setApplications}) => {

  return (
    <>
        <section className='POU-Container'>

            <h3>Adoption Applications</h3>

            {
                applications.length > 0 ?
                
                  applications.map( (app, index) => {
                      return <ApplicationContainer key={index} 
                                                  id={app.id} 
                                                  firstName={app.customer.firstName}
                                                  lastName={app.customer.lastName}
                                                  animalName={app.animal.name} 
                                                  animalLocation={app.animal.location} 
                                                  applicationStatus={app.application_type_id}
                                                  setApplications={setApplications}/>
                  })
                  : <section className="POU-container">
                      <p>You have actioned all applications, great work!</p>
                  </section>
            }

            <span className="LAP-Admin">All Adoption Applications</span>

        </section>
    </>
  )
}

export default ApplicationList