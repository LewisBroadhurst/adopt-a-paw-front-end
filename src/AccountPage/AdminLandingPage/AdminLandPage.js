import ApplicationAdminCont from "./PostOrgUser Container/ApplicationAdmin/ApplicationAdminCont.js";
import OrgAdminCont from "./PostOrgUser Container/OrgAdmin/OrgAdminCont.js";
import PostAdminCont from "./PostOrgUser Container/PostAdmin/PostAdminCont.js";
import UserAdminCont from "./PostOrgUser Container/UserAdmin/UserAdminCont.js";

import "./AdminLandPageBasic.css";
import "./AdminLandPageTablet+.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const AdminLandPage = () => {
  return (
    <>
        <main id="AdminLandPage">

          <h2 className="AdminWelcome">Welcome, Admin User <FontAwesomeIcon icon={faPaw} /></h2>

          <div className="Split-Admin-AppPost">
            <ApplicationAdminCont />
            <PostAdminCont />
          </div>

          <div className="Split-Admin-UserOrg">
            <UserAdminCont />
            <OrgAdminCont />
          </div>
 
        </main>
    </>
  )
}

export default AdminLandPage