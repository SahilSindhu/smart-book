import React, { Component } from 'react'
import './bannernavbar.scss'
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
              <li><a href="#">HOME</a></li>
              <li><a href="#">DELIVERY</a></li>
              <li><a href="#">LEGAL NOTICE</a></li>
              <li><a href="#">SECURE PAYMENT</a></li>
              <li><a href="#">ABOUT US</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
