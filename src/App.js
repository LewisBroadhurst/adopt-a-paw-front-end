import "./App.css"
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./HomePage/Home"
import OrganisationsPage from "./OrganisationsPage/OrganisationsPage";
import AdoptPage from "./Components/Pages/AdoptPage";
import AccountPage from "./AccountPage/AccountPage";

function App() {
  return (
    <>
      <Router>
        <Header />

          <Routes>
            <Route path ='/' exact element={<Home />}/>
            <Route path ='/organisations' exact element={<OrganisationsPage />}/>
            <Route path='/adopt' exact element={<AdoptPage />}/>
            <Route path="/account" exact element={<AccountPage />} />
          </Routes>
          
        <Footer />
      </Router>
    </>
  );
}

export default App;

