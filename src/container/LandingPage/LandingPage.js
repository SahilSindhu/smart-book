import React, { Component } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Banner from './Banner/Banner'
export default class LandingPage extends Component {
  render() {
    return (
        <div class="container main-content-container">
            <div class="row main-content">
                <Sidebar />
                <Banner />
            </div>
        </div>
    )
  }
}
