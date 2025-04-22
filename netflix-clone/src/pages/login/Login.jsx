import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const login = () => {
  return (
    <div className='login'>
      <img src= {logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>Sign in</h1>
        <form action=""></form>
      </div>


    </div>
  )
}

export default login