import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/"><AiOutlineHome /></a> 

      <div className="search">
        <input type="text"/>
        <button>Search</button>
      </div>
    </nav>
  )
}

export default Navbar
