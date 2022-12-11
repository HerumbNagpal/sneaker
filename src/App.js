import Head from './components/Head';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Jordans from './components/Jordan';
import AirDunk from './components/AirDunk';
import AirForce from './components/AirForce';
import Chuck from './components/Chuck';
import Yeezy from './components/Yeezy';

function App(){
  return (
    <>

    <Router>
      
    <Switch>

          <Route path='/jordans'>
            <Jordans/>
          </Route>
          <Route path='/airforce'>
            <AirForce/>
          </Route>
          <Route path='/chucktaylor'>
            <Chuck/>
          </Route>
          <Route path='/yeezy'>
            <Yeezy/>
          </Route>

          <Route path='/airdunk'>
            <AirDunk/>
          </Route> 
          <Route path='/'>
            <Head />
          </Route>

          
    </Switch>

    
    </Router>

    </>
  )
}

export default App;