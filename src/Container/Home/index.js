import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from 'react-bootstrap'

import withNavbar from '../../Hoc/withNavbar'
//import Protected from '../../components/Protected/'
import Card from '../../Components/Card/'
// import PostForm from '../../components/PostForm/'
import Post from '../../Components/Card/Post/'
// import PostDetail from '../../components/PostDetail/'
// import Footer from '../../components/Footer/'
import PostLoader from '../../Components/Loader/PostLoader'

import { fetchPost } from '../../_Actions/post'
import { openModal } from '../../_Actions/singelPost'

class Home extends Component {
  componentDidMount() {
    const { fetchPost, post } = this.props
    if (post.data.length === 0) fetchPost()
  }

  // componentWillUnmount() {
  //   this.props.openModal(false)
  // }

  render() {
    const { post } = this.props

    return (
      <>
        <Container>
          <Row>
            <Col md={8}>
              <Card>
                {post.loading && <PostLoader repeat={3} />}
                {post.error && <h3>{post.error}</h3>}
                {post.data.map((data, index) => (
                  <Post key={index} author={data.user} {...data} />
                ))}
              </Card>
            </Col>
            <Col md={4}>
              
              {/* <Footer /> */}
            </Col>
          </Row>
        </Container>
        {/* <PostDetail /> */}
      </>
    )
  }
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPost,
    openModal
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withNavbar(Home))
