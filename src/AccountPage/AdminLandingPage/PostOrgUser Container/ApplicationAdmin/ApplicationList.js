import ApplicationContainer from "./ApplicationContainer/ApplicationContainer";
import "./ApplicationList.css";

const ApplicationList = ({applications}) => {

  return (
    <>
        <section className='POU-Container'>

            <h3>Latest Adoption Applications</h3>

            {
                applications.map( (app, index) => {
                    return <ApplicationContainer key={index} animalName={app.animal.name} animalLocation={app.animal.location}/>
                })
            }

            <span className="LAP-Admin">All Adoption Applications</span>

        </section>
    </>
  )
}

export default ApplicationList