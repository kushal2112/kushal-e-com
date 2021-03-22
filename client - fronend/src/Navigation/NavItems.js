import React, { Component } from "react";
// import classes from './NavItems.css';
// import NavItem from './NavItem';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Products1 from "../component/Product1/Products1";
import { Route, Link } from "react-router-dom";
// import Auth from '../Authentication/auth';
import Cart from "../component/cart/Cart";
import AdminUI from "../component/Product1/AdminUI";
import Show from "../show";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import AllProducts from "../component/Product1/Products";
import {token1} from "../Auth/Login";

class NavItems extends Component {
  render() {
    let token = localStorage.getItem("token");
    console.log(token, "token");

    const signOut =() =>{
   localStorage.clear();
    }
    return (
      
      <div className="container">
         <button onClick={() => signOut()}>sign out</button>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand">
              <div>
                Smart choice <br />
                E-comm App
              </div>
            </a>
            <div
              className="collapse navbar-collapse text-center ml-5"
              id="navbarNav"
            >
              {token ? (
                <ul className="navbar-nav ml-5">
                  {/* <li className = "nav-item active ml-5"><Link to="/Authentication">Authentication</Link></li> */}
                  <li className="nav-item active ml-5">
                    <Link to="/Cart">Cart</Link>
                  </li>
                  {/* <li className="nav-item active ml-5">
                    <Link to="/NewProduct1">Admin</Link>
                  </li> */}
                  <li className="nav-item active ml-5">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-item active ml-5">
                    <Link to="/show">Order</Link>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav ml-5" >
                  <li className="nav-item active ml-5">
                    <Link to="/users">Sign Up</Link>
                  </li>
                  <li className="nav-item active ml-5">
                    <Link to="/login">Sign In</Link>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </header>
        {/* <Route path="/Authentication" component={Auth} />, */}
        <Route path="/" exact component={AllProducts} />
        <Route path="/Cart" component={Cart} />
        <Route path="/NewProduct1" component={AdminUI} />
        <Route path="/Products1" component={Products1} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={SignUp} />
        <Route path="/show" component={Show} />
      </div>
    );
  }
}

export default NavItems;
