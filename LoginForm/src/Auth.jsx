import React, { useState } from 'react'

export default function Auth() {

   const [login, setlogin] = useState()


  return (
    <>
    <div className='main'>
      <div className='container'>
          <button className={login ? 'active' : ''} onClick={() =>setlogin(true)} >Login</button>
          <button className={login ? '' : 'active'} onClick={() =>setlogin(false)} >Sign Up</button>

      </div>
      
      {login ? <>
      <div className='form'>
        <h2>Login Form</h2>
        <input type="email" placeholder='Email id' />
        <input type="password" placeholder='password' />
        <a href="#"> Forget password?</a>
        <button>Login</button>
        <p>Not a Member? </p>
        <a href="" className='a' onClick={()=>{setlogin(false)}}> Signup Now</a>
         

      </div>
      
      
      </> : <>
      <div className='sform'>
        <h2>Sign Up</h2>
        <input type="email" placeholder='Email id' />
        <input type="password" placeholder='password' />
        <input type="password" placeholder='confirm password' />
         

      </div>
      
      
      </>}

     

    </div>

    

    </>
  )
}
