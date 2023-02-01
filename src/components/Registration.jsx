import axios from 'axios';
import React, { useState } from 'react'
import './Registration.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Registration() {
const [reg,setReg]=useState({role:1})


const InputChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setReg({...reg,[name]:value})
console.log("value====>",reg)
}


const submit=(e)=>{
    e.preventDefault()
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
console.log(reg.mobile_number)
    if(!mailformat.test(reg.email)){
      toast("You have entered an invalid email address !");
    }
    if(!phoneno.test(reg.mobile_number)){
    toast("You have entered an invalid phone number !");
   
      
    }else{
 
      console.log("submit=====>",reg)

      axios.post(`https://maitexa.in/water-delivery-api/api/customer-register`,reg).then(response=>{
        console.log("reponse===>",response)
        const data=response.data
        toast(data.message)
  
  
      })
    }
    
 
   
}





  return (
    <div>
        <section className="h-600 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
      
          <div className="card-body p-4 p-md-5" id="inputreg">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
              Registration Info
            </h3>
            <form className="px-md-2" onSubmit={submit}>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder='Your name'
                  name="name"
                  onChange={InputChange}
                  required
                />
               
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder=' Your Email'
                  name="email"
                  onChange={InputChange}
                  required
                />
               
              </div>
              <div className="form-outline mb-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder='mobile number'
                  name="mobile_number"
                  onChange={InputChange}
                  required
                />
               
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder='Your place'
                  name="place"
                  onChange={InputChange}
                  required
                />
               
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder='Your post'
                  name="post"

                  
                  onChange={InputChange}
                  required
                />
               
              </div>
              <div className="form-outline mb-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder='Your pincode'
                  name="pincode"
                  onChange={InputChange}
                  required
                />
               
              </div>
            <div className="form-outline mb-4">
                <input
                  type="password"
                
                  className="form-control"
                  placeholder='Your password'
                  name="password"
                  onChange={InputChange}
                  required
                />
                  <br></br>
                <div className="form-outline mb-4">
                <input
                  type="text"
             
                  className="form-control"
                  placeholder='Your city'
                  name="city"
                  onChange={InputChange}
                  required
                />
                  <br></br>
               
              <div className="form-outline mb-4">
                <input
                  type="text"
               
                  className="form-control"
                  placeholder='Your role'
                  name="role"
                  value="1"
                  onChange={InputChange}
                  required
                />
                  <br></br>
               
              </div>
               
              </div>
               
              </div>
            
              <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                <div className="col-md-6">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example1w"
                      className="form-control"
                      placeholder='Registration code'
                      onChange={InputChange}
                      name="code"
                    />
                    </div>
                </div>
              </div>
              <button type="submit" className="btn btn-success btn-lg mb-4" id="regsubmit" >
                Submit
              </button>
              <ToastContainer/>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
