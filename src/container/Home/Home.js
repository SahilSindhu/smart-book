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
          }
    }
    cartHandler(){
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
                <Header cartValue={this.state.cartData}/>
                <LandingPage />
                <BottomBannerStrip />
                <Mosiac />
                <BigBookHolder />
                
  
           </>
        )
    }
}

export default Home;