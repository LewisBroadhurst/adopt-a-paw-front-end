import OrgContainer from "./OrgContainter/OrgContainer";

const OrgList = ( {organisations, setOrganisations} ) => {


  return (
    <>
        <section className='POU-Container'>

            <h3>Organisations</h3>

            {
                organisations.map( (org, index) => {

                    return <OrgContainer key={index} 
                                        name={org.name} 
                                        id={org.id}
                                        slogan={org.slogan}
                                        setOrganisations={setOrganisations}
                                         />;
                    
                })
            }

            <span className="LAP-Admin">All Organisations</span>

        </section>
    
    </>
  )
}

export default OrgList