import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState(true); // State to toggle between login and signup forms
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here, e.g., call an authentication API
    console.log("Logging in with:", email, password);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Implement signup logic here, e.g., call an API to create a new user
    console.log("Signing up with:", email, password);
  };

  return (
    <div className="l">
    <div className="login-form-container">
      <div className="login">
        <div className="loginform">
          <h2>{loginForm ? "Login" : "Sign Up"}</h2>
          <form onSubmit={loginForm ? handleLoginSubmit : handleSignupSubmit}>
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
      <div className="Signupdiv">
      <div className="Signup">
        <h1>Welcome!</h1>
        <h4>Don't have an account?</h4>
        <p onClick={() => setLoginForm(!loginForm)}>
          {loginForm ? "Signup" : "Already have an account? Login here"}
        </p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
