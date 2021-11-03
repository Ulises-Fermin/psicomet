import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/NavBar/Navbar';
import CreateAccount from './Pages/CreateAccount/CreateAccount';
import TypeAccount from './Pages/TypeAccount/TypeAccount';

function App() {
  return (
    <Router>
    <Navbar/>
        <Route path="/Home">
          <Home/>
        </Route>  
      <Switch>
        <Route path="/TypeAccount">
          <TypeAccount/>
        </Route>
        <Route path="/CreateAccount">
          <CreateAccount/>
        </Route>
        <Route path="/Example">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
