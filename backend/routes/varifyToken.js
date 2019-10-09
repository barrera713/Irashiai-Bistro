const jwt = require('jsonwebtoken');

function userAuth(req, res, next) {
    const token = req.header('Bearer');
    if(!token) return res.status(401).send('Access denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN);
        req.user = verified;
        next();
    } catch (err) {
        res.status(401).send('Invalid token');
    }
};


function adminAuth(req, res, next) {
    const token = req.header('Bearer');
    if(!token) return res.status(401).send('Access denied');

    try{
        const verified = jwt.verify(token, process.env.ADMIN_TOKEN);
        req.admin = verified;
        next();
    } catch (err) {
        res.status(401).send('Invalid token');
    }
}

module.exports = userAuth;
module.exports = adminAuth;