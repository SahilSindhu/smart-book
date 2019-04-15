import React, { Component } from 'react'
import './Bannercrousel.scss'
export default class Bannercrousel extends Component {
  render() {
    return (
        <div class="banner">
        
        <div class="wrap">
            <div id="slider">
              <div class="slide slide1 ">
                <div class="slide-content">
                    <p class="first"><i>I LOVE THIS IDEA</i></p>
                    <p class="second">Cover up front of book and<br /> leave summary</p> 
                   
               </div>
              </div>
              {/* <div class="slide slide2 tohide">
                <div class="slide-content">
                    <p class="third">I LOVE THIS IDEA</p>
                    <p class="forth">Cover up front of book and<br /> leave summary</p> 
      
                </div>
              </div>
              */}
            </div>
          
          </div>
      



      
      </div>
    )
  }
}
