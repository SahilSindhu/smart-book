import React, { Component } from 'react';
import Topstrip from '../Topstrip/Topstrip';
import Header from '../Header/Header';
import SecondaryFooter from '../Footer/Secondaryfooter/SecondaryFooter'
import Mainfooter from '../Footer/Mainfooter/Mainfooter'
class Main extends Component{
    render(){
        return(
            <html>
               
                <Topstrip />
                <Header />
                <SecondaryFooter />
                <Mainfooter />
              
  
            </html>
        )
    }
}


export default Main;