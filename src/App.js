import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./HomePage/Home"
import OrganisationsPage from "./OrganisationsPage/OrganisationsPage";
import AdoptPage from "./Components/Pages/AdoptPage";
import AccountPage from "./AccountPage/AccountPage";
import NewsPage from "./NewsPage/NewsPage";
import AdvicePage from "./AdvicePage/AdvicePage";
import SuccessStoriesPage from "./SuccessStoriesPage/SuccessStoriesPage"
import GetInvolvedPage from "./GetInvolvedPage/GetInvolvedPage";
import AdminLandPage from "./AccountPage/AdminLandingPage/AdminLandPage";
import DonatePage from "./DonatePage/DonatePage";
import AnimalPage from "./Components/Pages/AnimalPage";
import CreateAccPage from "./CreateAccountPage/CreateAccPage";
import UserLandPage from "./AccountPage/UserLandingPage/UserLandPage";
import AApplicationsPage from "./AccountPage/AdminLandingPage/LinkedPages/AdminApplicationsPage/AApplicationsPage";
import AAnimalsPage from "./AccountPage/AdminLandingPage/LinkedPages/AdminAnimalsPage/AAnimalsPage";
import ACustomersPage from "./AccountPage/AdminLandingPage/LinkedPages/AdminCustomersPage/ACustomersPage";
import AOrganisationsPage from "./AccountPage/AdminLandingPage/LinkedPages/AdminOrganisationsPage/AOrganisationsPage"
import OrganisationLandingPage from "./LoginOrganisationPage/OrganisationLandingPage";
import OrgAnimalsPage from "./LoginOrganisationPage/LinkedPages/OrgAnimals/OrgAnimalsPage";
import OrgApplicationsPage from "./LoginOrganisationPage/LinkedPages/OrgApplications/OrgApplicationsPage";
import DirectionsComponent from "./DirectionsComponent/DirectionsComponent"
import RoutePlanner from "./LoginOrganisationPage/LinkedPages/RoutePlanner/RoutePlanner";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path ='/' exact element={<Home />}/>
            <Route path='/advice' exact element={<AdvicePage />}/>
            <Route path='/successstories' exact element={<SuccessStoriesPage />}/>
            <Route path ='/organisations' exact element={<OrganisationsPage />}/>
            <Route path='/adopt' exact element={<AdoptPage />} />
            <Route path='/adopt/:id' exact element={<AnimalPage />}/>
            <Route path='/getinvolved' exact element={<GetInvolvedPage />}/>
            <Route path ='/news' exact element={<NewsPage />}/>
            <Route path="/account" exact element={<AccountPage />} />
            <Route path="/account/admin" exact element={<AdminLandPage />} />
            <Route path="/donate" exact element={<DonatePage />} />
            <Route path="/account/createAccount" exact element={<CreateAccPage />} />
            <Route path="/account/userLandpage" exact element={<UserLandPage />} />
            <Route path="/account/admin/organisations" exact element={<AOrganisationsPage />} />
            <Route path="/account/admin/applications" exact element={<AApplicationsPage />} />
            <Route path="/account/admin/animals" exact element={<AAnimalsPage />} />
            <Route path="/account/admin/customers" exact element={<ACustomersPage />} />
            <Route path="/account/organisation" exact element={<OrganisationLandingPage />} />
            <Route path="/account/organisation/animals" exact element={<OrgAnimalsPage />} />
            <Route path="/account/organisation/applications" exact element={<OrgApplicationsPage />} />
            <Route path="/account/organisation/routePlanner" exact element={<RoutePlanner />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;

