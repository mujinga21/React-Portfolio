import React from "react";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Contact = () => {
    return (
        <div id='contact'>
        <h1 className='pt-3 text-center font-details-b pb-3'>CONTACT</h1>
        <Jumbotron className='contact-jumbotron'>
        <Row>
        <col className='d-flex justify-content-center flex-wrap'>
        <div className='m-2'>
        <a
        href='mailto:mujinga_9@hotmail.com'
        target='_blank'
        rel='noopener noreferrer'>
        <Button variant='outline-dabger' title='mujinga_9@hotmail.com'><i className='fa-envelope-square'></i>Email</Button>
        
        </a></div>
        <div className='m-2'>
        <a
        href='linkedin.com/in/mujinga-williams-85163393'
        target='_blank'
        rel='noopener noreferrer'>
        <Button variant='outline-dabger' title='My LinkedIn'><i className='fa-envelope-square'></i>LinkedIn</Button>
        </a></div>
        <div className='m-2'>
        <a
        href='https://github.com/mujinga21'
        target='_blank'
        rel='noopener noreferrer'>
        <Button variant='outline-dabger' title='See My Projects Here'><i className='fa-envelope-square'></i>GitHub</Button>
        
        </a></div>
        </col>
        </Row>
 
</Jumbotron>
</div>
    );
  
    };

export default Contact;