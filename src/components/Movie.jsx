import React from 'react'
import './Movie.css'
import { useNavigate } from 'react-router';



export default function Movie({value}) {
  const navigate=useNavigate()
  
  console.log("value====>",value)
const values=value.Search
console.log("values====>",value?.Error)

const carddetails=(imdbID)=>{
  navigate(`/Card/${imdbID}`)
  }

  return (
    <div className='Movielist'>
{value?.Response=="False" ?  <div className='errors'>Ooops!{value.Error}</div> :   
      
    <div className='row'  >
      {values&&values.map((d,key)=>
    <div className='col-sm-3'>
        <div className='seriescontainer'>
        <div class="card" id="cardbody">
  <img class="card-img-top" src={d?.Poster} alt="Card image cap" className='moviecards'/>
  <div className="card-body"  id="list">{console.log(d)}
    <h5 className="card-title offset-sm-3">Movie:{d?.Title}</h5>
    
</div>
<div className='row'>
  <button type="button" class="btn btn-dark offset-sm-4" onClick={()=>carddetails(d.imdbID)}>Click To Watch</button>
  </div>
  <br></br>
</div> 
</div>
</div>
 )} 
</div>

      }
</div>
  
  )
}
