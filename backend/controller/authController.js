const { users } = require('../data/dummyData');

exports.login = (req, res) => {
  const { email } = req.body;
  const user = users.find(u => u.email === email);

  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ error: 'Invalid email' });
  }
};

exports.logout = (req, res) => {
  res.json({ message: 'Logged out (not really, this is dummy)' });
};
