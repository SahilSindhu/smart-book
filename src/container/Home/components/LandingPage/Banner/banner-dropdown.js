import React, { Component } from 'react'
import './bannerdropdown.scss'
export default class bannerdropdown extends Component {
  render() {
    return (
        <div className="dropdown banner-dropdown">
        <div className="dropdown-toggle categories-banner-setting" data-toggle="dropdown">
          <span className="dropdown-toggle" >Categories</span>
          <div className="icon-bar-holder">
              <div className="icon-bar"></div>
              <div className="icon-bar"></div>
              <div className="icon-bar"></div>  
          </div>
        </div>
            <ul className="dropdown-menu dropdown-menu-center banner-dropdown-menu">
                    <li><a tabindex="-1" href="#">My Account</a></li>
                    <li><a tabindex="-1" href="#">My Whishlist</a></li>
                    <li><a tabindex="-1" href="#">My Account</a></li>
                    <li><a tabindex="-1" href="#">My Whishlist</a></li>
                    <li><a tabindex="-1" href="#">My Account</a></li>
                    <li><a tabindex="-1" href="#">My Whishlist</a></li>
                    
                    <li><a tabindex="-1" href="#">Checkout</a></li>
                    <li><a tabindex="-1" href="#">Sign In</a></li>
                </ul>
  </div> 
    )
  }
}
