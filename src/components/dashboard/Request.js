import {withRouter} from 'react-router-dom'

function Request(props) {
    return (
        <div>
                {
                    props.match == null? <h1></h1>:
                    <h1>This is the request of id {props.match.params.requestid}</h1>
                }
{/* 
            <div class="card  py-3" >

                <div class="d-flex my-cus-row justify-content-evenly align-items-center ">
                    <div style={backgroundImage: "url(/media/blood/request-img/2.jpg)", minHeight: "552px", backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat", cursor: "pointer"}
                        class="image-section bg-primary" data-bs-toggle="modal" data-bs-target="#viewDonorImgModal">
                    </div>


                    <div class="details-section">
                        <div class="card-body">
                            <h4 class="card-title text-decoration-underline mb-2">Posted By:</h4>
                            <p class="card-text m-0 my-3 "><a style="" href="#"><img
                                        style="width: 30px; border-radius: 200px;" src="/media/blood/request-img/1.webp"
                                        alt="" /> <span> - Jimam Tamimi</span></a></p>


                            <div style="right: 20px; top:100px;"
                                class="request-status d-inline-flex flex-column float-right position-absolute">
                                
                                <h5 class="float-end  m-1"><span class="badge bg-primary float-right">Accepted</span> </h5>
                            </div>

                            <h4 class="card-title text-decoration-underline">Other Details:</h4>
                            <p class="card-text m-0 my-2 ">Blood Group: <b class="ml-1">A+</b></p>
                            <p class="card-text m-0 my-2 ">Address: <b class="ml-1">Sujanagar Upazila Pabna</b></p>
                            <p class="card-text m-0 my-2 ">Date: <b class="ml-1">Tuesday 23 February 2021</b></p>
                            <p class="card-text m-0 my-2 ">Time: <b class="ml-1">10:20 AM</b></p>
                            <p class="card-text m-0 my-2 ">Hospital: <b class="ml-1">Pabna Sadar</b></p>
                            <p class="card-text m-0 my-2 ">BLood Needed: <b class="ml-1">1 bag (400ml)</b></p>
                            <p class="card-text mt-0 my-2 ">Phone: <b class="ml-1">01712849741</b></p>
                            <p class="card-text mt-0 my-2 ">Additional Phone No: <b class="ml-1">01712849741</b></p>
                            <p class="card-text mt-0 my-2 ">Age: <b class="ml-1">01712849741</b></p>
                            <p class="card-text mt-0 my-2 ">Weight: <b class="ml-1">01712849741</b></p>
                            <h4 class="card-title text-decoration-underline">Description:</h4>
                            <p class="card-text mt-0 my-2 fw-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Rerum
                                doloremque ad dolores? Natus excepturi, provident aliquid nemo itaque sit aspernatur
                                molestiae velit
                                possimus at numquam in corrupti a quos ipsa debitis tempore nostrum veniam culpa.</p>
                            <div class="act-button-grp">
                                
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editHelpFormModal">Edit Donor Request</button>
                                
                                <button type="button" class=" btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete Donor Request</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default withRouter(Request)
