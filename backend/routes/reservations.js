const router = require('express').Router();
const adminAuth = require('./varifyToken');

router.get('/reservations', adminAuth, (req, res) => {
    res.json({ 
        reservations: { 
            time: '7pm',
            admin: 'only and admin can see this',
            guests: 3
        } 
    });
});

module. exports = router;
 