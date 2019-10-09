const jwt = require('jsonwebtoken');

module.exports = function auth(req, res, next) {
    const token = req.header('Bearer');
    if(!token) return res.status(401).send('Access denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN);
        req.user = verified;
        next();
    } catch (err) {
        res.status(401).send('Invalid token');
    }
}