const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes));
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/enrollments', require('./routes/enrollmentRoutes'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
