import React, {useEffect, useState} from 'react'
import ContentHeader from "./subcomponents/ContentHeader";
import RequestDetails from "./subcomponents/RequestDetails";
import '../../css/SingleRequest.css'


function SingleRequest() {
    const [donorRequestId, setDonorRequestId] = useState(null)
    useEffect(() => {
        console.log(donorRequestId)
        
    }, [donorRequestId])
    
    return (
        <>
            <ContentHeader headingText="Request" />       
            <ul className="nav nav-tabs ml-2" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button style={{outline: 'none', border: 'none',}} className="nav-link active" id="request-tab" data-bs-toggle="tab" data-bs-target="#request" type="button" role="tab" aria-controls="request" aria-selected="true">Request</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button style={{outline: 'none', border: 'none',}} className="nav-link" id="donor-tab" data-bs-toggle="tab" data-bs-target="#donor" type="button" role="tab" aria-controls="donor" aria-selected="false">All Donor Request</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button style={{outline: 'none', border: 'none',}} className="nav-link" id="donor-tab" data-bs-toggle="tab" data-bs-target="#donor" type="button" role="tab" aria-controls="donor" aria-selected="false">My Donor Request</button>
                </li>
            </ul>


            
<div className="tab-content" id="myTabContent">
    {/* {% comment %} the request section {% endcomment %} */}
    <div className="tab-pane fade show active" id="request" role="tabpanel" aria-labelledby="request-tab">
        <div className="card  py-3 mb-0 " >

            <div className="d-flex my-cus-row justify-content-evenly align-items-center ">
                <div style={{backgroundImage:' url(/media{{image}})', minHeight: '552px', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', cursor:' pointer'}}
                    className="image-section bg-primary" data-bs-toggle="modal" data-bs-target="#viewImageModal">

                </div>


                <div className="details-section">
                    <div className="card-body">
                        <h4 className="card-title text-decoration-underline mb-2">Posted By:</h4>
                        <div >

                            <p className="card-text m-0 my-3 "><a  href="#">
                                    <span>
                                        <div
                                            style={{width: '30px', height:'30px', background: 'url(/media/{{profileImg}})', backgroundPosition: 'center center', backgroundPepeat:' no-repeat', backgroundSize: 'cover', borderRadius: '200px'}}>
                                        </div>
                                    </span>
                                   <span> -  {/*  {{name}}  */} </span>
                                </a></p>

                        </div>

                        <div style={{right: '20px', top:'100px',}}
                            className="request-status d-inline-flex flex-column float-right position-absolute">
                            <h5 className="m-1"><span className="badge bg-primary float-right">1 request with you</span> </h5>

                            {/* {% if user == 'requester' %} */}
                            <h5 className=" m-1"><span className="badge bg-primary float-right">Posted By You</span> </h5>
                            
                            {/* {% else %}

                            {% endif %} */}
                            {/* {% comment %} <h5 className="float-end  m-1"><span className="badge bg-primary float-right">0
                                    Request
                                    Got</span> </h5> {% endcomment %} */}
                        </div>

                        <h4 className="card-title text-decoration-underline">Other Details:</h4>
                        <p className="card-text m-0 my-2 ">Blood Group: <b className="ml-1">bloodGroup</b></p>
                        <p className="card-text m-0 my-2 ">Address: <b className="ml-1">address</b></p>
                        <p className="card-text m-0 my-2 ">Date: <b className="ml-1">date</b></p>
                        <p className="card-text m-0 my-2 ">Time: <b className="ml-1">time</b></p>
                        <p className="card-text m-0 my-2 ">Hospital: <b className="ml-1">hospital</b></p>
                        <p className="card-text m-0 my-2 ">BLood Needed: <b className="ml-1">bloodNeeded</b></p>
                        <p className="card-text mt-0 my-2 ">Phone: <b className="ml-1">number</b></p>
                        <p className="card-text mt-0 my-2 ">Additional Phone No: <b className="ml-1">additionalNumber</b>
                        </p>
                        <p className="card-text mt-0 my-2 ">Gender: <b className="ml-1">gender</b></p>
                        <p className="card-text mt-0 my-2 ">Age: <b className="ml-1">age</b></p>
                        <p className="card-text mt-0 my-2 ">Weight: <b className="ml-1">weight</b></p>
                        <h4 className="card-title text-decoration-underline">Description:</h4>
                        <p className="card-text mt-0 my-2 fw-600">
                            description
                        </p>
                        <div className="act-button-grp">
                          {/* {% if user == 'requester' %} */}
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editHelpFormModal"> Edit Request</button>
                            
                            <button type="button" className=" btn  btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete Request</button>

                            {/* {% elif user == 'viewer' %} */}
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#helpFormModal">Send Request</button>
                            
                            <button type="button" className=" btn mr-3 btn-danger" data-bs-toggle="modal" data-bs-target="#reportModal">Report</button>
                            {/* {% endif %} */}
                        </div>

                    </div>
                </div>
            </div>
        </div>



    </div>

    <div className="tab-pane fade" id="donor" role="tabpanel" aria-labelledby="donor-tab">
    {/* {% if user == 'requester' %} */}
        {/* {% comment %} All donator section  {% endcomment %} */}
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Profile</th>
                    <th scope="col">Blood Group</th>
                    <th scope="col">Address</th>
                    <th scope="col">Time</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                
                <tr onClick={ () => setDonorRequestId(34) } data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <th scope="row">1</th>
                    <td className="profile"><a className="profile-cont" href="#">
                            <div className="profile-img" style={{background: 'url(/media/blood/request-img/2.jpg)'}}> </div> <span>Jimam Tamimi</span>
                        </a></td>
                    <td>A+</td>
                    <td>Pabna Sadar Hospital at Pabna Rajshahi</td>
                    <td>Sunday 24 December 2021 at 11:30 am</td>
                    <td>
                        <div className="d-flex">
                            <a href="#" className="btn-sm btn-primary mr-3 ">View</a>
                            <a href="#" className="btn-sm btn-danger ">MEssage</a>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>

        {/* donor request details  */}
                
        <RequestDetails donorRequestId={donorRequestId}  />


    {/* {% else %} */}
        {/* {% comment %} My donor request section  {% endcomment %} */}
        <div className="card  py-3" >

            <div className="d-flex my-cus-row justify-content-evenly align-items-center ">
                


                <div style={{width: '95%'}}  className="details-section">
                    <div className="card-body">
                        <h4 className="card-title text-decoration-underline mb-2">Posted By:</h4>
                        <p className="card-text m-0 my-3 "><a  href="#"><img
                                    style={{width: '30px', borderRadius: '200px'}} src="/media/blood/request-img/1.webp"
                                    alt="" /> <span> - Jimam Tamimi</span></a></p>


                        <div style={{right: '20px', top:'100px'}}
                            className="request-status d-inline-flex flex-column float-right position-absolute">
                            
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
                            {/* <!-- Button trigger modal --> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    {/* {% endif %} */}



    </div>

</div>


{/* <!-- Modal --> */}


{/* <!-- donor section modals  --> */}

{/* <!-- editHelpFormModal --> */}
{/* {% if user == 'requester' %} */}
<div className="modal fade" id="editHelpFormModal" tabindex="-1" aria-labelledby="editHelpFormModalLabel"
    aria-hidden="true">
    <div className="modal-dialog  modal-lg modal-dialog-centered">
        <div style={{minHeight: '516px',}} className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="editHelpFormModalLabel">Edit Your Help Form</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

                <div className="i-am-giving" style={{display:'flex', justifyContent: 'flex-end',
                marginRight: '3px',}}>
                    <button id="i-am-taking" className="btn btn-primary ">Back To Normal</button>
                </div>

                <form id='' action="/request/update/" method="POST" className="row g-3 " enctype="multipart/form-data">
                    {/* {% csrf_token %} */}
                    <input required  type="hidden" id="id" name="id" value="{{id}}" />

                    <div className="col-md-6">
                        <label for="name" className="form-label">Name Of Taker *</label>
                        <input required  type="text" className="form-control" placeholder="Donor Name" id="name" name="name" value="{{name}}" />
                    </div>
                    <div className="col-md-6">
                        <label for="time" className="form-label">When Do You Need Blood *</label>
                        <input   required  type="datetime-local" className="form-control" id="time" name="time"  value="{{bloodNeedTime}}"/>
                    </div>
                    <div className="col-md-5">
                        <label for="inputAddress" className="form-label">Address *</label>
                        <input  required  type="text" className="form-control" id="inputAddress" placeholder="District - UpaZila" name="address"  value="{{address}}"/>
                    </div>

                    <div className="col-md-4">
                        <label for="hospital" className="form-label">Hospital Name *</label>
                        <input  required  type="text" className="form-control" id="hospital" placeholder="Hospital Name" name="hospital"  value="{{hospital}}"/>
                    </div>
                    <div className="col-md-3">
                        <label for="phone" className="form-label">Phone No. *</label>
                        <input  required  type="tel" className="form-control" id="phone" placeholder="01XXXXXXXXX" name="number"  value="{{number}}" />
                    </div>
                    <div className="col-md-4">
                        <label for="date-of-birth" className="form-label">Date Of Birth *</label>
                        <input required  type="date" className="form-control" id="date-of-birth" placeholder="" name="date-of-birth"  value="{{dateOfBirth}}" />
                    </div>
                    <div className="col-md-4">
                        <label for="add-phone" className="form-label">Additional Phone No.</label>
                        <input type="tel" className="form-control" id="add-phone" placeholder="01XXXXXXXXX (additional)" name="additional-number"  value="{{additionalNumber}}" />
                    </div>


                    <div className="col-md-4">
                        <label for="email" className="form-label">Email *</label>
                        <input  required  type="email" className="form-control" id="email" placeholder="name@mail.com (Optional)" name="email"  value="{{email}}" />
                    </div>
                    <div className="col-md-5">
                        <label for="blood-needed" className="form-label">How Much Blood Do You Need? (ml)*</label>
                        <input  required  type="number" className="form-control" id="blood-needed" placeholder="How Much Blood Do You Need? (ml)" name="blood-needed"  value="{{bloodNeeded}}"  />
                    </div>

                    <div className="col-md-4">
                        <label for="blood-group" className="form-label">Blood Group *</label>
                        <select  required  name="blood-group" id="blood-group" className="form-select">
                            <option disabled selected>Select</option>
                            {/* <option {% if bloodGroup == 'A+'%}selected{% endif %} >A+</option>
                            <option {% if bloodGroup == 'B+'%}selected{% endif %}  >B+</option>
                            <option {% if bloodGroup == 'AB+'%}selected{% endif %}  >AB+</option>
                            <option {% if bloodGroup == 'O+'%}selected{% endif %}  >O+</option>
                            <option {% if bloodGroup == 'A-'%}selected{% endif %}  >A-</option>
                            <option {% if bloodGroup == 'B-'%}selected{% endif %} >B-</option>
                            <option {% if bloodGroup == 'AB-'%}selected{% endif %} >AB-</option>
                            <option {% if bloodGroup == 'O-'%}selected{% endif %} >O-</option> */}
                        </select>
                    </div>

                    <div className="col-md-3">
                        <label for="weight" className="form-label">Weight *</label>
                        <input   required  type="number" className="form-control" id="weight" placeholder="PLease enter your weight (Kg)" name="weight"  value="{{weight}}"  />
                    </div>

                    <div className="col-12">
                        Gender *

                        <div className="form-check form-switch ml-4">
                            {/* <input {% if gender == 'Maile'%}checked{% endif %}   required   className="form-check-input" type="radio" name="gender" id="Male" value="Male" > */}
                            <input    required   className="form-check-input" type="radio" name="gender" id="Male" value="Male" />
                            <label className="form-check-label" for="male" >
                                Male
                            </label>
                        </div>
                        <div className="form-check form-switch ml-4">
                            {/* <input  {% if gender == 'Female'%}checked{% endif %}  required className="form-check-input" type="radio" name="gender" id="Fmale" value="Female"> */}
                            <input   required className="form-check-input" type="radio" name="gender" id="Fmale" value="Female" />
                            <label className="form-check-label" for="female">
                                Female
                            </label>
                        </div>
                        <div className="form-check form-switch ml-4">
                            {/* <input  {% if gender == 'Other'%}checked{% endif %}  required className="form-check-input" type="radio" name="gender" id="Other" value="Other"> */}
                            <input    required className="form-check-input" type="radio" name="gender" id="Other" value="Other" />
                            <label className="form-check-label" for="other" >
                                Other
                            </label>
                        </div>
                    </div>

                    <div className="mb-1">
                        <label for="formFile" className="form-label">A picture of taker (optional)</label>
                        <input name="image" className="form-control" type="file" id="formFile" />
                    </div>
                    
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea id="edit-description" required name="description" className="form-control" placeholder="Please Leave A description" id="floatingTextarea2"
                                style={{height: '150px'}}>description</textarea>
                            <label for="floatingTextarea2">Please Leave A Small Description.  *</label>
                        </div>
                    </div>

                    <div className="col-12">
                        <input type="submit" className="btn btn-primary" value="Update" name="update" />
                    </div>

                </form>

            </div>

        </div>
    </div>
</div>
{/* <!-- Delete Form  --> */}
<div className="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
    <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">Enter Details To Delete</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Why Do You Want TO Delete This Request?"
                                id="floatingTextarea2" style={{height: '300px'}}></textarea>
                            <label for="floatingTextarea2">Why Do You Want TO Delete This Request?</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="modal-footer">
            </div>
        </div>
    </div>
</div>
{/* {% elif user == 'viewer' %} */}

{/* <!-- Report Form  --> */}
<div className="modal fade" id="reportModal" tabindex="-1" aria-labelledby="reportModalLabel" aria-hidden="true">
    <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="reportModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Why You Are Reporting This Request?"
                                id="floatingTextarea2" style={{height: '300px'}}></textarea>
                            <label for="floatingTextarea2">Why You Are Reporting This Request?</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="modal-footer">
            </div>
        </div>
    </div>
</div>
{/* <!-- Help form  --> */}
<div className="modal fade" id="helpFormModal" tabindex="-1" aria-labelledby="helpFormModalLabel" aria-hidden="true">
    <div className="modal-dialog  modal-lg modal-dialog-centered">
        <div style={{minHeight: '516px'}} className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="helpFormModalLabel">Help Form</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form  className="row g-3 ">
                    <div className="col-md-6">
                        <label for="name" className="form-label">Name Of Donor</label>
                        <input type="text" className="form-control" id="name" placeholder="Donor Name" />
                    </div>
                    <div className="col-md-6">
                        <label for="time" className="form-label">When You Can Come</label>
                        <input type="datetime-local" className="form-control" id="time" />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="District - UpaZila" />
                    </div>

                    <div className="col-5">
                        <label for="phone" className="form-label">Phone No.</label>
                        <input type="tel" className="form-control" id="phone" placeholder="01XXXXXXXXX" />
                    </div>
                    <div className="col-4">
                        <label for="add-phone" className="form-label">Additional Phone No.</label>
                        <input type="tel" className="form-control" id="add-phone" placeholder="01XXXXXXXXX (additional)" />
                    </div>
                    <div className="col-md-3">
                        <label for="age" className="form-label">Date Of Birth</label>
                        <input type="date" className="form-control" id="age" />
                    </div>

                    <div className="col-md-4">
                        <label for="inputState" className="form-label">Blood Group</label>
                        <select id="inputState" className="form-select">
                            <option disabled selected>Select</option>
                            <option>A+</option>
                            <option>B+</option>
                            <option>AB+</option>
                            <option>O+</option>
                            <option>A-</option>
                            <option>B-</option>
                            <option>AB-</option>
                            <option>O-</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label for="inputZip" className="form-label">Last Donated</label>
                        <input type="date" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-md-3">
                        <label for="weight" className="form-label">Weight</label>
                        <input type="number" className="form-control" id="weight" placeholder="Your Weight" />
                    </div>
                    <div className="col-md-2">
                        <label for="age" className="form-label">Age</label>
                        <input type="number" className="form-control" id="age" placeholder="Your Age" />
                    </div>
                    <div className="col-12">
                        Gender

                        <div className="form-check form-switch ml-4">
                            <input required className="form-check-input" type="radio" name="flexRadioDefault"
                                id="male" />
                            <label className="form-check-label" for="male">
                                Male
                            </label>
                        </div>
                        <div className="form-check form-switch ml-4">
                            <input required className="form-check-input" type="radio" name="flexRadioDefault"
                                id="female" />
                            <label className="form-check-label" for="female">
                                Female
                            </label>
                        </div>
                        <div className="form-check form-switch ml-4">
                            <input required className="form-check-input" type="radio" name="flexRadioDefault"
                                id="other" />
                            <label className="form-check-label" for="other">
                                Other
                            </label>
                        </div>
                    </div>
                    

                    <div className="col-12">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Please Leave A description" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                            <label for="floatingTextarea2">Please Leave A description</label>
                          </div>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Send Request</button>
                    </div>
                </form>





            </div>

        </div>
    </div>
</div>

            
            
        </>
    )
}

export default SingleRequest
