import React, {useRef, useEffect} from 'react'

function RequestDetails(props) {
  
    useEffect(() => {
        console.log(props.donorRequestId)
        
        
    }, [])
    return (
        <>
        {
            
            <div  className='offcanvas offcanvas-end ' tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{visibility: 'hidden',   width: '70%'}} aria-modal="true" role="dialog">
                <div  style={{background: '#f4f6f9',}} className="offcanvas-header">
                    <h3 className="mx-4" id="offcanvasRightLabel">A+ Blood Request by Jimam Tamimi</h3>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">

                    <div style={{width: '95%'}} className="details-section">
                        <div className="card-body">
                            <h4 className="card-title text-decoration-underline mb-2">Posted By:</h4>
                            <p className="card-text m-0 my-3 "><a href="#"><img style={{width: '30px', borderRadius: '200px',}} src="/media/blood/request-img/1.webp" alt="" /> <span> - Jimam Tamimi</span></a></p>


                            <div style={{right: '20px', top:'100px'}} className="request-status d-inline-flex flex-column float-right position-absolute">
                                
                                <h5 className="float-end  m-1"><span className="badge bg-primary float-right">Accepted</span> </h5>
                            </div>

                            <h4 className="card-title text-decoration-underline">Other Details:</h4>
                            <p className="card-text m-0 my-2 ">Blood Group: <b className="ml-1">A+</b></p>
                            <p className="card-text m-0 my-2 ">Address: <b className="ml-1">Sujanagar Upazila Pabna</b></p>
                            <p className="card-text m-0 my-2 ">Date: <b className="ml-1">Tuesday 23 February 2021</b></p>
                            <p className="card-text m-0 my-2 ">Time: <b className="ml-1">10:20 AM</b></p>
                            <p className="card-text m-0 my-2 ">Hospital: <b className="ml-1">Pabna Sadar</b></p>
                            <p className="card-text m-0 my-2 ">BLood Needed: <b className="ml-1">1 bag (400ml)</b></p>
                            <p className="card-text mt-0 my-2 ">Phone: <b className="ml-1">01712849741</b></p>
                            <p className="card-text mt-0 my-2 ">Additional Phone No: <b className="ml-1">01712849741</b></p>
                            <p className="card-text mt-0 my-2 ">Age: <b className="ml-1">01712849741</b></p>
                            <p className="card-text mt-0 my-2 ">Weight: <b className="ml-1">01712849741</b></p>
                            <h4 className="card-title text-decoration-underline">Description:</h4>
                            <p className="card-text mt-0 my-2 fw-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Rerum
                                doloremque ad dolores? Natus excepturi, provident aliquid nemo itaque sit aspernatur
                                molestiae velit
                                possimus at numquam in corrupti a quos ipsa debitis tempore nostrum veniam culpa.</p>
                            <div className="act-button-grp">
                                
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editHelpFormModal">Edit Donor Request</button>
                                
                                <button type="button" className=" btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete Donor Request</button>
                            </div>

                        </div>
                    </div>
                    
                    
                </div>
            </div>


        }
        </>
    )
}

export default RequestDetails
