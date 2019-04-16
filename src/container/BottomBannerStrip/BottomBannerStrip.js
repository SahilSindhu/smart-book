import React, { Component } from 'react'
import './BottomBannerStrip.scss'
export default class BottomBannerStrip extends Component {
  render() {
    return (
        <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="delivery-strip">
              <div class="delivery-strip-item">
                <div class="strip-item-logo"><p><i class="fa fa-refresh"></i></p></div>
                <div class="strip-item-info">
                     <p class="strip-info-Shiping">Free Shiping Item</p>
                    <p class="strip-info-rating">order over $500</p>
               </div>
              </div>
              <div class="delivery-strip-item">
                 <div class="strip-item-logo"><p><i class="fa fa-refresh"></i></p></div>
                 <div class="strip-item-info">
                      <p class="strip-info-Shiping">Free Shiping Item</p>
                     <p class="strip-info-rating">order over $500</p>
                </div>
               </div>
               <div class="delivery-strip-item">
                   <div class="strip-item-logo"><p><i class="fa fa-refresh"></i></p></div>
                   <div class="strip-item-info">
                        <p class="strip-info-Shiping">Free Shiping Item</p>
                       <p class="strip-info-rating">order over $500</p>
                  </div>
                 </div>
                 <div class="delivery-strip-item">
                     <div class="strip-item-logo"><p><i class="fa fa-refresh"></i></p></div>
                     <div class="strip-item-info">
                          <p class="strip-info-Shiping">Free Shiping Item</p>
                         <p class="strip-info-rating">order over $500</p>
                    </div>
                   </div>
            </div>
          </div>
        </div>
        </div>
    )
  }
}
