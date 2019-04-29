import React, { Component } from 'react';
import './Mainfooter.scss'
class Mainfooter extends Component{
    render(){
        return(
            <div className="container-fluid main-footer-container">
                <div className="row">
                <div className="col-xs-12"> 
                    <div className="footer main-footer">
                    <div className="footer-para">
                        <p>suspandise um avtoer gause thee .Menu span rise hokage. tu main raikage the rise</p>
                    </div>
                    <div className="footer-payment-options">
                        <img src={require('../../../../../assets/img/payment.png')}alt="img" />
                    </div>
                    <div className="footer-copyright">
                        <p>Copyright &copy;<span>Postthemes.</span>All right reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}


export default Mainfooter;