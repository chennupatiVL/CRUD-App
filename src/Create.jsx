import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
  let[data,setData]=useState({
    name:"",
    age:"",
    place:"",
    dob:""
  })
  let navigate=useNavigate()
  let{name,age,place,dob}=data
  let handlesubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/users",data)
    .then((val)=>{

      console.log("success");
      navigate("/")
    })
    console.log(name,place,age,dob);
  }
  let handleChange=(e)=>{
    let{name,value}=e.target
    setData({...data,[name]:value})
  }
  return (
    <form onSubmit={handlesubmit}>
    
    <div><label htmlFor="name">Name: </label>
    <input type="text" name='name' id='name'onChange={handleChange} placeholder='Enter the Name....' value={name}/></div><br /><br />

    <div><label htmlFor="age">Age: </label>
    <input type="number" name='age' id='age' value={age} onChange={handleChange} placeholder='Enter the Age....'/></div><br /><br />

    <div><label htmlFor="place">Place: </label>
    <input type="text" name='place' id='place' value={place} onChange={handleChange} placeholder='Enter the Place....'/></div><br /><br />

    <div><label htmlFor="dob">Dob: </label>
    <input type="date" name='dob' id='dob' value={dob} onChange={handleChange} /></div><br /><br />

    <div><input type="submit" value="Register" className='createBut'/>&nbsp;&nbsp;
    <button className='createBut'><Link to="/">Go Back</Link></button></div>
    </form>
  )
}

export default Create