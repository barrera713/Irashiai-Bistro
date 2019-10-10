const router = require('express').Router();
const { adminAuth, partnerAuth } = require('./varifyToken');

router.get('/reservations', adminAuth, (req, res) => {
    res.json({ 
        reservations: { 
            time: '7pm',
            admin: 'only and admin can see this',
            guests: 3
        } 
    });
});


router.get('/only-partners', partnerAuth, (req, res) => {
    res.json({
        partners: 'this is for partners only',
        info: 'idk'
    })
});

module. exports = router;
 