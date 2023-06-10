import React from "react";
import '../../styles/login.css'
import Banner from '../assets/login-banner-image.png';
import Logo from '../assets/logo.png';
import googleIcon from '../assets/google-icon.png'
import fbIcon from '../assets/facebook-icon.png'
const Login = () => {
  return (
    <div>
      <section className="login container">
        <div className="left-side">
          <img className="logo-image" src={Logo} />
          <div className="login-form">
            <h2>Login</h2>
            <h5>Access back to your account</h5>
            <form>
              <input type="email" name="email" placeholder="Email Address" />
              <input type="password" name="password" placeholder="Password" />
              <span className="forgot-password">Forgot Password?</span>
              <button>Login</button>
            </form>
            <p className="new-user">
              New User ? <span className="sign-up">Sign Up Account</span>
            </p>
            <span className="login-with">or Login with</span>
            <p className="google-with-fg">
              <img src={googleIcon} />
              <img src={fbIcon} />
            </p>
          </div>
        </div>
        <div className="right-side">
          <img className="login-banner-image" src={Banner} />
        </div>
      </section>
    </div>
  );
};

export default Login;
