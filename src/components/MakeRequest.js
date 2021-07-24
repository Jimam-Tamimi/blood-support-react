import {useEffect, useRef} from 'react'

function MakeRequest(props) {
    return (
        <>
            

            <div className="container pb-4 pt-1 px-3">

                <div className="i-am-giving" style={{display:'flex', justifyContent: 'flex-end', marginRight: '3px'}}>
                    <button id="i-am-taking" className="btn btn-primary   ">I Need Blood For Me</button>
                </div>

                <form id='help-form' action="/make-request/" method="POST" className="row g-3 "
                    enctype="multipart/form-data">
                    <div className="col-md-6">
                        <label for="name" className="form-label">Name Of Taker *</label>
                        <input   required type="text" className="form-control" placeholder="Donor Name" id="name"
                            name="name"/>
                    </div>
                    <div className="col-md-6">
                            <label for="time" className="form-label">When Do You Need Blood *</label>
                            <input   required type="datetime-local" className="form-control" id="time" name="time"/>
                     </div>
                    <div className="col-md-5">
                        <label for="inputAddress" className="form-label">Address *</label>
                        <input   required type="text" className="form-control" id="inputAddress" placeholder="District - UpaZila" name="address"/>
                    </div>

                    <div className="col-md-4">
                        <label for="hospital" className="form-label">Hospital Name *</label>
                        <input   required type="text" className="form-control" id="hospital" placeholder="Hospital Name" name="hospital"/>
                    </div>
                    <div className="col-md-3">
                        <label for="phone" className="form-label">Phone No. *</label>
                        <input   required type="tel" className="form-control" id="phone" placeholder="01XXXXXXXXX"
                    name="number"/>
                    </div>
                    <div className="col-md-4">
                        <label for="date-of-birth" className="form-label">Date Of Birth *</label>
                        <input   required type="date" className="form-control" id="date-of-birth" placeholder=""
                    name="date-of-birth"/>
                    </div>
                    <div className="col-md-4">
                        <label for="add-phone" className="form-label">Additional Phone No.</label>
                        <input   type="tel" className="form-control" id="add-phone"
                        placeholder="01XXXXXXXXX (additional)" name="additional-number" value=""/>
                    </div>


                    <div className="col-md-4">
                        <label for="email" className="form-label">Email *</label>
                        <input   required type="email" className="form-control" id="email"
                    placeholder="name@mail.com (Optional)" name="email"/>
                    </div>
                    <div className="col-md-5">
                        <label for="blood-needed" className="form-label">How Much Blood Do You Need? (ml)*</label>
                        <input   required type="number" className="form-control" id="blood-needed"
                        placeholder="How Much Blood Do You Need? (ml)" name="blood-needed"/>
                    </div>

                    <div className="col-md-4">
                        <label for="blood-group" className="form-label">Blood Group *</label>
                        <select   required name="blood-group" id="blood-group" className="form-select">
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
                        <label for="weight" className="form-label">Weight *</label>
                        <input   required type="number" className="form-control" id="weight"
                        placeholder="PLease enter your weight (Kg)" name="weight"/>
                    </div>

                    <div className="col-12">
                        Gender *

                        <div className="form-check form-switch ml-4">
                            <input   required className="form-check-input" type="radio" name="gender" id="male"
                            value="Male"/>
                            <label className="form-check-label" for="male">
                            Male
                            </label>
                        </div>
                        <div className="form-check form-switch ml-4">
                            <input   required className="form-check-input" type="radio" name="gender" id="fmale"
                            value="Female"/>
                            <label className="form-check-label" for="female">
                            Female
                            </label>
                        </div>
                        <div className="form-check form-switch ml-4">
                            <input   required className="form-check-input" type="radio" name="gender" id="other"
                            value="Other"/>
                            <label className="form-check-label" for="other">
                            Other
                            </label>
                        </div>
                    </div>

                    <div className="mb-1">
                        <label for="formFile" className="form-label">A picture of taker (optional)</label>
                        <input   name="image" className="form-control" type="file" id="formFile"/>
                    </div>

                    <div className="col-12">
                        <div className="form-floating">
                            <textarea   required name="description" className="form-control"
                            placeholder="Please Leave A description" id="floatingTextarea2"
                            style={{height: '150px'}}></textarea>
                            <label for="floatingTextarea2">Please Leave A Small Description. *</label>
                        </div>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary   ">Request</button>
                    </div>

                </form>



            </div>

        </>
    )
}

export default MakeRequest
