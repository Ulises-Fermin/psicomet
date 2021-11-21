// Listos todos los diagramas segun lo conversado. Estuve viendo y me parece que vamos fino. El documento casi listo.
// La proxima entrega aporto mas en el codigo aprovechando que tengo la arquitectura fresca.
// Pienso que podemos mejorar un poco en el diseno. Hice un curso de 4 horas sobre algunos para implementarlos en react.

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
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import RecoverPassword from "./Pages/RecoverPassword/RecoverPassword";
import Profile_p from "./Pages/Profile/Profile_p";
import Profile_e from "./Pages/Profile/Profile_e";
import Quest from "./Pages/Quest/Quest";
import Admi from "./Pages/Admi/Admi";
import Waiting from "./Pages/Status/Waiting";
import Modify_p from "./Pages/Modify_p/Modify_p";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Navbar />
        <Route exact path="/">
          <Home />
          <Services />
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
        </Switch>
        <Footer />
      </Router>
    </UserContextProvider>
  );
}

export default App;
