import React, { useState } from "react";
import "./LoginForm.css";
import axios from 'axios';
import {useNavigate} from "react-router-dom";


function LoginForm() {
  const [loginForm, setLoginForm] = useState(true); 
  const[name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/login',{name,email,password})
    .then(result=>{
      console.log(result)
      if(result.data==="Success"){
      navigate('/home')
     }
    })
    .catch(err=> console.log(err))
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/signup',{name,email,password})
    .then(result=>{console.log(result)
      navigate('/home')
    })
    .catch(err=> console.log(err))
  };

  return (
    <div className="login-form-outercontainer">
    <div className="login-form-container">
    <div className="Signup">
        <h1>Welcome!</h1>
        <h4>Don't have an account?</h4>
        <p onClick={() => setLoginForm(!loginForm)}>
          {loginForm ? "Signup" : "Already have an account? Login here"}
        </p>
      </div>
      <div className="login">
        <div className="loginform">
          <h2>{loginForm ? "Login" : "Sign Up"}</h2>
          <form onSubmit={loginForm ? handleLoginSubmit : handleSignupSubmit}>
          <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">{loginForm ? "Login" : "Sign Up"}</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
