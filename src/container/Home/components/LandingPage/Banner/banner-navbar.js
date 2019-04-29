import React, { Component } from 'react'
import './bannernavbar.scss';
import { Link, Route, Switch } from 'react-router-dom';
export default class bannernavbar extends Component {
  render() {
    return (
        <nav className="navbar banner-navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
            <div className="navbar-brand">
              <i className="fas fa-headphones-alt"></i>
              <div className="service24">
                <p>Free Support 24/7</p>
                <p>+01-202-555-0181</p>
              </div>
  
            </div>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            
            <ul className="nav navbar-nav navbar-right">
              <li><Link exact to="/">HOME</Link></li>
              <li><Link to="/products">PRODUCTS</Link></li>
              <li><Link to="/legal">LEGAL NOTICE</Link></li>
              <li><Link to="/secure">SECURE PAYMENT</Link></li>
              <li><Link to="/about-us">ABOUT US</Link></li>
            </ul>
            {/* <Route path="/" component={}/> */}
          </div>
        </div>
      </nav>
    )
  }
}
