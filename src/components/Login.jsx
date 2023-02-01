import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Link, useNavigate } from 'react-router-dom';
  import { logincontext } from '../context/Logincontext';
  import { useContext } from 'react';

export default function Login() {
  const {setState}=useContext(logincontext)
  // let { id } = useParams();
  const navigate = useNavigate()
     const [login,setLogin]=useState({

    })
   const[logo,setLogo]=useState({

   })


    const Inputchange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
   setLogin({...login,[name]:value})
     console.log("login====>",login)
    }
    const submit=(e)=>{
        e.preventDefault();
        setLogin(login)
        console.log("submit====>",login)
        axios.post(`https://maitexa.in/water-delivery-api/api/login`,login)
        .then(response=>{
         console.log("response====>",response)
         toast(response.data.message)
      
        setLogo(response.data)
      
         localStorage.setItem("login",JSON.stringify(response.data.loginid))
         setState(response.data.loginid)
         
         if(response.data.success === 1) {
          navigate(`/home`) 
        }
      
        })
      
        

    }
  
  return (
<div className='loginconatiner'>
<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div
          className="card text-white"
          style={{ borderRadius: "2rem",backgroundColor:"#bc2a8d"}}
        >
          <div className="card-body p-5 text-center" >
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">


                
                Please enter your login and password!
              </p>
              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  id="typeEmailX"
                  className="form-control form-control-lg"
                  placeholder='Email'
                  name="username"
                  onChange={Inputchange}
                />
                
              </div>
              <div className="form-outline form-white mb-4">
                <input
                  type="password"
                  id="typePasswordX"
                  className="form-control form-control-lg"
                  placeholder='Password'
                  name="password"
            
                  onChange={Inputchange}
                />
             
              </div>
              <p className="small mb-5 pb-lg-2">
                <a className="text-white-50" href="#!">
                  Forgot password?
                </a>
                <Link to="/reg">Registration</Link>
              </p>
              <button onClick={submit}

              
                className="btn btn-outline-light btn-lg px-5"
                type="submit"
              >
                  <ToastContainer/>
                Login
              </button>
              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white">
                  <i className="fab fa-facebook-f fa-lg" />
                </a>
                <a href="#!" className="text-white">
                  <i className="fab fa-twitter fa-lg mx-4 px-2" />
                </a>
                <a href="#!" className="text-white">
                  <i className="fab fa-google fa-lg" />
                </a>
              </div>
            </div>
            <div>
              <p className="mb-0">
                Don't have an account?{" "}

                <a href="#!" className="text-white-50 fw-bold">
                  Sign Up
                </a>
              </p>
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
