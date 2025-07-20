const express = require('express');
const router = express.Router();
const courseCtrl = require('../controllers/courseController');

router.get('/', courseCtrl.getAllCourses);
router.get('/:id', courseCtrl.getCourseById);
router.post('/', courseCtrl.addCourse);
router.put('/:id', courseCtrl.updateCourse);
router.delete('/:id', courseCtrl.deleteCourse);

module.exports = router;
