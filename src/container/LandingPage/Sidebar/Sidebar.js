import React, { Component } from 'react'
import './Sidebar.scss'
export default class Sidebar extends Component {
  render() {
    return (
        <div className="hidden-xs hidden-sm col-md-3 main-side-categorie">
        <div className="wrapper">
            <div id='sidebar'>
               
                <div className="btn categories-btn">
                 
                <div className="categories-div">
                <i className="fa fa-bars"></i>  <b>  All categories <i className="fa fa-angle-down fa-down-icon"></i></b>
                </div>
                 
              </div>
  
                <ul className="side-navbar-list">
                  <li className="list-item">
                      <ul className="dropdown">
                          <li className="dropdown-toggle" data-toggle="dropdown"><span>Books</span><span className="fa fa-angle-right book-arrow-angle"></span></li>
                         
                          <li className="dropdown-menu dropdown-menu-right pull-right book-subcategoreis-dropdown">
                          
                              <div className="book-subcategoreis">
                                  <ul>
                                    <li><h3>Product</h3></li>
                                    <li>
                                        <label>Fiction
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                          </label>
                                    </li>
                                    <li>
                                        <label>Fiction
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                          </label>
                                    </li>
                                    <li>
                                        <label>Fiction
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                          </label>
                                    </li>
                                    <li>
                                        <label>Fiction
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                          </label>
                                    </li>
                                  </ul>
                                  <ul>
                                      <li><h3>Product</h3></li>
                                      <li>
                                          <label>Fiction
                                              <input type="checkbox" />
                                              <span className="checkmark"></span>
                                            </label>
                                      </li>
                                      <li>
                                          <label>Fiction
                                              <input type="checkbox" />
                                              <span className="checkmark"></span>
                                            </label>
                                      </li>
                                      <li>
                                          <label>Fiction
                                              <input type="checkbox" />
                                              <span className="checkmark"></span>
                                            </label>
                                      </li>
                                      <li>
                                          <label>Fiction
                                              <input type="checkbox" />
                                              <span className="checkmark"></span>
                                            </label>
                                      </li>
                                    </ul>
                                  <ul>
                                      <li><h3>Product</h3></li>
                                     
                                      <li>
                                          <label>Fiction
                                              <input type="checkbox" />
                                              <span className="checkmark"></span>
                                            </label>
                                      </li>
                                      <li>
                                          <label>Fiction
                                              <input type="checkbox" />
                                              <span className="checkmark"></span>
                                            </label>
                                      </li>
                                      <li>
                                          <label>Fiction
                                              <input type="checkbox"/>
                                              <span className="checkmark"></span>
                                            </label>
                                      </li>
                                      <li>
                                          <label>Fiction
                                              <input type="checkbox"/>
                                              <span className="checkmark"></span>
                                            </label>
                                      </li>
                                    </ul>
      
                               </div>
                          
                           
                        </li>
  
                        </ul>
                  </li>
                    
                    <li className="list-item"><span>Electronics</span></li>
                    <li className="list-item"><span>Toys & Hobbies</span></li>
                    <li className="list-item"><span>Sports & Outdoor</span></li>
                    <li className="list-item"><span>SmartPhone & Tablets</span></li>
                    <li className="list-item"><span>Health & Beauty</span></li>
                    <li className="list-item"><span>Computer & Networking</span></li>
                    <li className="list-item"><span>Jewels</span></li>
                    <li className="list-item"><span>Accesories</span></li>
                    <li className="list-item"><span>More Categories</span></li>
                </ul>
              </div>
        </div>
    </div>
    )
  }
}
