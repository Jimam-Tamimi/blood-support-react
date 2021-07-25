import React, { useEffect, useRef, useState } from 'react'
import './css/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faPeopleCarry, faHandHoldingMedical, faMarker, faRunning, faChild, faBookMedical, faComments, faBell, faUsers, faUserAlt, faCogs, faAngleLeft, faSitemap, faBars, faSearch, faCommentDots, faSignOutAlt, faExpandArrowsAlt, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons'

import {
    Link,
    NavLink
} from "react-router-dom";
import Contents from './Contents'
import { Breadcrumb } from 'react-bootstrap';

function Dashboard() {

    // All Refs 
    const slideBar = useRef(null)
    const contentWraper = useRef(null)
    const slidebarHiddenOption = useRef(null)
    const messageDropdown = useRef(null)
    const notificationDropdown = useRef(null)

    // all states
    const [hideFooter, setHideFooter] = useState(false)


    useEffect(() => {
        window.addEventListener('resize', () => {

            if (window.innerWidth <= 745) {
                // console.log(slideBar);
                slideBar.current.classList.add('dashboard-slidebar-hidden')
            }
        })

        if (window.innerWidth <= 745) {
            // console.log(slideBar);
            slideBar.current.classList.add('dashboard-slidebar-hidden')
        }

        Array.from(document.getElementsByClassName('dashboard-parent-dropdown')).forEach(element => {
            element.click()
        })
    }, [])


    // opening and close slidebar
    function handleSlideBar(e) {
        slideBar.current.classList.toggle('dashboard-slidebar-hidden')
        contentWraper.current.classList.toggle('dashboard-content-wraper-full-width')
    }
    function handleSlideBarMobile(e) {
        if (window.innerWidth <= 745) {

            slideBar.current.classList.add('dashboard-slidebar-hidden')
        }
    }

    // nav items open and close 
    function showOptions(event) {
        let dropDownElm = event.currentTarget
        console.log(dropDownElm);

        let dropDownIcon = dropDownElm.querySelector('.dashboard-dropdown-icon')
        console.log(dropDownIcon);
        console.log(dropDownElm.parentElement.style.height)
        if (dropDownElm.parentElement.style.height == '50px') {
            dropDownElm.parentElement.style.height = (dropDownElm.parentElement.childElementCount - 1) * 40 + 50 + 'px'
            dropDownIcon.style.transform = 'rotateZ(270deg)'
            let dropDownItems = Array.from(dropDownElm.parentElement.children)
            for (let i = 0; i < dropDownItems.length; i++) {
                if (i == 0) {
                    continue
                }
                const element = dropDownItems[i];
                element.style.opacity = '1'
                element.style.transform = 'scale(1)'
            }
        }
        else {
            dropDownIcon.style.transform = 'rotateZ(360deg)'
            dropDownElm.parentElement.style.height = '50px'
            let dropDownItems = Array.from(dropDownElm.parentElement.children)
            for (let i = 0; i < dropDownItems.length; i++) {
                if (i == 0) {
                    continue
                }
                const element = dropDownItems[i];
                element.style.opacity = '0'
                element.style.transform = 'scale(0)'
            }
        }

    }

    // message and notification dropdown 
    function handleMsgNotDropDown(e, type) {
        if (type === 'message') {
            messageDropdown.current.classList.toggle('dashboard-show-dropdown')
            if (notificationDropdown.current.classList.contains('dashboard-show-dropdown')) {
                notificationDropdown.current.classList.remove('dashboard-show-dropdown')
            }

        }
        else if (type === 'notification') {
            notificationDropdown.current.classList.toggle('dashboard-show-dropdown')
            if (messageDropdown.current.classList.contains('dashboard-show-dropdown')) {
                messageDropdown.current.classList.remove('dashboard-show-dropdown')
            }
        }
    }



    let fullScreen = false


    /* Get the documentElement (<html>) to display the page in fullscreen */
    let elem = document.documentElement;
    function handleFullScreen(e) {
        if (!fullScreen) {
            openFullscreen()

            e.currentTarget.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="compress-arrows-alt" class="svg-inline--fa fa-compress-arrows-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M200 288H88c-21.4 0-32.1 25.8-17 41l32.9 31-99.2 99.3c-6.2 6.2-6.2 16.4 0 22.6l25.4 25.4c6.2 6.2 16.4 6.2 22.6 0L152 408l31.1 33c15.1 15.1 40.9 4.4 40.9-17V312c0-13.3-10.7-24-24-24zm112-64h112c21.4 0 32.1-25.9 17-41l-33-31 99.3-99.3c6.2-6.2 6.2-16.4 0-22.6L481.9 4.7c-6.2-6.2-16.4-6.2-22.6 0L360 104l-31.1-33C313.8 55.9 288 66.6 288 88v112c0 13.3 10.7 24 24 24zm96 136l33-31.1c15.1-15.1 4.4-40.9-17-40.9H312c-13.3 0-24 10.7-24 24v112c0 21.4 25.9 32.1 41 17l31-32.9 99.3 99.3c6.2 6.2 16.4 6.2 22.6 0l25.4-25.4c6.2-6.2 6.2-16.4 0-22.6L408 360zM183 71.1L152 104 52.7 4.7c-6.2-6.2-16.4-6.2-22.6 0L4.7 30.1c-6.2 6.2-6.2 16.4 0 22.6L104 152l-33 31.1C55.9 198.2 66.6 224 88 224h112c13.3 0 24-10.7 24-24V88c0-21.3-25.9-32-41-16.9z"></path></svg>`
        }
        else {
            closeFullscreen()
            e.currentTarget.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="expand-arrows-alt" class="svg-inline--fa fa-expand-arrows-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z"></path></svg>`

        }
    }
    /* View in fullscreen */
    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
            fullScreen = true
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
            fullScreen = true
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
            fullScreen = true
        }
    }
    /* Close fullscreen */
    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            fullScreen = false

        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
            fullScreen = false
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
            fullScreen = false
        }
    }


    let navs = [
        { path: '/dashboard/', type: 'link', iconComponent: faTachometerAlt, name: 'Dashboard' },
        { type: 'request', iconComponent: faHandHoldingMedical, name: 'My Requests', requests: [{ id: 2123, bloodGroup: 'O+' }, { id: 3423, bloodGroup: 'AB+' }, { id: 343423, bloodGroup: 'AB+' }, { id: 342233, bloodGroup: 'AB+' }, { id: 34423, bloodGroup: 'AB+' }, { id: 34233, bloodGroup: 'AB+' }] },


        { path: '/dashboard/help-people/', type: 'link', iconComponent: faPeopleCarry, name: 'Help People' },
        { path: '/dashboard/make-request/', type: 'link', iconComponent: faTachometerAlt, name: 'Make A Request' },
        { path: '/dashboard/current-blood-donations/', type: 'link', iconComponent: faRunning, name: 'Current Blood Donations' },
        { path: '/dashboard/your-blood-requests/', type: 'link', iconComponent: faChild, name: 'Your Blood Requests' },
        { path: '/dashboard/your-donor-requests/', type: 'link', iconComponent: faBookMedical, name: 'Your Donor Requests' },

        { type: 'nav-header', name: 'Contact Options' },

        { path: '/dashboard/messages/', type: 'link', iconComponent: faComments, name: 'Messages' },
        { path: '/dashboard/notifications/', type: 'link', iconComponent: faBell, name: 'Notifications' },
        { path: '/dashboard/favorites/', type: 'link', iconComponent: faUsers, name: 'Favorites' },

        { type: 'nav-header', name: 'Profile Options' },

        { path: '/dashboard/profile/', type: 'link', iconComponent: faUserAlt, name: 'My Profile' },

        { type: 'nav-header', name: 'Settings' },

        {
            type: 'settings', iconComponent: faCogs, name: 'My Requests', options: [
                { path: '/dashboard/settings/privacy/', name: 'Privacy' },
                { path: '/dashboard/settings/edit-account/', name: 'Edit Account' },
                { path: '/dashboard/settings/edit-profile/', name: 'Edit Profile' }
            ]
        },



    ]


    return (
        <>
            <div style={{Index: '32323'}} ref={slideBar} className="dashboard-sidebar">
                <div className="dashboard-slidebar-cont">
                    <Link to="/" className="dashboard-logo-cont dashboard-item-margin-top">
                        <div className="dashboard-logo"></div>
                        <h3 className="dashboard-logo-text">Blood Support</h3>
                    </Link>

                    <Link to="/profile" className="dashboard-profile-cont dashboard-item-margin-top">
                        <div className="dashboard-profile-img"></div>
                        <h3 className="dashboard-profile-name">Jimam Tamimi</h3>
                    </Link>


                    {
                        navs.map((nav, index) => {

                            return (
                                <>
                                    {
                                        nav.type == 'link' ?
                                        <div onClick={handleSlideBarMobile} className="dashboard-nav-item">
                                            <NavLink to={nav.path} activeClassName="dashboard-active" exact className="dashboard-nav-link">
                                                <FontAwesomeIcon className="nav-icon" icon={nav.iconComponent} />
                                                <p>{nav.name}</p>
                                            </NavLink>
                                        </div> :
                                        nav.type == 'request' ?
                                        <div  className="dashboard-nav-item dashboard-drop-down-nav-item">
                                            <div ref={slidebarHiddenOption} onClick={showOptions} className="dashboard-nav-link dashboard-parent-dropdown">
                                                <FontAwesomeIcon className="dashboard-nav-icon" icon={faHandHoldingMedical} />
                                                <p>My Requests</p>
                                                <span className="dashboard-nav-badge">{nav.requests.length}</span>
                                                <FontAwesomeIcon className="dashboard-dropdown-icon" icon={faAngleLeft} />
                                            </div>
                                            {
                                                nav.requests.map((request, index) => {
                                                    return (
                                                        <>

                                                            <NavLink onClick={handleSlideBarMobile} exact activeClassName="dashboard-active-sub-class" to={'/dashboard/request/' + request.id}  className="dashboard-nav-link drop-down-link">
                                                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" className="svg-inline--fa fa-circle fa-w-16 nav-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>

                                                                <p>{request.bloodGroup} Blood Request {index + 1}</p>
                                                            </NavLink>

                                                        </>
                                                    )
                                                })
                                            }

                                        </div> : nav.type == 'nav-header' ?
                                        <p className="dashboard-nav-header">{nav.name}</p> : nav.type == 'settings' ?
                                            < div className="dashboard-nav-item dashboard-drop-down-nav-item">
                                                <div onClick={showOptions} className="dashboard-nav-link dashboard-parent-dropdown">

                                                    <FontAwesomeIcon className="dashboard-nav-icon" icon={faCogs} />

                                                    <p ref={slidebarHiddenOption} >Settings</p>
                                                    <FontAwesomeIcon className="dashboard-dropdown-icon" icon={faAngleLeft} />

                                                </div>
                                                {
                                                    nav.options.map((option, id) => {
                                                        return (
                                                            <NavLink onClick={handleSlideBarMobile} to={option.path} activeClassName="dashboard-active"  className="dashboard-nav-link dashboard-drop-down-link">

                                                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" className="svg-inline--fa fa-circle fa-w-16 nav-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>

                                                                <p>{option.name}</p>
                                                            </NavLink>
                                                        )
                                                    })
                                                }


                                            </div> : null


                                    }
                                </>

                            )

                        })
                    }




                </div>
            </div>

            <div  ref={contentWraper} className="dashboard-content-wraper">
                <div className="dashboard-navbar-cont">
                    <nav className="dashboard-navbar">
                        <ul className="dashboard-nav-item-wraper">
                            <li onClick={handleSlideBar} className="dashboard-slidebar-toggler-wraper">
                                <FontAwesomeIcon className="dashboard-slidebar-toggler" icon={faBars} />

                            </li>
                            <li>
                                <form className="dashboard-search-box-wraper">
                                    <input placeholder="Search" type="text" className="dashboard-search-box" />
                                    <button className="dashboard-search-submit" type="submit">
                                        <FontAwesomeIcon className="dashboard-slidebar-toggler" icon={faSearch} />

                                    </button>
                                </form>
                            </li>
                        </ul>

                        <ul  className="dashboard-right-nav-icons">
                            <li className="dashboard-right-nav-icon-wraper">
                                <FontAwesomeIcon icon={faSignOutAlt} />

                            </li>
                            <li onClick={(e) => { handleMsgNotDropDown(e, 'message') }} className="dashboard-right-nav-icon-wraper">
                                <FontAwesomeIcon icon={faCommentDots} />
                                <span className="dashboard-badge">33</span>
                            </li >
                            <div ref={messageDropdown} className="dashboard-message-dropdown-cont ">
                                <div className="dashboard-message-dropdown">

                                    <div className="dashboard-message">
                                        <div style={{ background: '(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)' }} className="dashboard-messager-img"></div>
                                        <div className="dashboard-message-details">
                                            <h5 className="dashboard-messager-name">Jimam tamimi</h5>
                                            <p className="dashboard-message-text">A quick brown fox jumped... - <span>3 Hours</span></p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <li onClick={(e) => { handleMsgNotDropDown(e, 'notification') }} className="dashboard-right-nav-icon-wraper">
                                <FontAwesomeIcon icon={faBell} />
                                <span className="dashboard-badge" style={{ left: '16.5px' }}>33</span>

                            </li>
                            <div ref={notificationDropdown} className=" dashboard-message-dropdown-cont dashboard-notification-dropdown-cont 
              ">
                                <div className="dashboard-notification-dropdown">
                                    <div className="dashboard-notification">
                                        <div style={{ background: 'url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)' }} className="dashboard-notification-img"></div>
                                        <div className="dashboard-notification-details">
                                            <h5 className="dashboard-notification-name">Jimam tamimi</h5>
                                            <p className="dashboard-notification-text">A quick brown fox jumped... - <span>3 Hours</span></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <li onClick={handleFullScreen} className="dashboard-right-nav-icon-wraper">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="expand-arrows-alt" className="svg-inline--fa fa-expand-arrows-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z"></path></svg>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div onClick={handleSlideBarMobile} className="dashboard-content">
                    
                    <Contents   />

                </div>

               
                

            </div>
        </>
    )
}

export default Dashboard
