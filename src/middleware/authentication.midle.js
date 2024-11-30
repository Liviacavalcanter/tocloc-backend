const jwt = require('jsonwebtoken');
const authentication = (req, res, next) => {
  const token = req.header('Authorization')?.split('Bearer ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido.' });
    }

    req.user = user;
    next();
  });
}

module.exports = authentication;
