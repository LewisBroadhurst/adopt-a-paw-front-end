import "./OrgHeader.css";
import { Link } from "react-router-dom";

const OrgHeader = () => {
  return (
    <>

        <header className="orgHeader__container">
            <h2>Adopt A Paw</h2>

            <nav>
                <ul>
                  <li><Link to="/account/organisation/">Home</Link></li>
                  <li><Link to="/account/organisation/animals">Animals</Link></li>
                  <li><Link to="/account/organisation/applications">Applications</Link></li>
                  <li><Link to="/account/organisation/routePlanner">Route Planner</Link></li>
                </ul>
            </nav>

            <span><Link to="/">Log Out</Link></span>
        </header>
    </>
  )
}

export default OrgHeader