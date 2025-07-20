import React from 'react';
import courses from '../data/courses';
import CourseCard from '../components/courseCard';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Available Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Home;