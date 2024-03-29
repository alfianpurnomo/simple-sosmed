import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from 'react-bootstrap'

import withNavbar from '../../Hoc/withNavbar'
import Card from '../../Components/Card/'
import User from '../../Components/User/'
import UserLoader from '../../Components/Loader/UserLoader'

import { fetchUser } from '../../_Actions/user'

class Users extends Component {
  componentDidMount() {
    const { fetchUser, user } = this.props
    if (user.data.length === 0) fetchUser()
  }

  render() {
    const { user } = this.props

    return (
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Card align="left">
              {user.loading && <UserLoader repeat={3} />}
              {user.error && <h3 className="w-100 text-center">{user.error}</h3>}
              {user.data.map(user => (
                <User key={user.id} id={user.id} {...user} />
              ))}
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchUser
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withNavbar(Users))