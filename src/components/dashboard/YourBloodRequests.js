import {useRef, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
function YourBloodRequests(props) {
    
    return (
        <div>


            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-on-going-tab" data-bs-toggle="tab" data-bs-target="#nav-on-going" type="button" role="tab" aria-controls="nav-on-going" aria-selected="true">On Going</button>
                    <button className="nav-link" id="nav-completed-tab" data-bs-toggle="tab" data-bs-target="#nav-completed" type="button" role="tab" aria-controls="nav-completed" aria-selected="false">Completed</button>
                    <button className="nav-link" id="nav-deleted-tab" data-bs-toggle="tab" data-bs-target="#nav-deleted" type="button" role="tab" aria-controls="nav-deleted" aria-selected="false">Deleted</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-on-going" role="tabpanel" aria-labelledby="nav-on-going-tab">
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="card m-3" style={{ width: '20rem' }}>
                            <img src="https://static.toiimg.com/thumb/69024200.cms?width=680&height=512&imgsize=862647" className="card-img-top" alt="" />
                            <div style={{ padding: '14px' }} className="card-body">

                                <p className="card-text ">Posted By:  <NavLink className="text-decoration-none" to="#"> request.name </NavLink></p>
                                <div style={{ right: '0px', top: '278px', color: 'white' }} className="request-status d-inline-flex flex-column float-right position-absolute">
                                    <h5 className="m-1"><span className="badge color-light bg-primary float-right">1 request with you</span> </h5>
                                    {/* <!-- {% if user == request.userDetail.user %} */}
                                    <h5 className=" m-1"><span className="badge bg-primary float-right">Posted By You</span> </h5>
                                    {/* {% endif %} --> */}
                                    {/* <h5 className=" m-1"><span className="badge bg-primary float-right">Posted By You</span> </h5> */}

                                    {/* <h5 className="float-end  m-1"><span className="badge bg-primary float-right">0 Request Got</span> </h5>  */}
                                </div>

                                <h4 className="card-title text-decoration-underline">Other Details:</h4>
                                <p className="card-text m-0 my-1  ">Blood Group: <b className="ml-1"> A+ </b></p>
                                <p className="card-text m-0 my-1  ">Address: <b className="ml-1"> Pabna Dhaka Bangladesh </b></p>
                                <p className="card-text m-0 my-1  ">Date: <b className="ml-1"> 1 january 2021 </b></p>
                                <p className="card-text m-0 my-1  ">Time: <b className="ml-1"> 12:30 PM  </b></p>
                                <p className="card-text m-0 my-1  ">Hospital: <b className="ml-1"> Sadar Hospital </b></p>
                                <p className="card-text m-0 my-1  ">BLood Needed: <b className="ml-1"> 450ml </b></p>
                                <p className="card-text mt-0 my-1 mb-2 ">Phone: <b className="ml-1"> 01740493857 </b></p>
                                <div className="btn-time">


                                    <NavLink to="/request/A+-blood-request-by-jimam-tamimi/23/" className="btn btn-primary">See More</NavLink>


                                    <div className="">
                                        <p style={{ position: 'absolute', right: '5px', bottom: '15px' }} ><span className="badge bg-primary request-time text-light float-right"> 20 hours Ago</span> </p>
                                    </div>
                                    {/* <div className="request-status-cont d-flex justify-content-between">  */}



                                </div>


                            </div>
                        </div>


                    </div>
                </div>
                <div className="tab-pane fade" id="nav-completed" role="tabpanel" aria-labelledby="nav-completed-tab">
                    <div className="d-flex flex-wrap justify-content-center">

                    <div className="card m-3" style={{ width: '20rem' }}>
                            <img src="https://static.toiimg.com/thumb/69024200.cms?width=680&height=512&imgsize=862647" className="card-img-top" alt="" />
                            <div style={{ padding: '14px' }} className="card-body">

                                <p className="card-text ">Posted By:  <NavLink className="text-decoration-none" to="#"> request.name </NavLink></p>
                                <div style={{ right: '0px', top: '278px', color: 'white' }} className="request-status d-inline-flex flex-column float-right position-absolute">
                                    <h5 className="m-1"><span className="badge color-light bg-primary float-right">1 request with you</span> </h5>
                                    {/* <!-- {% if user == request.userDetail.user %} */}
                                    <h5 className=" m-1"><span className="badge bg-primary float-right">Posted By You</span> </h5>
                                    {/* {% endif %} --> */}
                                    {/* <h5 className=" m-1"><span className="badge bg-primary float-right">Posted By You</span> </h5> */}

                                    {/* <h5 className="float-end  m-1"><span className="badge bg-primary float-right">0 Request Got</span> </h5>  */}
                                </div>

                                <h4 className="card-title text-decoration-underline">Other Details:</h4>
                                <p className="card-text m-0 my-1  ">Blood Group: <b className="ml-1"> A+ </b></p>
                                <p className="card-text m-0 my-1  ">Address: <b className="ml-1"> Pabna Dhaka Bangladesh </b></p>
                                <p className="card-text m-0 my-1  ">Date: <b className="ml-1"> 1 january 2021 </b></p>
                                <p className="card-text m-0 my-1  ">Time: <b className="ml-1"> 12:30 PM  </b></p>
                                <p className="card-text m-0 my-1  ">Hospital: <b className="ml-1"> Sadar Hospital </b></p>
                                <p className="card-text m-0 my-1  ">BLood Needed: <b className="ml-1"> 450ml </b></p>
                                <p className="card-text mt-0 my-1 mb-2 ">Phone: <b className="ml-1"> 01740493857 </b></p>
                                <div className="btn-time">


                                    <NavLink to="/request/A+-blood-request-by-jimam-tamimi/23/" className="btn btn-primary">See More</NavLink>


                                    <div className="">
                                        <p style={{ position: 'absolute', right: '5px', bottom: '15px' }} ><span className="badge bg-primary request-time text-light float-right"> 20 hours Ago</span> </p>
                                    </div>
                                    {/* <div className="request-status-cont d-flex justify-content-between">  */}



                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="tab-pane fade" id="nav-deleted" role="tabpanel" aria-labelledby="nav-deleted-tab">
                    <div className="d-flex flex-wrap justify-content-center">

                    <div className="card m-3" style={{ width: '20rem' }}>
                            <img src="https://static.toiimg.com/thumb/69024200.cms?width=680&height=512&imgsize=862647" className="card-img-top" alt="" />
                            <div style={{ padding: '14px' }} className="card-body">

                                <p className="card-text ">Posted By:  <NavLink className="text-decoration-none" to="#"> request.name </NavLink></p>
                                <div style={{ right: '0px', top: '278px', color: 'white' }} className="request-status d-inline-flex flex-column float-right position-absolute">
                                    <h5 className="m-1"><span className="badge color-light bg-primary float-right">1 request with you</span> </h5>
                                    {/* <!-- {% if user == request.userDetail.user %} */}
                                    <h5 className=" m-1"><span className="badge bg-primary float-right">Posted By You</span> </h5>
                                    {/* {% endif %} --> */}
                                    {/* <h5 className=" m-1"><span className="badge bg-primary float-right">Posted By You</span> </h5> */}

                                    {/* <h5 className="float-end  m-1"><span className="badge bg-primary float-right">0 Request Got</span> </h5>  */}
                                </div>

                                <h4 className="card-title text-decoration-underline">Other Details:</h4>
                                <p className="card-text m-0 my-1  ">Blood Group: <b className="ml-1"> A+ </b></p>
                                <p className="card-text m-0 my-1  ">Address: <b className="ml-1"> Pabna Dhaka Bangladesh </b></p>
                                <p className="card-text m-0 my-1  ">Date: <b className="ml-1"> 1 january 2021 </b></p>
                                <p className="card-text m-0 my-1  ">Time: <b className="ml-1"> 12:30 PM  </b></p>
                                <p className="card-text m-0 my-1  ">Hospital: <b className="ml-1"> Sadar Hospital </b></p>
                                <p className="card-text m-0 my-1  ">BLood Needed: <b className="ml-1"> 450ml </b></p>
                                <p className="card-text mt-0 my-1 mb-2 ">Phone: <b className="ml-1"> 01740493857 </b></p>
                                <div className="btn-time">


                                    <NavLink to="/request/A+-blood-request-by-jimam-tamimi/23/" className="btn btn-primary">See More</NavLink>


                                    <div className="">
                                        <p style={{ position: 'absolute', right: '5px', bottom: '15px' }} ><span className="badge bg-primary request-time text-light float-right"> 20 hours Ago</span> </p>
                                    </div>
                                    {/* <div className="request-status-cont d-flex justify-content-between">  */}



                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default YourBloodRequests
