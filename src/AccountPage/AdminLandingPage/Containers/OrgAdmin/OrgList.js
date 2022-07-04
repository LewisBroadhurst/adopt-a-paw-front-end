import OrgContainer from "./OrgContainter/OrgContainer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

const OrgList = ( {organisations, setOrganisations} ) => {


  return (
    <>
        <section className='POU-Container'>

          <div className="pou__headerElementCont">
            <h3>Organisations</h3>

            <span className="LAP-Admin"><Link to="/account/admin/organisations">All Customers <FontAwesomeIcon icon={faSquareArrowUpRight}/></Link></span>
          </div>

          <div className="pou__cardContainers pou__orgCardContainer">
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
          </div>
            
        </section>
    
    </>
  )
}

export default OrgList