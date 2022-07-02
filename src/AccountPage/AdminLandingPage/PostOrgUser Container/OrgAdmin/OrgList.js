import OrgContainer from "./OrgContainter/OrgContainer";

const OrgList = ( {organisations, setOrganisations} ) => {


  return (
    <>
        <section className='POU-Container'>

            <h3>Organisations</h3>

            {
                organisations.splice(0, 3).map( (org, index) => {

                    return <OrgContainer key={index} 
                                        name={org.name} 
                                        id={org.id}
                                        setOrganisations={setOrganisations} />;
                    
                })
            }

            <span className="LAP-Admin">All Organisations</span>

        </section>
    
    </>
  )
}

export default OrgList