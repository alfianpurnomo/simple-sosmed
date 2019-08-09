import React, { Component } from 'react'
import classNames from 'classnames'
import { Button, Form, Col } from 'react-bootstrap'

class CommentForm extends Component{
  constructor(props){
      super(props);
      //this.focusHandler = focusHandler;
      this.state = {
              name:'',
              email:'',
              message:''
          
      }
      
  }

  handleChangeInput = (e) =>{
      const { name, value } = e.target;
      this.setState({[name]:value});
      
  }

  handleSubmit = () => {
    let data = this.state;
    this.props.actionAddComment(data);
  }

  render() {
    const { className } = this.props;
    let { name,email,message } = this.state;
    return (
      <Form.Row className={classNames(className, "w-100 m-0")}>
        <Col md={9}>
          <Form.Row className="mb-2">
            <Col>
              <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={this.handleChangeInput}/>
            </Col>
            <Col>
              <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={this.handleChangeInput} />
            </Col>
          </Form.Row>
          <Form.Control type="text" placeholder="Write comment . . ." name="message" value={message} onChange={this.handleChangeInput}/>
        </Col>
        <Col className="d-flex align-items-center">
          <Button className="w-100 h-100" variant="outline-primary" onClick={this.handleSubmit} >
            Send
          </Button>
        </Col>
      </Form.Row>
      )
    }
}

export default CommentForm