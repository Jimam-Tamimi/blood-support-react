import { useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './page-transitions.css'
import Home from './components/Home'
import Request from './components/Request'
import HelpPeople from './components/HelpPeople'
import MakeRequest from './components/MakeRequest'
import CurrentBloodDonations from './components/CurrentBloodDonations'
import YourBloodRequests from './components/YourBloodRequests'
import YourDonorRequests from './components/YourDonorRequests'
import Messages from './components/Messages'
import Notifications from './components/Notifications'
import Favorites from './components/Favorites'
import MyProfile from './components/MyProfile'
import Profile from './components/Profile'
import Privacy from './components/SettingsPrivacy'
import SettingsEditAccount from './components/SettingsEditAccount'
import SettingsEditProfile from './components/SettingsEditProfile'


function Contents(props) {

  let navs = [
    { path: '/', component: Home, animationClassName: 'page-1' },
    { path: '/request/:slug/:requestid', component: Request, animationClassName: 'page-2' },
    { path: '/help-people', component: HelpPeople, animationClassName: 'page-3' },
    { path: '/make-request', component: MakeRequest, animationClassName: 'page-4' },
    { path: '/current-blood-donations', component: CurrentBloodDonations, animationClassName: 'page-5' },
    { path: '/your-blood-requests', component: YourBloodRequests, animationClassName: 'page-1' },
    { path: '/your-donor-requests', component: YourDonorRequests, animationClassName: 'page-2' },
    { path: '/messages', component: Messages, animationClassName: 'page-3' },
    { path: '/messages/:messageid', component: Messages, animationClassName:'page-3'},
    { path: '/notifications', component: Notifications, animationClassName: 'page-4' },
    { path: '/favorites', component: Favorites, animationClassName: 'page-5' },
    { path: '/profile', component: MyProfile, animationClassName: 'page-1' },
    { path: '/profile/:profileid', component: Profile, animationClassName: 'page-2' },
    { path: '/settings/privacy', component: Privacy, animationClassName: 'page-3' },
    { path: '/settings/edit-account', component: SettingsEditAccount, animationClassName: 'page-4' },
    { path: '/settings/edit-profile', component: SettingsEditProfile, animationClassName: 'page-5' },


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
  )
}


export default Contents