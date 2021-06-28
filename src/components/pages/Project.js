import React from "react";
import CardDeck from "react-bootstrap/CardDeck"
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
// import Row from "react-bootstrap/Row";
// import col from "react-bootstrap/Col";
import progressive from './images/progressive.png';
import fitness from './images/fitness.png';
import ecommerce from './images/ecommerce.png';
import dayplan from './images/dayplan.png';
import trippin from './images/trippin.png';
import enlighten from './images/enlighten.png';
import Container from 'react-bootstrap/Container';

function Project() {
  return (
  
   <Container>
     <br/>
     <CardDeck>
  <Card>
    <Card.Body>
      
      <Card.Title>Progressive Budget</Card.Title>
      
      <Image width="200" height="100"
        className='profile justify-content-end'
        alt='profile'
        src={progressive}
        thumbnail
        fluid/>
      
        <Card.Text>
        To help the user plan their expense, this app add income and withdraw expenses.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <a href="https://ancient-fjord-06743.herokuapp.com/">Try it</a>
      </small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Body>
      <Card.Title>Day Planner</Card.Title>
      <Image width="200" height="100"
        className='profile justify-content-end'
        alt='profile'
        src={dayplan}
        thumbnail
        fluid/>
      <Card.Text>
       This App helps you plan your day by keeping your schedule available to you in an App. {' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <a href="https://fierce-cliffs-30189.herokuapp.com/">Let schedule</a>
      </small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Body>
      <Card.Title>E-commerce</Card.Title>
      
      <Image width="200" height="100"
        className='profile justify-content-end'
        alt='profile'
        src={ecommerce}
        thumbnail
        fluid/>
        <Card.Text>
        To help the user plan their expense, this app add income and withdraw expenses.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <a href="https://github.com/mujinga21/E-Commerce.git">See it</a>
      </small>
    </Card.Footer>
  </Card>

</CardDeck>
  
   <br/>

   
     <CardDeck>
     <Card>
    <Card.Body>
      <Card.Title>Fitness tracker</Card.Title>
      <Image width="200" height="100"
        className='profile justify-content-end'
        alt='profile'
        src={fitness}
        thumbnail
        fluid/>
        <Card.Text>
        This app will help you keep track of your work out.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <a href="https://fierce-cliffs-30189.herokuapp.com/">see your workout plan</a>
      </small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Body>
      <Card.Title>Day Trippin</Card.Title>

      <Image width="200" height="100"
        className='profile justify-content-end'
        alt='profile'
        src={trippin}
        thumbnail
        fluid/>
        <Card.Text>
        If you have no plan, this app will help you pick a national park and and restaurant near by.  
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <a href="https://github.com/Joydotcom/Project1">Try it</a>
      </small>
      </Card.Footer>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>Enlighten Me</Card.Title>
    
      <Image width="200" height="100"
        className='profile justify-content-end'
        alt='profile'
        src={enlighten}
        thumbnail
        fluid/>

        <Card.Text>
        Enlighten-Me helps you select an activity near you.  You can go solo or social with a group of friend.  You can share your experience with other members by posting in a blog on the page.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <a href="https://fierce-spire-72565.herokuapp.com/">Try it</a>
      </small>
      </Card.Footer>
  </Card>
</CardDeck>
   </Container>
  );
}

export default Project;
