import "./POUcontBasic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faX } from "@fortawesome/free-solid-svg-icons";

const PostOrgUserCont = () => {
  return (
    <>
        <section className='POU-Container'>

            <h3>Latest Adoption Posts</h3>

            <section className='Post-Admin-Cont'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at libero ultrices, condimentum tellus sit amet, tempus metus. Aenean id tortor at nisi consequat facilisis.</p>

                <span>Organisation Name</span>

                <span>Posted: 11/22/3333</span>

                <div className='Approve-Post-Admin'>
                    <button type='button' className="Accept-Post">Accept <FontAwesomeIcon icon={faPaw} /></button>
                    <button type='button' className="Decline-Post">Decline ❌</button>
                </div>
            </section>

        </section>
    
    </>
  )
}

export default PostOrgUserCont