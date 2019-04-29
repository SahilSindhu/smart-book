import React, { Component } from 'react'
import './Mosiac.scss'
export default class Mosiac extends Component {
  async componentDidMount(){
    let data=await fetch('http://192.168.2.92/wordpress/wp-json');
    console.log(data)
  }
  render() {
    return (
        <div class="container">
        <div class="mosiac">
           <div class="mosiac-item tall">
       
                 <div class='mosiac-item-img'>
                   <img src={require('../../../../assets/img/mosia1.png')} alt="img" />
                 </div>
           </div>
           <div class="mosiac-item large">
               
               <div class='mosiac-item-img'>
                 <img src={require('../../../../assets/img/mosia2.png')} alt="img" />
               </div>
           </div>
           <div class="mosiac-item small">
               
               <div class='mosiac-item-img'>
                 <img src={require('../../../../assets/img/mosiac3.png')} alt="img" />
               </div>
           </div>
           <div class="mosiac-item small">
              
                 <div class='mosiac-item-img'>
                   <img src={require('../../../../assets/img/mosiac4.png')} alt="img" />
                 </div>
           </div>
           <div class="mosiac-item large">
               
                 <div class='mosiac-item-img'>
                   <img src={require('../../../../assets/img/mosiac5.png')} alt="img" />
                 </div>
           </div>
        </div>
        
        </div>
    )
  }
}
