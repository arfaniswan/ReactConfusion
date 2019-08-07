import React from 'react';


    import { Card, CardImg, CardText, CardBody,
        CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
    import { Link } from 'react-router-dom';


class DishDetail extends React.Component{


RenderComments(commentList) {
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
            {this.RenderComments(this.props.comments)}
        </div>
    </div>
    </div>

);
   
   


  
}




}

export default DishDetail