const jwt = require('jsonwebtoken');
const JWT_SECRET = 'heyThisIsJwtScretheheheheh';

function auth(req, res, next) {
    const token = localStorage.getItem('token');
    if (!token) return res.status(401).json({ message: 'Token is required' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.id = decoded.id;
        console.log(req.id);
        next();
    } catch (err) {
        res.status(403).json({ message: 'Invalid token' });
    }
}

module.exports = auth;
