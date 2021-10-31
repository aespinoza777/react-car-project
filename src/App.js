
import './App.css';
import NavBar from "./NavBar"
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom"
import Home from "./Home"
import CarBrands from "./CarBrands"
import Cars from "./Cars"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/> 
          <Route path="/car_brands" exact component={CarBrands}/>
          <Route path="/cars" exact component={Cars}/>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
