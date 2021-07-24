import { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function YourDonorRequests(props) {

    return (
        <div >


            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="requested-tab" data-bs-toggle="tab" data-bs-target="#requested"
                        type="button" role="tab" aria-controls="requested" aria-selected="true">
                        Requested
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="accepted-tab" data-bs-toggle="tab" data-bs-target="#accepted" type="button"
                        role="tab" aria-controls="accepted" aria-selected="false">
                        Accepted
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="completed-tab" data-bs-toggle="tab" data-bs-target="#completed" type="button"
                        role="tab" aria-controls="completed" aria-selected="false">
                        Completed
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="deleted-tab" data-bs-toggle="tab" data-bs-target="#deleted" type="button"
                        role="tab" aria-controls="deleted" aria-selected="false">
                        Deleted
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="requested" role="tabpanel" aria-labelledby="requested-tab">
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
                                        <NavLink to="#" className="btn-sm btn-primary mr-3 ">View</NavLink>
                                        <NavLink to="#" className="btn-sm btn-danger ">MEssage</NavLink>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="accepted" role="tabpanel" aria-labelledby="accepted-tab">
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
                                        <NavLink to="#" className="btn-sm btn-primary mr-3 ">View</NavLink>
                                        <NavLink to="#" className="btn-sm btn-danger ">MEssage</NavLink>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="deleted" role="tabpanel" aria-labelledby="deleted-tab">
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
                                        <NavLink to="#" className="btn-sm btn-primary mr-3 ">View</NavLink>
                                        <NavLink to="#" className="btn-sm btn-danger ">MEssage</NavLink>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="completed" role="tabpanel" aria-labelledby="completed-tab">
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
                                        <NavLink to="#" className="btn-sm btn-primary mr-3 ">View</NavLink>
                                        <NavLink to="#" className="btn-sm btn-danger ">MEssage</NavLink>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default YourDonorRequests
