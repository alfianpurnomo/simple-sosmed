import React, { Component } from 'react'
import './style.css'

import NavigationBar from '../Components/NavigationBar/'

const withNavbar = WrappedComponent => {
  class WithNavbar extends Component {
    render() {
      return (
        <>
          <NavigationBar />
          <div className="main-content">
            <WrappedComponent {...this.props} />
          </div>
        </>
      )
    }
  }

  return WithNavbar
}

export default withNavbar