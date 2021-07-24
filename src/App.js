import logo from './logo.svg';
import Dashboard from "./Dashboard";
import {
  Switch,
  Route,
  Router
} from "react-router-dom";
import { CSSTransition } from 'react-transition-group'
import Account from './components/account/Account'

function App() {

  let navs = [
    { path: '/account/', component: Account, animationClassName: 'page-1',  exact:true},
    { path: '/dashboard/', component: Dashboard, animationClassName: 'page-1', exact:false },
  ]
  
  
  return (
    <>
       {
        navs.map((nav, index) => {

          return (
            <Route key={index + 1} exact={nav.exact} path={nav.path}>
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