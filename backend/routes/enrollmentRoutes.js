const express = require('express');
const router = express.Router();
const enrollCtrl = require('../controllers/enrollmentController');

router.post('/enroll', enrollCtrl.enroll);
router.post('/unenroll', enrollCtrl.unenroll);
router.get('/:userId', enrollCtrl.getUserEnrollments);

module.exports = router;
