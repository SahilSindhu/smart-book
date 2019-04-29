import React, { Component } from 'react'
import './Sidebar.scss'

import {DataListItems} from './DataListItems'
import ListItem from './ListItem';
import DropDownListItem from './DropDownListItem';
export default class Sidebar extends Component {
  componentDidMount(){
    document.querySelector('.book-subcategoreis').addEventListener('click',(e)=>{
        e.stopPropagation();
    })
  }
  render() {
    return (
        <div className="hidden-xs hidden-sm col-md-3 main-side-categorie">
        <div className="wrapper">
            <div id='sidebar'>
               
                <div className="btn categories-btn">
                 
                <div className="categories-div">
                <i className="fa fa-bars"></i>  <b>  All categories <i className="fa fa-angle-down fa-down-icon"></i></b>
                </div>
                 
              </div>
  
                <ul className="side-navbar-list">
                  <li className="list-item">
                      <ul className="dropdown">
                          <li className="dropdown-toggle" data-toggle="dropdown"><span>{}{DataListItems.mainListItem[0]}</span><span className="fa fa-angle-right book-arrow-angle"></span></li>
                         
                              
                                <DropDownListItem dropDownListData={DataListItems.dropdownListItem}/>
                            
                        </ul>
                  </li>
                  {DataListItems.mainListItem.map((e,i)=>{
                      if(i!=0){
                        return  <ListItem element={e}/>
                      }
                  })}
             
                </ul>
              </div>
        </div>
    </div>
    )
  }
}
