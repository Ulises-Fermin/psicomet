import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
    <ul>
      <li>
        <Link to="/Home">Home Page</Link>
      </li>
      <li>
        <Link to="/Example">Example Page</Link>
      </li>
    </ul>
      <Switch>
        <Route path="/Home">
          <Home/>
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
