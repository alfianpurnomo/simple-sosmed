import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'
import {
  Container,
  Nav,
  Navbar
} from 'react-bootstrap'
import {
  MdHome,
  MdGroup,
  
} from "react-icons/md"

import { logout } from '../../_Actions/Auth'
import storage from '../../_Config/Storage'
import './style.scss'

class ProfileMenu extends Component {
  render() {
    const { children, onClick } = this.props

    return (
      <span
        id="menu"
        onClick={onClick}
        className="nav-link mr-sm-2"
      >
        {children}
      </span>
    )
  }
}

const ProfileMenuItem = ({onClick, children}) => (
  <Link to="/profile" onClick={onClick} className="dropdown-item">
    {children}
  </Link>
)

class NavigationBar extends Component {
  render() {
    const { location, logout } = this.props
    const authenticatedUser = JSON.parse(storage.get('user')) || {name: ''}

    return (
      <Navbar bg="white" variant="light" className="my-navbar">
        <Container>
          <Nav className="mr-auto">
            <Link
              to="/"
              className={classNames(
                "nav-link nav-link__menu",
                { active: location.pathname === '/' }
              )}
            >
              <MdHome className="mr-sm-1" /> Home
            </Link>
            <Link
              to="/users"
              className={classNames(
                "nav-link nav-link__menu",
                { active: location.pathname === '/users' }
              )}
            >
              <MdGroup className="mr-sm-1" /> Users
            </Link>
          </Nav>
          
        </Container>
      </Navbar>
    )
  }
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    logout
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavigationBar))