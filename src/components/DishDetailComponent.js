import React from 'react';

import { Control, LocalForm, Errors } from 'react-redux-form';

import {   Button, Modal, ModalHeader, ModalBody, Row, Col, Label, Card, CardImg, CardText, CardBody,
        CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';




const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class DishDetail extends React.Component{

    constructor(props){


        super(props);
        this.state= {

            isModalOpen:false
        }
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
       
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
commentForm(){


    return(
<div>
        <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
        <ModalBody>
    

       <LocalForm onSubmit={(values) => this.handleSubmit(values)}>



       <Row className="form-group">
                                <Label htmlFor="username" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".username" id="username" name="username"
                                        placeholder="Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                          <Errors
                                        className="text-danger"
                                        model=".username"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row ClassName= "form-group">
                            <Label htmlFor="rating" md={12}>Rating</Label>

                            <Col md={{size: 12}}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            
                            <Row className="form-group">
                                <Label htmlFor="commentText" md={12}>Your Feedback</Label>
                                <Col md={12}>
                                    <Control.textarea model=".commentText" id="commentText" name="commentText"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>
                                </Col>
                            </Row>
     </LocalForm>
  
</ModalBody>
</Modal>
</div>


    );
}

renderComments(commentList) {
    if (commentList == null) {
        return (<div> </div>)
    }
    const cmnts = commentList.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                </p>
            </li>
        )
    })
    return (
        <div >
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmnts}
            </ul>
            {this.commentForm()}
        </div>
    )
}

RenderCommentsOld(commentList) {
    if (commentList != null)
   return(
     
      
    commentList.map((singlecomment) => {
        return(
            
            <div>
                
         <li key={singlecomment.id}>
           <p> {singlecomment.comment}</p>
           <p>-- {singlecomment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(singlecomment.date)))}</p>  
         
        </li>
        </div>
        );
}
)

    );
   


    else
    return(<div></div>)
   
}


RenderDish(selectedDish) {
    
    if (selectedDish != null)
    {console.log('hi, im here')}
    return(
  
        <Card>
            <CardImg top src={selectedDish.image} alt={selectedDish.name} />
            <CardBody>
              <CardTitle>{selectedDish.name}</CardTitle>
              <CardText>{selectedDish.description}</CardText>
            </CardBody>
        </Card>
     
    );

   
  
}

render(){
    
return (



    <div className="container">
    <div className="row">
        <Breadcrumb>

            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
            <h3>{this.props.dish.name}</h3>
            <hr />
        </div>                
    </div>
    <div className="row">
        <div className="col-12 col-md-5 m-1">
            {this.RenderDish(this.props.dish) }
        </div>
        <div className="col-12 col-md-5 m-1">
            
            {this.renderComments(this.props.comments)}
        
          
          
        </div>
    </div>
    </div>

);
   
   


  
}




}

export default DishDetail