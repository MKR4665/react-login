import React from 'react'

function Login() {
  return (
    <div className='parent'>
      <div className="login-page">
        <div className="h11">
        <h1>Sign In</h1>
        </div>
        <form className="login-form">
          <div>
          <label htmlFor="userName">Username: </label>
            <input type="text" id='userName' className="input-form"  placeholder='Enter Your Name' autoComplete='off' required/>
            </div>
            <div>
          <label htmlFor="pass">Password: </label>
            <input type="password" id='pass' className="input-form"  placeholder='Enter Your Password' required/>
            </div>
            <div className="option">
              <input type="checkbox" id='remember' />
              <label htmlFor="remember">Remember </label>
              <a href="#">Forgot Password</a>
            </div>
            <button className='btn-button'>Sign In</button>
        </form>
        <div className='card'>
          <p>You have't signed in yet. <a href="#">Sign Up</a></p>
          <div className='card1'>
            <a href="https://www.google.com/"><img src="../src/assets/Images/google.png" alt="google"  /></a>
            <a href="https://www.facebook.com/"><img src="../src/assets/Images/facebook.png" alt="facebook" /></a>
            <a href="https://www.github.com/"><img src="../src/assets/Images/github.png" alt="github" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
