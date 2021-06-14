import { Link } from "react-router-dom";

import './Logo.scss';

import React from 'react'

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/"><h1>mario</h1></Link>
    </div>
  )
}

export default Logo
