import React, { Component } from 'react';
import Topstrip from '../Topstrip/Topstrip';
import Header from '../Header/Header';
import SecondaryFooter from '../Footer/Secondaryfooter/SecondaryFooter';
import Mainfooter from '../Footer/Mainfooter/Mainfooter';
import LandingPage from '../LandingPage/LandingPage'
class Main extends Component{
    render(){
        return(
               <>
                <Topstrip />
                <Header />
                <LandingPage />
                <SecondaryFooter />
                <Mainfooter />
                
  
           </>
        )
    }
}


export default Main;