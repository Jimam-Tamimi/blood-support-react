import React from 'react'
import {withRouter} from 'react-router-dom'
function MessagesSection(props) {
    console.log(props.match.params.messageid)
    
    return (
        <>
        <div className="contact-option-toggler-wrapper">
            <li ref={props.contactOptionsToggler} onClick={() =>{props.openContactSection(); console.log('clicked');}} class="contact-option-toggler"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14 dashboard-slidebar-toggler" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg></li>
        </div>


            <div ref={props.scrollToBottom} className="messages">
                        <div className="got">
                            <p className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                            deleniti enim
                            autem quaerat eligendi esse nam quae blanditiis porro beatae? Quis iste placeat
                            inventore
                possimus necessitatibus accusantium velit laudantium.</p>
                        </div>
                        <div className="sent">
                            <p className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                            deleniti enim
                            autem quaerat eligendi esse nam quae blanditiis porro beatae? Quis iste placeat
                            inventore
                possimus necessitatibus accusantium velit laudantium.</p>
                            <div className="status">
                                <div style={{background: 'url(/media/blood/request-img/2.jpg)', border: 'none'}}></div>
                            </div>
                        </div>
                        <div className="sent">
                            <p className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                            deleniti enim
                            autem quaerat eligendi esse nam quae blanditiis porro beatae? Quis iste placeat
                            inventore
                possimus necessitatibus accusantium velit laudantium.</p>
                            <div className="status">
                                <div><i className="fas fa-check-circle"></i></div>
                            </div>
                        </div>
                        <div className="sent">
                            <p className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                            deleniti enim
                            autem quaerat eligendi esse nam quae blanditiis porro beatae? Quis iste placeat
                            inventore
                possimus necessitatibus accusantium velit laudantium.</p>
                            <div className="status">
                                <div></div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default withRouter(MessagesSection)
