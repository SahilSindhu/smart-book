import React, { Component } from 'react'
import './BigBookHolder.scss';
import Slider from "react-slick";

export default class BigBookHolder extends Component {
    constructor(props){
        super(props);
        this.state={
          cartData:[],
        }
    }
    
    componentDidMount(){
      document.querySelectorAll('.sell-page-item').forEach((el)=>{
        el.querySelector('.shop-strip').addEventListener('click',(e)=>{
          // console.log(e.target)
          let allchildren=el.children;
          let booktitle=allchildren[1];
          let imgsrc=(allchildren[2].children[0]).getAttribute('src')
          let singleBook=[booktitle,imgsrc]
          let cartData=this.state.cartData;
          cartData.push(singleBook);
          this.setState({
            cartData:cartData
          })
         if(this.state.cartData.length>=1){
           console.log('yo gringo')
         }
         
        })
      })
     
    }
  render() {
    const settings={
   // dots: true,
   infinite: false,
            
   slidesToShow: 3,
   slidesToScroll: 3,
   dots:true,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 700,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
    }
    return (
        <div className="col-xs-12 sell-page-column">
        <div className="container-fluid sell-page-crousal">
          <div className="row sell-page-crousal-inner">
            <div className="col-xs-12 sameview first-view">
              <Slider className="sell-page-main" {...settings}> 
                <div>
                    <div className="sell-page-item">
                    <p className="book-design">Lorem2 Lorem2 </p>
                    <p className="book-title">Lorem</p>
                    <div className="book-img">
                    <img class='tohideimg' src={require('../../../../assets/img/book-img-1.jpg')} alt="img"/>
                    <div className="shop-strip"><i className="fa fa-shopping-cart"></i></div>
                    </div>
                    
                    <p className="book-price-info"><span className="cut-price">$23</span>   <span className="real-price">$23</span>    <span className="price-off">$23</span></p>
                    </div>
                    <div className="sell-page-item">
                  <p className="book-design">Lorem2 Lorem2 </p>
                  <p className="book-title">Lorem2</p>
                  <div className="book-img">
                  <img class='tohideimg' src={require('../../../../assets/img/book-img-1.jpg')} alt="img"/>
                  <div className="shop-strip"><i className="fa fa-shopping-cart"></i></div>
                  </div>
                  
                  <p className="book-price-info"><span className="cut-price">$23</span>   <span className="real-price">$23</span>    <span className="price-off">$23</span></p>
                </div>
                </div>
                <div>
                  <div className="sell-page-item">
                    <p className="book-design">Lorem2 Lorem2 </p>
                    <p className="book-title">Lorem3</p>
                    <div className="book-img">
                    <img class='tohideimg' src={require('../../../../assets/img/book-img-1.jpg')} alt="img"/>
                    <div className="shop-strip"><i className="fa fa-shopping-cart"></i></div>
                    </div>
                    
                    <p className="book-price-info"><span className="cut-price">$23</span>   <span className="real-price">$23</span>    <span className="price-off">$23</span></p>
                  </div>
                  <div className="sell-page-item">
                    <p className="book-design">Lorem8 Lorem8 </p>
                    <p className="book-title">Lorem6</p>
                    <div className="book-img">
                    <img class='tohideimg' src={require('../../../../assets/img/book-img-1.jpg')} alt="img"/>
                    <div className="shop-strip"><i className="fa fa-shopping-cart"></i></div>
                    </div>
                    
                    <p className="book-price-info"><span className="cut-price">$23</span>   <span className="real-price">$23</span>    <span className="price-off">$23</span></p>
                  </div>
                  </div>
                  <div>
                    <div className="sell-page-item">
                      <p className="book-design">Lorem2 Lorem2 </p>
                      <p className="book-title">Loreint</p>
                      <div className="book-img">
                      <img class='tohideimg' src={require('../../../../assets/img/book-img-1.jpg')} alt="img"/>
                      <div className="shop-strip"><i className="fa fa-shopping-cart"></i></div>
                      </div>
                      
                      <p className="book-price-info"><span className="cut-price">$23</span>   <span className="real-price">$23</span>    <span className="price-off">$23</span></p>
                    </div>
                    <div className="sell-page-item">
                      <p className="book-design">Lorem2 Lorem2 </p>
                      <p className="book-title">Loremeger</p>
                      <div className="book-img">
                      <img class='tohideimg' src={require('../../../../assets/img/book-img-1.jpg')} alt="img"/>
                      <div className="shop-strip"><i className="fa fa-shopping-cart"></i></div>
                      </div>
                      
                      <p className="book-price-info"><span className="cut-price">$23</span>   <span className="real-price">$23</span>    <span className="price-off">$23</span></p>
                    </div>
                    </div>
                    <div>
                      <div className="sell-page-item">
                        <p className="book-design">Lorem2 Lorem2 </p>
                        <p className="book-title">Lorem2</p>
                        <div className="book-img">
                        <img class='tohideimg' src={require('../../../../assets/img/book-img-1.jpg')}alt="img"/>
                        <div className="shop-strip"><i className="fa fa-shopping-cart"></i></div>
                        </div>
                        
                        <p className="book-price-info"><span className="cut-price">$23</span>   <span className="real-price">$23</span>    <span className="price-off">$23</span></p>
                      </div>
                      <div className="sell-page-item">
                        <p className="book-design">Lorem2 Lorem2 </p>
                        <p className="book-title">Lorem2</p>
                        <div className="book-img">
                        <img class='tohideimg' src={require('../../../../assets/img/book-img-1.jpg')} alt="img"/>
                        <div className="shop-strip"><i className="fa fa-shopping-cart"></i></div>
                        </div>
                        
                        <p className="book-price-info"><span className="cut-price">$23</span>   <span className="real-price">$23</span>    <span className="price-off">$23</span></p>
                      </div>
                      </div>
                      <div>
                        <div className="sell-page-item">
                          <p className="book-design">Lorem2 Lorem2 </p>
                          <p className="book-title">Loremsd</p>
                          <div className="book-img">
                          <img class='tohideimg' src={require('../../../../assets/img/book-img-1.jpg')} alt="img"/>
                          <div className="shop-strip"><i className="fa fa-shopping-cart"></i></div>
                          </div>
                          
                          <p className="book-price-info"><span className="cut-price">$23</span>   <span className="real-price">$23</span>    <span className="price-off">$23</span></p>
                        </div>
                        <div className="sell-page-item">
                          <p className="book-design">Lorem2 Lorem2 </p>
                          <p className="book-title">try</p>
                          <div className="book-img">
                          <img class='tohideimg' src={require('../../../../assets/img/book-img-1.jpg')} alt="img"/>
                          <div className="shop-strip"><i className="fa fa-shopping-cart"></i></div>
                          </div>
                          
                          <p className="book-price-info"><span className="cut-price">$23</span>   <span className="real-price">$23</span>    <span className="price-off">$23</span></p>
                        </div>
                        </div>
                        <div>
                          <div className="sell-page-item">
                            <p className="book-design">Lorem2 Lorem2 </p>
                            <p className="book-title">Lorem2</p>
                            <div className="book-img">
                            <img class='tohideimg' src={require('../../../../assets/img/book-img-1.jpg')} alt="img"/>
                            <div className="shop-strip"><i className="fa fa-shopping-cart"></i></div>
                            </div>
                            
                            <p className="book-price-info"><span className="cut-price">$23</span>   <span className="real-price">$23</span>    <span className="price-off">$23</span></p>
                          </div>
                          <div className="sell-page-item">
                            <p className="book-design">Lorem2 Lorem2 </p>
                            <p className="book-title">Lorem2</p>
                            <div className="book-img">
                            <img class='tohideimg' src={require('../../../../assets/img/book-img-1.jpg')} alt="img"/>
                            <div className="shop-strip"><i className="fa fa-shopping-cart"></i></div>
                            </div>
                            
                            <p className="book-price-info"><span className="cut-price">$23</span>   <span className="real-price">$23</span>    <span className="price-off">$23</span></p>
                          </div>
                          </div>
              
              </Slider>
            </div>
            </div>
            </div>
            </div>
    )
  }
}
