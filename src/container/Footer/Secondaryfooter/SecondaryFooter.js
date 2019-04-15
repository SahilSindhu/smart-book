import React, { Component } from 'react';
import './SecondaryFooter.scss'
class SecondaryFooter extends Component{
    render(){
        return(
            <div className="container">
                    <div className="row connect-info">
                        
                        <div className="col-xs-12 col-sm-6 col-md-3 address-info">
                        <div className="footer-logo">
                            <img src={require('../../../assets/img/logo_footer.png')} alt="img" />
                        </div>
                        <div className="address">
                            <p>Address:<span>Lorem ipsum dolor sit amet consectetur.</span></p>
                            <p>Telephone:<span><a href="tel:+6494461709">+91-9820998672</a></span></p>
                            <p>Email:<span>uchiha@konaha.com</span></p>
                        </div>
                        </div>
                        <div className="col-xs-12 forhidingfooter">
                            <button className="btn btn-default products">Products</button>
                            <button className="btn btn-default company">our company</button>
                        
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 products-info">
                        <h4 className="footer-heading footer-heading-products">Products</h4>
                        <ul className="products-ul">
                            <li>Price Drop</li>
                            <li>New Product</li>
                            <li>Best Sales</li>
                            <li>Sitemap</li>
                            <li>Stores</li>
                            <li>Login</li>
                        </ul>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 company-info">
                            <h4 className="footer-heading footer-heading-company">Our Company</h4>
                            <ul className="company-ul">
                            <li>Delivery</li>
                            <li>Legal notice</li>
                            <li>Terms of use</li>
                            <li>About us</li>
                            <li>Secure payment</li>
                            <li>Contact us</li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 form-info">
                        <h4 className="footer-heading">SIGN UP OUR NEWSLETTER</h4>
                        <form>
                            <div className="form-group">
                            
                            <input className="form-control " type="text" placeholder="enter your email" />
                            <button className="btn btn-default">Subscribe</button>
                            </div>
                        </form>
                        <p>STAY CONNECTED</p>
                        <div>
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-twitter"></a>
                            <a href="#" className="fa fa-google"></a>
                            <a href="#" className="fa fa-linkedin"></a>
                            <a href="#" className="fa fa-youtube"></a>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}
export default SecondaryFooter;