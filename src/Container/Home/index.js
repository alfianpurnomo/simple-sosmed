import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from 'react-bootstrap'

import withNavbar from '../../Hoc/withNavbar'
// import Protected from '../../components/Protected/'
// import Card from '../../components/Card/'
// import PostForm from '../../components/PostForm/'
// import Post from '../../components/Card/Post/'
// import PostDetail from '../../components/PostDetail/'
// import Footer from '../../components/Footer/'
// import PostLoader from '../../components/Loader/PostLoader'

// import { fetchPost } from '../../actions/post'
// import { openModal } from '../../actions/singlePost'

class Home extends Component {
  // componentDidMount() {
  //   const { fetchPost, post } = this.props
  //   if (post.data.length === 0) fetchPost()
  // }

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

// const mapStateToProps = state => ({ ...state })

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({
//     fetchPost,
//     openModal
//   }, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(withNavbar(Home))

export default withNavbar(Home);