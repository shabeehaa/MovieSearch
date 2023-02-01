import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import Loading from './components/Loading';

// import { useNavigate } from 'react-router';
export default function Home() {

  const[state,setState]=useState({
    value:'',
    loading:false,
  

  })
const[api,setApi]=useState({})

const InputChange=(e)=>{
  const value=e.target.value;
  setState({...state,value})
  console.log("state===>",state)
  e.preventDefault()
}
const formsubmit=(e)=>{
e.preventDefault()
  setState({...state,loading:true})
  console.log("submit===>",state)
  axios.get(`https://www.omdbapi.com/?s=${state.value}&apikey=4b5dda78`).then(response=>{
console.log("movielist===>",response)
const data=response.data
console.log("data===>",data)
setApi(data)
console.log("api====>",api)
setState({...state,
  loading:false})

}).catch((error)=>{
  console.log("error",error);
})
}





return (
   
 
   <React.Fragment>
   <Navbar   change={InputChange} submit={formsubmit} />
 {/* {state.value !==undefined? */}
 {state.loading === true?
  
 <Loading/>: 
  
 <div className='Movie'>
 <Movie value={api} />
   </div>
  
  
   }
  
  
   </React.Fragment>
    );
  }
  

