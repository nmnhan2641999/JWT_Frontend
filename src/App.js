import './App.scss'
import Nav from './component/Navigation/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Login from './component/Login/Login';
import Register from './component/Register/Register';



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
        <Route path="/register">
          <Register />
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
