import logo from './logo.svg';
import Dashboard from "./Dashboard";
import {
  Switch,
  Route,
  Router
} from "react-router-dom";
import { CSSTransition } from 'react-transition-group'
import LoginSignup from './components/LoginSignup'

function App() {
  return (
    <>

      <Dashboard />
      
    </>
  );
}

export default App;