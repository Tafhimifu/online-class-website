import React from 'react';
import {Card,Button} from 'react-bootstrap';

const Mycourse = (props) => {

   const cart = props.cart;
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return parseFloat(precision);
    }

    return (
        <div className="order">
            <Card>
  
    <Card.Body>
    <Card.Title><h4>Order summary</h4></Card.Title>
    <Card.Text>
    <h4>Courses: {cart.length}</h4>
    <h4>Total Price: ${formatNumber(totalPrice)}</h4>
    </Card.Text>
    <Button variant="warning" >Buy Now</Button>
  </Card.Body>
</Card>
        
            
            
        </div>
    );
};

export default Mycourse;