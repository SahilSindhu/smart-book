import React, { Component } from 'react';
import Topstrip from '../Topstrip/Topstrip';
import Header from '../Header/Header';
import SecondaryFooter from '../Footer/Secondaryfooter/SecondaryFooter';
import Mainfooter from '../Footer/Mainfooter/Mainfooter';
import LandingPage from '../LandingPage/LandingPage';
import BottomBannerStrip from '../BottomBannerStrip/BottomBannerStrip';
import Mosiac from '../Mosiac/Mosiac'
class Main extends Component{
    render(){
        return(
               <>
                <Topstrip />
                <Header />
                <LandingPage />
                <BottomBannerStrip />
                <Mosiac />
                <SecondaryFooter />
                <Mainfooter />
                
  
           </>
        )
    }
}


export default Main;