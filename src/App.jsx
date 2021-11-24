import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import CreateAccountP from "./Pages/CreateAccountP/CreateAccountP";
import TypeAccount from "./Pages/TypeAccount/TypeAccount";
import LogIn from "./Pages/LogIn/LogIn";
import UserContextProvider from "./Context/UserContext";
import User from "./Pages/User/User";
import Contact from "./Pages/Contact/Contact";
import Psychologist from "./Pages/Psychologist/Psychologist";
import Chats from "./Pages/Chats/Chats";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Footer from "./Components/Footer";
import Price from "./Pages/Price/Price";
import Services from "./Components/Services";
import RecoverPassword from "./Pages/RecoverPassword/RecoverPassword";
import Profile_p from "./Pages/Profile/Profile_p";
import Profile_e from "./Pages/Profile/Profile_e";
import Profile_e_p from "./Pages/Profile/Profile_e_p";
import Quest from "./Pages/Quest/Quest";
import Admi from "./Pages/Admi/Admi";
import Waiting from "./Pages/Status/Waiting";
import Modify_p from "./Pages/Modify_p/Modify_p";
import Modify_pa from "./Pages/Modify_pa/Modify_pa";
import ScrollToTop from "./ScrollToTop";
import Sidebar from "./Components/SideBar";
import React, { useState } from "react";
import PayPal from "./Components/PayPal.js";

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
            <Services />

            {/* PAYPAL. Hay que moverlo de aquí cuando lo de las citas esté listo */}
            {/* Si checkout es verdadero, renderizamos PayPal. Si no, aparece un boton que al presionarlo se hace verdadero. */}
            {checkout ? (
            <PayPal />
          ) : (
            <button
              onClick={() => {
                setCheckOut(true);
              }}
            >
              Checkout
            </button>
          )}
          </Route>
          <Switch>
            <Route exact path="/Home">
              <Home />
              <Services />
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
            <Route exact path="/Chats">
              <Chats />
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
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </UserContextProvider>
  );
}

export default App;
