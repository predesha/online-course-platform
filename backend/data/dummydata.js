const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'user' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'admin' }
];

const courses = [
  { id: 1, title: 'React Basics', description: 'Learn React from scratch' },
  { id: 2, title: 'Node.js Intro', description: 'Getting started with Node' }
];

const enrollments = [
  { id: 1, userId: 1, courseId: 1 }
];

module.exports = { users, courses, enrollments };

