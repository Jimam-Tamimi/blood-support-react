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

  let navs = [
    { path: '', component: Dashboard, animationClassName: 'page-1' },
  ]
  
  
  return (
    <>
       {
        navs.map((nav, index) => {

          return (
            <Route key={index + 1} exact path={nav.path}>
              {({ match }) => (
                <>
                  <CSSTransition in={match != null} timeout={600} classNames={nav.animationClassName} unmountOnExit>


                    <div className={nav.animationClassName + ' ' + nav.animationClassName + '-enter-done'} >
                          < nav.component  /> 
                    </div>

                  </CSSTransition>

                </>
              )}
            </Route>
          )
        })
      }
      
    </>
  );
}

export default App;