import React from 'react';
import './Courses.css';
import {Card,CardDeck,Button} from 'react-bootstrap';

const Courses = (props) => {
const {name,img,instructor,price} = props.course


    return (
        <div className="card-deck">
<CardDeck>
  <Card>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        Instructed By:{instructor}
      </Card.Text>
      <Card.Text>
        ${price}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={()=> props.handleAddCourse(props.course)}>Enroll</Button>
    </Card.Footer>
  </Card>
  <Card >
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        Instructed By:{instructor}
      </Card.Text>
      <Card.Text>
        ${price}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={()=> props.handleAddCourse(props.course)}>Enroll</Button>
    </Card.Footer>
  </Card>



  <Card > 
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        Instructed By:{instructor}
      </Card.Text>
      <Card.Text>
        ${price}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={()=> props.handleAddCourse(props.course)}>Enroll</Button>
    </Card.Footer>
  </Card>
  
</CardDeck>
        </div>     
          
       
    
    );
};

export default Courses;