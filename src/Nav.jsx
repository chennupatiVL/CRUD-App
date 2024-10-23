import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
    <Link to='/'>Home</Link>
    <Link to='/read/:id'>Read</Link>
    <Link to='/create/:id'>Create</Link>
    <Link to='/update/:id'>Edit</Link>
    </div>
  )
}

export default Nav