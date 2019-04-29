import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './Header.scss';
import CartDropdown from './CartDropdown'
class Header extends Component{
  constructor(){
    super()
    this.state={

    }
   
    

  }

    render(){
        return(
            <header id='header'>

            <div class="container">
            <div class="row top-holder">
                
                <div class="col-sm-12 col-md-3 logo-holder">
                <img src={require('../../../../assets/img/logo_footer.png')} alt='books-logo' />
                </div>

       
                    <div class="col-sm-12 col-md-6 search-group">
                    <form class="navbar-form">
                        <div class="form-group">
                        <input placeholder="Search our catalog" type="text" class="form-control search-bar" />
                        <button class="btn btn-primary search-button"><span>Search</span></button>
                        </div>
                    </form>
                    </div>
                      

      
        <div class="col-sm-12 col-md-3 cart-info">
          <div class="header-cart">
              <div class="cart-para">
                <div class="opencart">
                  <i class="fa fa-opencart"></i>
                </div>
                <div class="cart-content">
                  <p class="info-para">My shoping cart<span class="zero-sign">0</span></p>
                  <p class="dropdown-toggle price-para" data-toggle='dropdown'>$<span class="main-price-show">0.00</span><i class="fa fa-angle-down fa-down-icon"></i><br /><span></span></p>
                  <CartDropdown stateValue={this.props.stateValue} handleIncrement={this.props.handleIncrement} handleDecriment={this.props.handleDecriment} />
               
                
                </div>
                </div>
             

          </div>

        </div>
    </div>    
</div>

            </header>
            
        )
    }
}

export default Header;