import React from 'react'
import {Link} from "react-router-dom"
import Logo from '../logo.jpg';

export default function WelcomePage() {


  return (
    <div>
      <div className='welcomePage'>
        <h1>Got Salt?</h1>
        <div>
        <Link to="/addfoods" style={{ textDecoration: 'none' }}>
         <img src={Logo} width="300" alt="logo" />
         <button type="button">
          Get Started
          </button>
        </Link>
         
        </div>
        </div>
    </div>
  )
}
