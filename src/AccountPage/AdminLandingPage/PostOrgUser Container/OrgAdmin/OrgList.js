import OrgContainer from "./OrgContainter/OrgContainer";

const OrgList = ( {organisations} ) => {


  return (
    <>
        <section className='POU-Container'>

            <h3>Organisations</h3>

            {
                organisations.map( (org, index) => {

                    return <OrgContainer key={index} name={org.name} id={org.id} />;
                    
                })
            }

            <span className="LAP-Admin">All Organisations</span>

        </section>
    
    </>
  )
}

export default OrgList