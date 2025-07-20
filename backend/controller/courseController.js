const { courses } = require('../data/dummyData');

exports.getAllCourses = (req, res) => {
  res.json(courses);
};

exports.getCourseById = (req, res) => {
  const course = courses.find(c => c.id == req.params.id);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ error: 'Course not found' });
  }
};

exports.addCourse = (req, res) => {
  // This is dummy — no real DB yet
  res.json({ message: 'Course added (dummy)' });
};

exports.updateCourse = (req, res) => {
  res.json({ message: 'Course updated (dummy)' });
};

exports.deleteCourse = (req, res) => {
  res.json({ message: 'Course deleted (dummy)' });
};
