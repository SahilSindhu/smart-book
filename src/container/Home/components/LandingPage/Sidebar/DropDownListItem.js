import React, { Component } from 'react'

export default class DropDownListItem extends Component {
  render() {
      let dropDownData=this.props.dropDownListData
      console.log(this.props.dropDownListData)
    return (
        <li className="dropdown-menu dropdown-menu-right pull-right book-subcategoreis-dropdown">
        <div className="book-subcategoreis">
                {dropDownData.map((e)=>{
                    return(
                        <ul>
                            {e.map((el,i)=>{
                                return (i==0?<h3>{el}</h3>:
                                <li>
                                    <label>{el}
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                 </li>)
                            })}
                         </ul>
                    )
                })}
        </div>
        </li>

    )
  }
}
