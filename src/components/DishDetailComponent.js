import React from 'react';

import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


class DishDetail extends React.Component{

constructor(props)
{

    super(props);
    this.state = {
        
    }


}
renderComments(commentList) {
    if (commentList != null)
   return(
      
    commentList.map((singlecomment) => {
        return(
            
            <div>
                
         <li key={singlecomment.id}>
           <p> {singlecomment.comment}</p>
           <p>-- {singlecomment.author} ,{singlecomment.date}</p>  
         
        </li>
        </div>
        );
}
)
    );
    else
    return(<div></div>)
   
}




renderDish(selectedDish) {
    
    if (selectedDish != null)
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
    
   const selectedDish= this.props.SelectedDish;
   
    if (selectedDish != null)
    return(
   
        <div className="row">
             
        <div  className="col-12 col-md-5 m-1">
        
      {this.renderDish(selectedDish)}
        </div>
        <div  className="col-12 col-md-5 m-1">
        <h4>Comments:</h4>
    
       <ul className="list-unstyled">
      {this.renderComments(selectedDish.comments)}
      </ul>
       
          </div>

        </div>
    );
else
    return(
        <div></div>
    );
   


  
}




}

export default DishDetail