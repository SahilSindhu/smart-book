import React, { Component } from 'react';
import './Header.scss';
class Header extends Component{
    render(){
        return(
            <header id='header'>

            <div class="container">
            <div class="row top-holder">
                
                <div class="col-sm-12 col-md-3 logo-holder">
                <img src={require('../../assets/img/logo_footer.png')} alt='books-logo' />
                </div>

       
                    <div class="col-sm-12 col-md-6 search-group">
                    <form class="navbar-form">
                        <div class="form-group">
                        <input placeholder="Search our catalog" type="text" class="form-control search-bar" />
                        <button class="btn btn-primary search-button"><span>Search</span></button>
                        </div>
                    </form>
                    </div>
                        {/* <!-- <div class="temp-search">
                            <div class="col-xs-7 col-sm-7 hidden-md hidden-lg search-group">
                                <form class="navbar-form">
                                    <div class="form-group">
                                    <input placeholder="Search our catalog" type="text" class="form-control search-bar">
                                    <button class="btn btn-primary search-button"><i class="fa fa-search"></i></button>
                                    </div>
                                </form>
                                </div>
                        </div> --> */}

      
        <div class="col-sm-12 col-md-3 cart-info">
          <div class="header-cart">
              <div class="cart-para">
                <div class="opencart">
                  <i class="fa fa-opencart"></i>
                </div>
                <div class="cart-content">
                  <p class="info-para">My shoping cart<span class="zero-sign">0</span></p>
                  <p class="dropdown-toggle price-para" data-toggle='dropdown'>$<span class="main-price-show">0.00</span><i class="fa fa-angle-down fa-down-icon"></i><br /><span></span></p>
                  <ul class="dropdown-menu cart-dropdown-menu">
                    <li class="opening-item">
                      <p>Nothing Added Yet<i class="fa fa-shopping-cart"></i></p>
                      
                    </li>
                    <li>
                      <ul class="top-strip-dropdown-menu-cart">

                      </ul>
                    </li>
                    <li><button class="btn cart-button">Checkout</button></li>
                  </ul>
                  {/* <!-- <ul class="dropdown-menu top-strip-dropdown-menu-cart"> -->

                    
                    <!-- <li>
                      <div class="internal-cart-div">
                        <div class="image-div"><img src="./img/testimonial_img.jpg"></div>
                        
                        <div class="title-div"><p>Title</p></div>
                        <div class="mutate-number"><span class="sub-sign">-</span><span class='item-added'>0</span><span class="add-sign">+</span></div>
                        <div class="item-price">0</div>
                      </div>

                    </li> -->
                    
                <!-- </ul> --> */}
                
                
                </div>
                </div>
              {/* <!-- <div class="cart-slide hidecart"><p>23</p></div> --> */}

          </div>

        </div>
    </div>    
</div>

            </header>
            
        )
    }
}

export default Header;