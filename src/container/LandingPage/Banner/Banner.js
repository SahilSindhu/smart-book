import React, { Component } from 'react'
import BannerCrousel from './Banner-crousel'
import BannerNavbar from './banner-navbar'
import BannerDropdown from './banner-dropdown'
export default class Banner extends Component {
  render() {
    return (
        <div class="col-xs-12 col-sm-12 col-md-9 content">
            <BannerNavbar />
            <BannerDropdown />
            <BannerCrousel />
        </div>
    )
  }
}
