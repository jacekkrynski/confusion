import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

     function RenderComments({dish}) {
        if (dish != null && dish.comments != null && dish.comments.length > 0) {
            const commentsConst = dish.comments.map((comment) => {
                return (
                     <li key={comment.id}>
                         <p>{comment.comment}</p>
                         <p>-- {comment.author}, {new Intl.DateTimeFormat('en-GB', {
                                                  year: 'numeric',
                                                  month: 'long',
                                                  day: '2-digit'}).format(new Date(comment.date))}</p>
                     </li>
                 );
            });

            return (
                <div>
                <h4>Comments</h4>
                <ul class = "list-unstyled">
                    {commentsConst}
                </ul>
                </div>
            );
         } else {
            return(
                <div></div>
            );
         }
     }

    const  DishDetail = (props) => {
        const selectedDish = props.dish;

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />

                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments dish={props.dish} />
                </div>
            </div>
         );
    }


export default DishDetail;