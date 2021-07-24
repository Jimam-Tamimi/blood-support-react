import '../css/Messages.css'
import { useRef, useEffect } from 'react'
import { Link, NavLink, Redirect, useHistory, withRouter, Route } from "react-router-dom";
import MessagesSection from './subcomponents/MessagesSection'
import { CSSTransition } from 'react-transition-group'

function Messages(props) {


        const contactOptions = useRef(null)
    const messageSection = useRef(null)
    const scrollToBottom = useRef(null)
    const contactOptionsToggler = useRef(null)
    let messages = true

    const parentElmCompoHeight = useRef(null)

        // redirecting if message id is not defiend


    
    useEffect(() => {
        console.log(props.match.params.messageid)
        if(props.match.params.messageid == undefined){
            // this id will be fetched from db 
            let id = 433545
            props.history.push(`/messages/${id}`)
        }
        
        console.log('Message mounting');
        // scrollToBottom.current.scrollIntoView({ behavior: 'smooth' })
        return () => {
        }
    }, [])

    

    
    
    function openContactSection(e) {
        contactOptions.current.classList.toggle('toggle-contact-section')
        contactOptionsToggler.current.classList.toggle('toggle-contact-option')
    }
    
    

    return (

        <div ref={parentElmCompoHeight}>

            <div className="my-row">

                <div ref={contactOptions} id="contacts-section" className="contacts-section ">
                    <div className="contact-cont">

                        <NavLink onClick={openContactSection} to="/messages/54546454556" className="contact">
                            <div style={{ background: 'url(/media/blood/request-img/2.jpg)' }} className="contact-img"></div>
                            <div className="det-text">
                                <p className="name">Jimam Tamimi</p>
                                <p className="last-msg">A quick brown fox </p>
                            </div>
                        </NavLink>
                        <NavLink onClick={openContactSection} to="/messages/54545455456" className="contact">
                            <div style={{ background: 'url(/media/blood/request-img/2.jpg)' }} className="contact-img"></div>
                            <div className="det-text">
                                <p className="name">Jimam Tamimi</p>
                                <p className="last-msg">A quick brown fox </p>
                            </div>
                        </NavLink>
                        <NavLink onClick={openContactSection} to="/messages/54544545456" className="contact">
                            <div style={{ background: 'url(/media/blood/request-img/2.jpg)' }} className="contact-img"></div>
                            <div className="det-text">
                                <p className="name">Jimam Tamimi</p>
                                <p className="last-msg">A quick brown fox </p>
                            </div>
                        </NavLink>

                    </div>
                </div>
                <div id="messages-section" className="messages-section">
                    <Route key={1} exact path="/messages/:messageid">

                        < MessagesSection messageSection={messageSection} scrollToBottom={scrollToBottom} contactOptionsToggler={contactOptionsToggler} openContactSection={openContactSection} />

                    </Route>


                    <div className="send-messages">
                        <input type="text" id="message-to-send" placeholder="Aa..." />
                        <div id="send"><i id="send-icon" className="fas fa-location-arrow"></i></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default withRouter(Messages)
