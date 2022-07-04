import "./App.css"
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
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
import AApplicationsPage from "./AccountPage/AdminLandingPage/AdminApplicationsPage/AApplicationsPage";
import AAnimalsPage from "./AccountPage/AdminLandingPage/AdminAnimalsPage/AAnimalsPage";
import ACustomersPage from "./AccountPage/AdminLandingPage/AdminCustomersPage/ACustomersPage";

function App() {
  return (
    <>
      <Router>
        <Header />

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
          </Routes>
          
        <Footer />
      </Router>

      <Router>
        <Routes>
          <Route path="/account/admin/applications" exact element={<AApplicationsPage />} />
          <Route path="/account/admin/animals" exact element={<AAnimalsPage />} />
          <Route path="/account/admin/customers" exact element={<ACustomersPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

