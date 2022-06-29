import ApplicationAdminCont from "./PostOrgUser Container/ApplicationAdmin/ApplicationAdminCont"
import OrgAdminCont from "./PostOrgUser Container/OrgAdmin/OrgAdminCont"
import PostAdminCont from "./PostOrgUser Container/PostAdmin/PostAdminCont"


const AdminLandPage = () => {
  return (
    <>
        <main>
            <PostAdminCont />
            <ApplicationAdminCont />
            <OrgAdminCont />
        </main>
    </>
  )
}

export default AdminLandPage