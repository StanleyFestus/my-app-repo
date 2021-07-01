import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

const Navigation = () => {
  return (
    <>
      <div className="nav">
        <NavLink exact to="/" className="link-item">Home</NavLink>
        <NavLink to="/contact" className="link-item">Contact</NavLink>
        <NavLink to="/experiment" className="link-item">Experiment</NavLink>
      </div>
    </>
  )
}

export default Navigation