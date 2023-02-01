import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { logincontext } from '../context/Logincontext'

export default function Profile() {
    const {state}=useContext(logincontext)
    console.log(state)
    const[person,setPerson]=useState({})
    console.log("iddd===>",state);
    // const[state,setstate]=useState(localStorage.getItem(JSON.stringify("login")))

    useEffect(()=>{
  
        axios.get(`https://maitexa.in/water-delivery-api/api/get-customer-info/${state}`).then(Response=>{
            console.log("response===>",Response)

            setPerson(Response.data.customer_info)

        })
    },
    [])
  return (
    <div>
        <section style={{"background-color":"#eee"}}>
  <div className="container py-5">
    <div className="row">
      <div className="col">
        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a href="/home">Home</a></li>
            <li className="breadcrumb-item"><a href="#">User</a></li>
            <li className="breadcrumb-item active" aria-current="page">User Profile</li>
          </ol>
        </nav>
      </div>
    </div>
    <div className="row">
      
      <div className="col-lg-7 offset-sm-3">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{person.name}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{person.email}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{person.mobile_number}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Mobile</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{person.mobile_number}
                
                </p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{person.place},
                {person.post},  {person.pincode},  {person.city}</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
