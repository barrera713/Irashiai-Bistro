const jwt = require('jsonwebtoken');


function adminAuth(req, res, next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access denied');

    try{
        const verified = jwt.verify(token, process.env.ADMIN_TOKEN);
        req.admin = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid token');
    }
};


function partnerAuth(req, res, next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access denied');

    try {
        const verified = jwt.verify(token, process.env.PARTNER_TOKEN);
        req.partner = verified
        next();
    } catch (err) {
        res.status(400).send('Invalid token');
    }
};



module.exports = { adminAuth, partnerAuth };
