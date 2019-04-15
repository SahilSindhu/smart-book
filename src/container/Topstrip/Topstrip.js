import React, { Component } from 'react';
import './Topstrip.scss'
class Topstrip extends Component{
    render(){
        return(
            <div className="container-fluid top-strip-cont">
            <div className="container">
                <div className="row top-strip-row">
               
                    <div className="col-xs-12 top-strip-col-1">
                      <ul className="top-strip-ul top-strip-ul-1">
                        <li className="lang-dropdown-li">
                          <img className="dropdown-toggle" data-toggle="dropdown" src={require('../../assets/img/1.jpg')} alt="image" /> <span className="dropdown-toggle" data-toggle="dropdown">English</span> <i className="dropdown-toggle fa fa-angle-down fa-down-icon" data-toggle="dropdown"></i>
                          <ul className="dropdown-menu  top-strip-dropdown-menu-usd">
                            <li><a tabindex="-1" href="#">ENGLISH</a></li>
                            <li><a tabindex="-1" href="#">GERMAN</a></li>
                            
                        </ul>
                        </li>
                      <li className="dollar-dropdown-li">
                           <span className="dropdown-toggle" data-toggle="dropdown">USD $ </span> <i className="dropdown-toggle fa fa-angle-down fa-down-icon" data-toggle="dropdown"></i>
                
                            <ul className="dropdown-menu  top-strip-dropdown-menu-usd">
                              <li><a tabindex="-1" href="#">EUR</a></li>
                              <li><a tabindex="-1" href="#">DOLLAR</a></li>
                              
                          </ul>
                        </li>
                        <li className="dropdown top-strip-setting">
                
                            <span className="dropdown-toggle" data-toggle="dropdown">Setting <i className="fa fa-angle-down fa-down-icon"></i></span>
                               
                             <ul className="dropdown-menu dropdown-menu-center top-strip-dropdown-menu">
                                    <li><a tabindex="-1" href="#">My Account</a></li>
                                    <li><a tabindex="-1" href="#">My Whishlist</a></li>
                                    
                                    <li><a tabindex="-1" href="#">Checkout</a></li>
                                    <li><a tabindex="-1" href="#">Sign In</a></li>
                                </ul>
                        </li> 
                    </ul>
                    <ul className="top-strip-ul top-strip-ul-2">
                      <li>
                        <i className="fa fa-user"></i><span>My Account</span>
                    </li>
                    <li>
                        <i className="fa fa-heart"></i><span>My Whishlist</span>
                      </li>
                      <li>
                          <i className="fa fa-shopping-cart"></i><span>Checkout</span>
                        </li>
                        <li>
                            <i className="fa fa-key"></i><span>Sign In</span>
                          </li>
                  </ul>
                    </div>
                   
                  </div>
            </div>
            
          </div>
        )
    }
}
export default Topstrip;