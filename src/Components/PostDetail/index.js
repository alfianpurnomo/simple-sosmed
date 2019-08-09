import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'

import { openModal } from '../../_Actions/singelPost'
import { addComment } from '../../_Actions/comment'
import { deleteCommentSuccess } from '../../_Actions/comment'

import Comment from '../Comment/'
import CommentForm from '../Comment/Form/'
import PostLoader from '../Loader/PostLoader'

const PostDetail = ({
  singlePost,
  openModal,
  addComment,
  deleteCommentSuccess
}) => (
  <Modal
    id="post-detail"
    size="lg"
    show={singlePost.open}
    onHide={() => openModal(false)}
  >
    {singlePost.error && <h3 className="w-100 text-center my-5">{singlePost.error}</h3>}
    {singlePost.loading && (
      <Modal.Body className="h-75 text-center">
        <PostLoader long />
      </Modal.Body>
    )}
    {singlePost.data !== null && (
      <>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>{singlePost.data.title}</h4>
            <h5 className="d-flex align-items-center mt-sm-2">
              by&nbsp;-&nbsp;
              <Link to={`/users/${singlePost.data.user.id}`} className="author d-flex align-items-center">
                  {singlePost.data.user.name} <span className="author__username">@{singlePost.data.user.username}</span>
              </Link>
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <p>
            {singlePost.data.body}
          </p>
        </Modal.Body>
        <Modal.Footer className="flex-column">
          <CommentForm actionAddComment={addComment}/>
          <hr className="w-100 mb-0 mt-4" />
          
          {singlePost.data.comments.map(comment => (
            <Comment actionDeleteComment={deleteCommentSuccess} key={comment.id} {...comment} />
          ))}
        </Modal.Footer>
      </>
    )}
  </Modal>
)

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    openModal,
    addComment,
    deleteCommentSuccess
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)