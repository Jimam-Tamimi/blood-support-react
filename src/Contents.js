import { useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './page-transitions.css'
import Home from './components/dashboard/Home'
import Request from './components/dashboard/Request'
import HelpPeople from './components/dashboard/HelpPeople'
import MakeRequest from './components/dashboard/MakeRequest'
import CurrentBloodDonations from './components/dashboard/CurrentBloodDonations'
import YourBloodRequests from './components/dashboard/YourBloodRequests'
import YourDonorRequests from './components/dashboard/YourDonorRequests'
import Messages from './components/dashboard/Messages'
import Notifications from './components/dashboard/Notifications'
import Favorites from './components/dashboard/Favorites'
import MyProfile from './components/dashboard/MyProfile'
import Profile from './components/dashboard/Profile'
import Privacy from './components/dashboard/SettingsPrivacy'
import SettingsEditAccount from './components/dashboard/SettingsEditAccount'
import SettingsEditProfile from './components/dashboard/SettingsEditProfile'


function Contents(props) {

  let navs = [
    { path: '/dashboard/', component: Home, animationClassName: 'page-1' },
    { path: '/dashboard/request/:slug/:requestid', component: Request, animationClassName: 'page-2' },
    { path: '/dashboard/help-people', component: HelpPeople, animationClassName: 'page-3' },
    { path: '/dashboard/make-request', component: MakeRequest, animationClassName: 'page-4' },
    { path: '/dashboard/current-blood-donations', component: CurrentBloodDonations, animationClassName: 'page-5' },
    { path: '/dashboard/your-blood-requests', component: YourBloodRequests, animationClassName: 'page-1' },
    { path: '/dashboard/your-donor-requests', component: YourDonorRequests, animationClassName: 'page-2' },
    { path: '/dashboard/messages', component: Messages, animationClassName: 'page-3' },
    { path: '/dashboard/messages/:messageid', component: Messages, animationClassName:'page-3'},
    { path: '/dashboard/notifications', component: Notifications, animationClassName: 'page-4' },
    { path: '/dashboard/favorites', component: Favorites, animationClassName: 'page-5' },
    { path: '/dashboard/profile', component: MyProfile, animationClassName: 'page-1' },
    { path: '/dashboard/profile/:profileid', component: Profile, animationClassName: 'page-2' },
    { path: '/dashboard/settings/privacy', component: Privacy, animationClassName: 'page-3' },
    { path: '/dashboard/settings/edit-account', component: SettingsEditAccount, animationClassName: 'page-4' },
    { path: '/dashboard/settings/edit-profile', component: SettingsEditProfile, animationClassName: 'page-5' },

  ]



  return (
    <>

      {
        navs.map((nav, index) => {

          return (
            <Route key={index + 1} exact  path={nav.path}>
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