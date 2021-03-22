import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Auth.css";
import axios from "../../node_modules/axios";
let token1;

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("token", "testToken123");
    //  props.history.push("/");
     axios.post('http://localhost:8000/api/signin',formData).then(res => {
       token1 = true;
       if(res.data.user.role === 1){
         props.history.push('/NewProduct1');
       }else{
         props.history.push('/');
       }

      console.log("res:",res.data.user.role, "user", res);
      localStorage.setItem("token",res.data.token)
     }).catch(err => {
      //  token1
       console.log(err)
     })
  };

  // if (isAuthenticated) {
  //   return <Redirect to="/" />;
  // }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            value={email}
            onChange={onChange}
            required
          />
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
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/users">Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Login;
export {token1};

// Login.propTypes = {
//   login: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { login })(Login);
