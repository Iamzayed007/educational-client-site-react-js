import React from 'react';
import {  Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css'

const Courses = (props) => {
  

    return (
  <div>
          <Row xs={1} md={3} className="g-4">
  {
    
    props.courses.map(course=><Course 
      key={course.id}
      course={course}/>)
  }
</Row>
  </div>
    );
};

export default Courses;