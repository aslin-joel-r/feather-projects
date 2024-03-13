import React, { useState, useEffect } from 'react';
import './style.css'; // Import CSS file for styles
import lock from './lock.png';
import hide from './hide.png'
import person from './person.png'
import view from './view.png'


const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('passwordInput');
    
    if (togglePassword && passwordInput) {
      togglePassword.addEventListener('click', function() {
        const type = passwordVisible ? 'password' : 'text';
        passwordInput.setAttribute('type', type);
        setPasswordVisible(!passwordVisible);
        // Change eye icon based on password visibility
        this.textContent = passwordVisible ? '👁️' : '👁️';
      });
    }
  }, [passwordVisible]); // Run effect whenever passwordVisible changes

  return (
    <div className="container">
      <section>
        <form>
          <div className="form-container">
            <h1>Login</h1>
            <div className="input-group">
            <img src={person} alt="Lock Icon" className="icon" />
             
              <input className="input-box" type="email" placeholder="Email" required />
            </div>
            <div className="input-group">

            <img src={lock} alt="Lock Icon" className="icon" />
              <input id="passwordInput" className="input-box" type="password" placeholder="Password" required />
             
            </div>
            <div className="input-group">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
              <a href="#" id='fp'>Forgot password?</a>
            </div>
            <button className="login" type="submit">Login</button>
            <div className="footer">
              <br/><br/>
              <span>Don't have an account?</span>
              <a href="#">Register</a>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
