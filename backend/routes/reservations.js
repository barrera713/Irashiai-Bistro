const router = require('express').Router();
const verify = require('./varifyToken');

router.get('/reserve', verify , (req, res) => {
    res.json({ 
        reservations: { 
            time: '7pm',
            guests: 3
        } 
    });
});

module. exports = router;
 