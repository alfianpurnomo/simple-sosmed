import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import './style.scss'
import {
  MdDelete
} from "react-icons/md"

class PostDetail extends Component{
  constructor(props){
    super(props);
    
        
  }

  handleDeleteComment = () => {
    this.props.actionDeleteComment(this.props.id)
    //console.log(this.props.id)
  }

  render(){
    const {name,email,id,body} = this.props;
    return (
      <Row className="comment w-100 m-0 mt-3 mb-2">
        <Col className="p-0 pl-2 d-flex flex-column align-items-start">
          <p className="mb-1">
            <b>{name}</b>&nbsp;
            <span className="comment__email">
              - {email}
            </span>
            <Button onClick={this.handleDeleteComment}>
              <MdDelete className="mr-sm-1" />
            </Button>
          </p>
          <p className="comment__body">
            {body}
          </p>
        </Col>
      </Row>
    )
  }
    
}


export default PostDetail