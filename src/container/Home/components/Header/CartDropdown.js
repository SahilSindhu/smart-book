import React, { Component } from 'react'

export default class CartDropdown extends Component {
  render() {
      const cartValue=this.props.cartValue
      
    return (
        <ul className="dropdown-menu cart-dropdown-menu">
           {cartValue.length<1 ? <li className="opening-item">
                 <p>Nothing Added Yet<i className="fa fa-shopping-cart"></i></p>
            
            </li>:
            
             <li>
                <ul className="top-strip-dropdown-menu-cart">
                    {cartValue.map((e)=>{
                    return(<li className="Lorem3">
                        <div className="internal-cart-div">
                        <div className="image-div"><img src={e[1]}/></div>
                        
                        <div className="title-div"><p>{e[0]}</p></div>
                        <div className="mutate-number"><span className="sub-sign">-</span><span className="item-added">1</span><span className="add-sign">+</span></div>
                        <div className="item-price">23</div>
                        </div>
                           
                        </li>
                    )
                    })}
                     <div><button className="btn cart-button">Checkout</button></div>
                </ul>
            </li>
           }
            
           
      </ul>
    )
  }
}
