import {NavLink} from 'react-router-dom'
import {useEffect, useRef} from 'react'

function CurrentBloodDonations(props) {

    return (
        <>


        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Profile</th>
                    <th scope="col">Blood Group</th>
                    <th scope="col">Address</th>
                    <th scope="col">Time</th>
                    <th scope="col">Have To Go</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                    <th scope="row">1</th>
                    <td className="profile"><NavLink className="profile-cont" to="#">
                            <div className="profile-img"> </div> <span>Jimam Tamimi</span>
                        </NavLink></td>
                    <td>A+</td>
                    <td>Pabna Sadar Hospital at Pabna Rajshahi</td>
                    <td>Sunday 24 December 2021 at 11:30 am</td>
                    <td>Jimam Tamimi</td>
                    <td>
                        <div className="d-flex">
                            <NavLink style={{marginRight: '8px'}} to="#" className="btn-sm btn-primary  ">View</NavLink>
                            <NavLink to="#" className="btn-sm btn-danger ">Message</NavLink>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td className="profile"><NavLink className="profile-cont" to="#">
                            <div className="profile-img"> </div> <span>Jimam Tamimi</span>
                        </NavLink></td>
                    <td>A+</td>
                    <td>Pabna Sadar Hospital at Pabna Rajshahi</td>
                    <td>Sunday 24 December 2021 at 11:30 am</td>
                    <td>Jimam Tamimi</td>
                    <td>
                        <div className="d-flex">
                            <NavLink style={{marginRight: '8px'}} to="#" className="btn-sm btn-primary  ">View</NavLink>
                            <NavLink to="#" className="btn-sm btn-danger ">Message</NavLink>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td className="profile"><NavLink className="profile-cont" to="#">
                            <div className="profile-img"> </div> <span>Jimam Tamimi</span>
                        </NavLink></td>
                    <td>A+</td>
                    <td>Pabna Sadar Hospital at Pabna Rajshahi</td>
                    <td>Sunday 24 December 2021 at 11:30 am</td>
                    <td>Jimam Tamimi</td>
                    <td>
                        <div className="d-flex">
                            <NavLink style={{marginRight: '8px'}} to="#" className="btn-sm btn-primary  ">View</NavLink>
                            <NavLink to="#" className="btn-sm btn-danger ">Message</NavLink>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td className="profile"><NavLink className="profile-cont" to="#">
                            <div className="profile-img"> </div> <span>Jimam Tamimi</span>
                        </NavLink></td>
                    <td>A+</td>
                    <td>Pabna Sadar Hospital at Pabna Rajshahi</td>
                    <td>Sunday 24 December 2021 at 11:30 am</td>
                    <td>Jimam Tamimi</td>
                    <td>
                        <div className="d-flex">
                            <NavLink style={{marginRight: '8px'}} to="#" className="btn-sm btn-primary  ">View</NavLink>
                            <NavLink to="#" className="btn-sm btn-danger ">Message</NavLink>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td className="profile"><NavLink className="profile-cont" to="#">
                            <div className="profile-img"> </div> <span>Jimam Tamimi</span>
                        </NavLink></td>
                    <td>A+</td>
                    <td>Pabna Sadar Hospital at Pabna Rajshahi</td>
                    <td>Sunday 24 December 2021 at 11:30 am</td>
                    <td>Jimam Tamimi</td>
                    <td>
                        <div className="d-flex">
                            <NavLink style={{marginRight: '8px'}} to="#" className="btn-sm btn-primary  ">View</NavLink>
                            <NavLink to="#" className="btn-sm btn-danger ">Message</NavLink>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td className="profile"><NavLink className="profile-cont" to="#">
                            <div className="profile-img"> </div> <span>Jimam Tamimi</span>
                        </NavLink></td>
                    <td>A+</td>
                    <td>Pabna Sadar Hospital at Pabna Rajshahi</td>
                    <td>Sunday 24 December 2021 at 11:30 am</td>
                    <td>Jimam Tamimi</td>
                    <td>
                        <div className="d-flex">
                            <NavLink style={{marginRight: '8px'}} to="#" className="btn-sm btn-primary  ">View</NavLink>
                            <NavLink to="#" className="btn-sm btn-danger ">Message</NavLink>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td className="profile"><NavLink className="profile-cont" to="#">
                            <div className="profile-img"> </div> <span>Jimam Tamimi</span>
                        </NavLink></td>
                    <td>A+</td>
                    <td>Pabna Sadar Hospital at Pabna Rajshahi</td>
                    <td>Sunday 24 December 2021 at 11:30 am</td>
                    <td>Jimam Tamimi</td>
                    <td>
                        <div className="d-flex">
                            <NavLink style={{marginRight: '8px'}} to="#" className="btn-sm btn-primary  ">View</NavLink>
                            <NavLink to="#" className="btn-sm btn-danger ">Message</NavLink>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td className="profile"><NavLink className="profile-cont" to="#">
                            <div className="profile-img"> </div> <span>Jimam Tamimi</span>
                        </NavLink></td>
                    <td>A+</td>
                    <td>Pabna Sadar Hospital at Pabna Rajshahi</td>
                    <td>Sunday 24 December 2021 at 11:30 am</td>
                    <td>Jimam Tamimi</td>
                    <td>
                        <div className="d-flex">
                            <NavLink style={{marginRight: '8px'}} to="#" className="btn-sm btn-primary  ">View</NavLink>
                            <NavLink to="#" className="btn-sm btn-danger ">Message</NavLink>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        
        </>
    )
}

export default CurrentBloodDonations
