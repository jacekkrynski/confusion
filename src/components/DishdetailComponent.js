import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
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

    renderComments(dish) {
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

    render() {
        const selectedDish = this.props.dish;

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(selectedDish)}
                </div>
            </div>
         );
    }

}

export default DishDetail;