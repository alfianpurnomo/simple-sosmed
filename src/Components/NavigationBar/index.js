import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'
import {
  Container,
  Nav,
  Navbar,
  Dropdown
} from 'react-bootstrap'
import {
  MdHome,
  MdGroup
} from "react-icons/md"

import { logout } from '../../_Actions/Auth'
import './style.scss'



class NavigationBar extends Component {
  render() {
    const { location, } = this.props
    

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