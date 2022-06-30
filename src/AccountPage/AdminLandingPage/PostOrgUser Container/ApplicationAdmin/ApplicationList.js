import ApplicationContainer from "./ApplicationContainer/ApplicationContainer";
import "./ApplicationList.css";

const ApplicationList = ({applications, setApplications}) => {

  return (
    <>
        <section className='POU-Container'>

            <h3>Latest Adoption Applications</h3>

            {
                applications.map( (app, index) => {
                    return <ApplicationContainer key={index} 
                                                id={app.id} 
                                                animalName={app.animal.name} 
                                                animalLocation={app.animal.location} 
                                                applicationStatus={app.application_type_id}
                                                setApplications={setApplications}/>
                })
            }

            <span className="LAP-Admin">All Adoption Applications</span>

        </section>
    </>
  )
}

export default ApplicationList