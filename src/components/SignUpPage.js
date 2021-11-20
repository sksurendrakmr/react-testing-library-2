import React, { useState, useEffect } from "react";
import axios from "axios";

export const SignUpPage = () => {
  const [isSignupButtonDisabaled, setIsSignupButtonDisabaled] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (password && confirmPassword && password === confirmPassword) {
      setIsSignupButtonDisabaled(false);
    } else {
      setIsSignupButtonDisabaled(true);
    }
  }, [password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      username: userName,
      email,
      password,
    };
    axios.post("/api/1.0/users", requestBody);
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>UserName</label>
        <input
          id='username'
          type='text'
          placeholder='Enter username'
          name='username'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='text'
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor='confirm-password'>Confirm Password</label>
        <input
          id='confirm-password'
          type='password'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button disabled={isSignupButtonDisabaled}>Sign Up</button>
      </form>
    </>
  );
};
