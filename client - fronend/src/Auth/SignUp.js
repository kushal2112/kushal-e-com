import React, { Fragment, useState } from 'react';
import axios from 'axios';

import { Link, Redirect } from 'react-router-dom';
// import { setAlert } from '../../actions/alert';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;
  const xForm = {
    name: {name},
    email: {email},
    password: {password}
  }

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
   
    axios.post('http://localhost:8000/api/signup',formData).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    console.log(formData)
    
    // if (password !== password2) {
    //   setAlert('Passwords do not match', 'danger');
    // } else {
    //   register({ name, email, password });

    // }
  };

  // if (isAuthenticated) {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            value={email}
            onChange={onChange}
          />
          <small className="form-text">
            
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
          />
        </div>
     
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
      <div>
        
        
        </div>
    </Fragment>
  );
};



export default SignUp;

// <div className="form-group">
// <input
//   type="password"
//   placeholder="Confirm Password"
//   name="password2"
//   value={password2}
//   onChange={onChange}
// />
// </div>
