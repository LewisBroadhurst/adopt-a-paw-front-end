import { Link } from "react-router-dom";
import "./AdminHeader.css";

const AdminHeader = () => {
  return (
    <>
        <div className="ah__container">
            <section className="ah__titleLogo">
                <h1>Adopt A Paw</h1>
            </section>

            <nav className="ah__navBar">
                <ul>
                    <li><Link to="/account/admin/">Home</Link></li>
                    <li><Link to="/account/admin/applications">Applications</Link></li>
                    <li><Link to="/account/admin/animals">Animals</Link></li>
                    <li><Link to="/account/admin/customers">Customers</Link></li>
                    <li><Link to="/account/admin/organisations">Organisations</Link></li>
                </ul>
            </nav>

            <section className="ah__logOut">
                <span><Link to="/">Log Out</Link></span>
            </section>
        </div>
    </>
  )
}

export default AdminHeader