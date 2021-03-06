import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Pages/Home/Home";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import CreateAccountP from "./Pages/CreateAccountP/CreateAccountP";
import TypeAccount from "./Pages/TypeAccount/TypeAccount";
import LogIn from "./Pages/LogIn/LogIn";
import UserContextProvider from "./Context/UserContext";
import User from "./Pages/User/User";
import Contact from "./Pages/Contact/Contact";
import Psychologist from "./Pages/Psychologist/Psychologist";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Price from "./Pages/Price/Price";
import RecoverPassword from "./Pages/RecoverPassword/RecoverPassword";
import Profile_p from "./Pages/Profile/Profile_p";
import Profile_e from "./Pages/Profile/Profile_e";
import Profile_e_p from "./Pages/Profile/Profile_e_p";
import Quest from "./Pages/Quest/Quest";
import Admi from "./Pages/Admi/Admi";
import Waiting from "./Pages/Status/Waiting";
import Modify_p from "./Pages/Modify_p/Modify_p";
import Modify_pa from "./Pages/Modify_pa/Modify_pa";
import Curriculum from "./Pages/Curriculum/Curriculum";
import Denegate from "./Pages/Status/Denegate";
import Files from "./Pages/Files/Files";
import ScrollToTop from "./ScrollToTop";
import React, { useState } from "react";
import Appointments from "./Pages/Appointments/Appointments";
import CreateAppointment from "./Pages/CreateAppointment/CreateAppointment";
import Histories from "./Pages/Histories/Histories";
import AppointmentsPacient from "./Pages/Appointments/AppointmentsPacient";
import Ranking from "./Pages/Ranking/Ranking";
import Payment from "./Pages/Payment/Payment";
import Chat from "./Pages/Chats/Chat";
import ChatPsycho from "./Pages/Chats/ChatPsycho"

function App() {
  // Funcion para el PayPal
  const [checkout, setCheckOut] = useState(false);

  return (

    <UserContextProvider>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/TypeAccount">
              <TypeAccount />
            </Route>
            <Route exact path="/CreateAccount">
              <CreateAccount />
            </Route>
            <Route exact path="/CreateAccount_p">
              <CreateAccountP />
            </Route>
            <Route exact path="/User">
              <User />
            </Route>
            <Route exact path="/Psychologist">
              <Psychologist />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/LogIn">
              <LogIn />
            </Route>
            <Route exact path="/Testimonials">
              <Testimonials />
            </Route>
            <Route exact path="/Price">
              <Price />
            </Route>
            <Route exact path="/RecoverPassword">
              <RecoverPassword />
            </Route>
            <Route exact path="/Profile_p">
              <Profile_p />
            </Route>
            <Route exact path="/Profile_e">
              <Profile_e />
            </Route>
            <Route exact path="/Quest">
              <Quest />
            </Route>
            <Route exact path="/Admi">
              <Admi />
            </Route>
            <Route exact path="/Waiting">
              <Waiting />
            </Route>
            <Route exact path="/Modify_p">
              <Modify_p />
            </Route>
            <Route exact path="/Modify_pa">
              <Modify_pa />
            </Route>
            <Route exact path="/Profile_e_p">
              <Profile_e_p />
            </Route>
            <Route exact path="/Curriculum">
              <Curriculum />
            </Route>
            <Route exact path="/Denegate">
              <Denegate />
            </Route>
            <Route exact path="/Files">
              <Files />
            </Route>
            <Route exact path="/Appointments">
              <Appointments />
            </Route>
            <Route exact path="/CreateAppointment">
              <CreateAppointment />
            </Route>
            <Route exact path="/Histories">
              <Histories />
            </Route>
            <Route exact path="/AppointmentsPacient">
              <AppointmentsPacient />
            </Route>
            <Route exact path="/Payment">
              <Payment />
            </Route>
            <Route exact path="/Chat/:idPsycho">
              <Chat />
            </Route>
            <Route exact path="/ChatPsycho/:idPacient">
              <ChatPsycho />
            </Route>
            <Route exact path="/Ranking">
              <Ranking />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </UserContextProvider>
  );
}

export default App;
