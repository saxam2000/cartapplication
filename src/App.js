import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar";
import Store from "./Store/Store"
import {Provider} from "react-redux";
import Home from "./Components/Home"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Provider store={Store}>

      <NavBar></NavBar>
      {/* <Home></Home> */}
      <Router>
        <Switch>

        <Route exact path='/home' component={Home}/>
        {/* <Route path='/Products'  component={}> </Route> */}
        {/* <Route path='/Cart' component={}> </Route> */}
        {/* <Route redirect to ="/"> </Route> */}
        </Switch>


      </Router>
      </Provider>
      <h1>hello from react</h1>
    </div>
  );
}

export default App;
