const { enrollments } = require('../data/dummyData');

exports.enroll = (req, res) => {
  // In real app, you'd add to DB
  res.json({ message: 'Enrolled in course (dummy)' });
};

exports.unenroll = (req, res) => {
  res.json({ message: 'Unenrolled from course (dummy)' });
};

exports.getUserEnrollments = (req, res) => {
  const userEnrolls = enrollments.filter(e => e.userId == req.params.userId);
  res.json(userEnrolls);
};

