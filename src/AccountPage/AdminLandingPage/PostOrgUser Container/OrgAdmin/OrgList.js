import "./OrgList.css";
import OrgContainer from "./OrgContainter/OrgContainer";

const OrgList = ( {organisations} ) => {

    // const reducedOrgList = () => {
    //     let startSplice = organisations.length - 3;

    //     return organisations.splice(startSplice, 3);
    // }

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