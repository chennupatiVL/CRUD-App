import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  let navigate=useNavigate()
  // let[user,setUser]=useState([]);
  let handleUpdate=(e)=>{
    e.preventDefault()
    axios.put(" http://localhost:3000/users/"+id,data)
    .then((val)=>{
      navigate(-1)
    })
    
  }
  let handleChange=(e)=>{
   
    let{name,value}=e.target
    
    setData({...data,[name]:value})

  }
  
  

  // let[user,setUser]=useState([])
  let[data,setData]=useState([])
  let{id}=useParams()
  useEffect(()=>{
    axios.get(" http://localhost:3000/users/"+id)
    .then((result)=>setData(result.data))
    .catch((error)=>console.log(error))
  },[])
  return (
    <form onSubmit={handleUpdate}>
    
    <div><label htmlFor="name">Name: </label>
    <input type="text" name='name' id='name'onChange={handleChange} value={data.name}/></div><br /><br />

    <div><label htmlFor="age">Age: </label>
    <input type="number" name='age' id='age' value={data.age} onChange={handleChange}/></div><br /><br />

    <div><label htmlFor="place">Place: </label>
    <input type="text" name='place' id='place' value={data.place} onChange={handleChange}/></div><br /><br />

    <div><label htmlFor="dob">Date-Of-Birth: </label>
    <input type="date" name='dob' id='dob' value={data.dob} onChange={handleChange}/></div><br /><br />

    <div> <input type="submit" value="Register" className='createBut' /> 
     <button className='createBut'><Link to="/" >Go Back</Link></button> </div>
     
    </form>
  
  )
}

export default Update