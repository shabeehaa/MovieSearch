import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Card.css'
import Movie from './Movie';
import Navbar from './Navbar';

export default function Card() {
    let { id } = useParams();
    console.log("id===>",id)
    const[items,setItems]=useState()
  
    useEffect(()=>{
      axios.get(`https://www.omdbapi.com/?i=${id}&apikey=4b5dda78`).then(response=>{
       
        const data=response.data
        setItems(data)
        console.log("state===>",items)
      })
    },[])

  return (
    <>
    <div classsingle-navbarName='single-navbar'>
<Navbar/>
</div>

    <div className='card1'>

<div  className='cardcontainer offset-sm-4'>
  <div  className='cardimage'>
  <img src={items?.Poster}  alt="..." className='cardimage'/>
  </div>
  <div id="cardbody1">
    {/* <h5  id="cardtitle">{items?.Title}</h5> */}
    
    <p   id="cardactors">Actors:{items?.Actors}</p>
    <p   className='cardtype offset-sm-6'><b>{items?.Type}</b></p>
    <a href="#" class="btn btn-danger offset-sm-1" id="cardbutton">
      {/* <i class="fa-regular fa-circle-play" style={{fontSize:"36px"}}></i> */}
      <span className='btntext'>Click to watch</span></a>

  </div>
</div>




    </div>
  
    </>
  
  )
}
