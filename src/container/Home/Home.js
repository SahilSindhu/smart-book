import React, { Component } from 'react';
import Topstrip from './components/Topstrip/Topstrip'
import Header from './components/Header/Header';

import LandingPage from './components/LandingPage/LandingPage';
import BottomBannerStrip from './components/BottomBannerStrip/BottomBannerStrip';
import Mosiac from './components/Mosiac/Mosiac';
import BigBookHolder from './components/BigBookHolder/BigBookHolder'

class Home extends Component{
    constructor(){
        super();
        this.state={
            cartData:[],
            price:23,
            quantity:1
          }
    }
    increment=()=>{
        let price=this.state.price;
        let quantity=this.state.quantity;
        price=price+23;
        quantity+=1;
        this.setState({
          price:price,
          quantity:quantity
        })
    }
    decriment=()=>{
      let price=this.state.price;
      let quantity=this.state.quantity;
      price=price-23;
      quantity-=1;
      this.setState({
        price:price,
        quantity:quantity
      })
  }
    cartHandler=()=>{
        document.querySelectorAll('.sell-page-item').forEach((el)=>{
            el.querySelector('.shop-strip').addEventListener('click',(e)=>{
              // console.log(e.target)
              let allchildren=el.children;
              let booktitle=allchildren[1].innerHTML;
              let imgsrc=(allchildren[2].children[0]).getAttribute('src')
              let singleBook=[booktitle,imgsrc]
              let cartData=this.state.cartData;
              cartData.push(singleBook);
              this.setState({
                cartData:cartData
              })
             if(this.state.cartData.length>=1){
               console.log(this.state.cartData)
             }
             
            })
          })
    }
    componentDidMount(){
        this.cartHandler();
    }
    render(){
        return(
               <>
                <Topstrip />
                <Header stateValue={this.state} handleIncrement={this.incriment} handleDecriment={this.decriment}/>
                <LandingPage />
                <BottomBannerStrip />
                <Mosiac />
                <BigBookHolder />
                
  
           </>
        )
    }
}

export default Home;