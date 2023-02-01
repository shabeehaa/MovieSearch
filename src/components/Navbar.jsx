import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
export default function Navbar({change,submit}) {
  
  const navigate = useNavigate()
  const profileclick=()=>{
    navigate(`/profile/`)
  
  }
  return (<>
    {/* <div className='navbar'>
      <div className='row'>
        <div className='col-sm-3'>
    <div className='movietext'>
        
    <span className='header'>MOVIE HUB</span>
    </div>
    </div>
    <div className='col-sm-4'>
<div className='searchbox'>
<form onSubmit={submit}>
    <input type="text" placeholder='Search movie' onChange={change} className="input"></input>

</form>
</div>
</div>
<div className='col-sm-2'>
<div className='searchicon'>  <i class="fa-solid fa-magnifying-glass" ></i>
</div>
</div>
<div className='col-sm-3'>

<div className='profileicon'>
<i class="fa-regular fa-user" onClick={profileclick}></i>
</div>
</div>

</div>

</div> */}
   <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
    <a className="navbar-brand" href="#">
        
    <span className='header text-white'>MOVIE HUB</span>
    </a>
   
    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
      <div className="navbar-nav" id='input-box'>
        <form  onSubmit={submit}>
 <input type="text" placeholder='Search a movie...'
 name="city"
 onChange={change}
 ></input>
 </form> 
      </div>
      <div className="search-icon">
      <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>

    <div className='d-flex justify-content-end'>
    <i class="fa-regular fa-user text-white" onClick={profileclick}></i>


    </div>
  </nav>
</>

  )
}
