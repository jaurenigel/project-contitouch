const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// redirect to admin login
router.get('/', (req, res) => {
    res.redirect('/admin/login')
});

router.get('/test', (req, res) => {
    res.render('dashboard')
});

router.get('/admin-dashboard', ensureAuthenticated , (req, res) => {
    res.render('dashboard', {
        name: req.user.name,
        type: req.user.type
    })
    
});

module.exports = router;