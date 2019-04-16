import React, { Component } from 'react';

import './Bannercrousel.scss';
import Slider from "react-slick";
// import { settings } from 'cluster';
export default class Bannercrousel extends Component {
  render() {
    const settings={
              slidesToShow: 1,
        slidesToScroll:1,
        fade:true,
        arrows:true,
        // dots:true,
    }
    return (
        <div class="banner">
        
        <div class="wrap">
            <Slider id="slider" {...settings}>
              <div class="slide slide1 ">
                <div class="slide-content">
                    <p class="first"><i>I LOVE THIS IDEA</i></p>
                    <p class="second">Cover up front of book and<br /> leave summary</p> 
                   
               </div>
              </div>
              <div class="slide slide2 tohide">
                <div class="slide-content">
                    <p class="third">I LOVE THIS IDEA</p>
                    <p class="forth">Cover up front of book and<br /> leave summary</p> 
      
                </div>
              </div>
             
            </Slider>
          
          </div>
      



      
      </div>
    )
  }
}
