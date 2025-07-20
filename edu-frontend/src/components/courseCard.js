import React from 'react';
import './courseCard.css';
import EnrollButton from './EnrollButton';

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <EnrollButton />
    </div>
  );
}

export default CourseCard;