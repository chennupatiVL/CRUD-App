import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
  let[user,setUser]=useState([])
  let{id}=useParams()
  useEffect(()=>{
    axios.get(" http://localhost:3000/users/"+id)
    .then((result)=>setUser(result.data))
    .catch((error)=>console.log(error))
  },[])
  return (
    <div className='readPage'>
    {/* <h1><span>Id: </span> {user.id}</h1> */}
    <h1><span>Name: </span>{user.name}</h1>
    <h1><span>Age: </span>{user.age}</h1>
    <h1><span>Place: </span>{user.place}</h1>
    <h1><span>Date-Of-Birth: </span>{user.dob}</h1>
    <div className='readd'><button className='readBut'><Link to={`/update/${user.id}`}>edit</Link></button>&nbsp;&nbsp;
    <button className='readBut'><Link to="/">Go Back</Link></button></div>
    
    
    </div>
  )
}

export default Read