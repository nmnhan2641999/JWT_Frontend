import './App.scss'
import Login from './component/Login/Login';
import Nav from './component/Navigation/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";



function App() {
  return (<Router>
    <div className='app-container'>
      {/* <Nav /> */}
      <Switch>
        <Route path="/news">
          new
        </Route>
        <Route path="/about">
          abo ut
        </Route>
        <Route path="/contact">
          contact
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/" exact>
          home
        </Route>
        <Route path="*">404 font found</Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
