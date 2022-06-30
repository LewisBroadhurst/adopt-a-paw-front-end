import ApplicationContainer from "./PostOrgUser Container/ApplicationAdmin/ApplicationContainer/ApplicationContainer.js";
import OrgAdminCont from "./PostOrgUser Container/OrgAdmin/OrgList.js";
import PostAdminCont from "./PostOrgUser Container/PostAdmin/PostAdminCont.js";
import UserAdminCont from "./PostOrgUser Container/CustomerAdmin/CustomerList.js";

import "./AdminLandPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getCustomers, getOrganisations } from "../../API.js";
import ApplicationList from "./PostOrgUser Container/ApplicationAdmin/ApplicationList.js";


const AdminLandPage = () => {

  const [organisations, setOrganisations] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [applications, setApplications] = useState([])

  useEffect(() => {
    getOrganisations(setOrganisations);
  }, []);

  useEffect(() => {
    getCustomers(setCustomers);
  }, []);

  return (
    <>
        <main id="AdminLandPage">

          <h2 className="AdminWelcome">Welcome, Admin User <FontAwesomeIcon icon={faPaw} /></h2>

          <div className="Split-Admin-AppPost">
            <ApplicationList applications={applications}/>
            <PostAdminCont />
          </div>

          <div className="Split-Admin-UserOrg">
            <UserAdminCont customers={customers}/>
            <OrgAdminCont organisations={organisations} />
          </div>
 
        </main>
    </>
  )
}

export default AdminLandPage