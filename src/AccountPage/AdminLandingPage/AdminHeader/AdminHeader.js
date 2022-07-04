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
                    <li>Home</li>
                    <li>Applications</li>
                    <li>Animals</li>
                    <li>Customers</li>
                    <li>Organisations</li>
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