import './App.scss'
// import Nav from './component/Navigation/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './component/Login/Login';
import Register from './component/Register/Register';
//import react toastify 
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";





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
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    {/* Same as */}
    <ToastContainer />



  </Router>
  );
}

export default App;
