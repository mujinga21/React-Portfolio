import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profile from './images/profile.jpg';



const About = () => {
  return (
  <div id='about'>
    <div className='about'>
      <h1 className='pt-3 text-center font-details pb-3'>About-Me</h1>
      <Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row className='pt-3 pb-5 align-items-center'>
    <Col xs={12} md={6}>
      <Row className='justify-content-center mb-2 mr-2'>
        <Image
        className='profile justify-content-end'
        alt='profile'
        src={profile}
        thumbnail
        fluid/>
      </Row>
    </Col>
    <Col xs={12} md={6}>
    <Row className=' align-items-start p-2 my details rounded'>Hello I am <strong>&nbsp;Mujinga Williams</strong>
    <br/> I attended Georgia Tech for 12 weeks and completed a full stack web development boot camp.
    <br/>
    I have earn how to use the latest tech stacks such as HTML, CSS, Bootstrap, Node js, Express js, MySQL, Mongodb and React 
    <br/> My goal is to keep client satisfied and to exceed my employer expectations.
    <col className='d-flex justify-content-center flex-wrap'>
      <div>
        <a href='#contact'>
          <button className='m-2' variant='outline-primary'>
            Contact Me
          </button>
        </a>
      </div>
      <div>
        <a
        href='https://drive.google.com/file/d/0BwC9q8M45jqMNjM4THdZMU5tVWFFTENPVzc4bTBJOHN3ZG1V/view?usp=sharing'
        target='_blank'
        rel='noopener noreferrer'>
          <Button className='m-2' variant='outline-success'> Resume</Button>
        </a>
      </div>
      <div>
        <a
        href='https://github.com/mujinga21'
        target='_blank'
        rel='noopener noreferrer'>
          <Button className='m-2' variant='outline-success'> GitHub</Button>
        </a>
      </div>
      <div>
        <a
        href='linkedin.com/in/mujinga-williams-85163393'
        target='_blank'
        rel='noopener noreferrer'>
          <Button className='m-2' variant='outline-success'> linkedIn</Button>
        </a>
      </div>
    </col>
    </Row>
    </Col>
    </Row>
    </Container>
    </div>
    </div>
);
};

export default About;
