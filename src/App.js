import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>

        </Switch>
    </Router>
    </div>
  );
}

export default App;
