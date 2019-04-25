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

router.get('/admin-dashboard/new', (req, res) => {
    res.render('new_request')
});

router.get('/admin-dashboard/queue', (req, res) => {
    res.render('request_queue')
});

router.get('/admin-dashboard/approved', (req, res) => {
    res.render('request_approved')
});

router.get('/admin-dashboard/quotations', (req, res) => {
    res.render('request_quotations')
});

router.get('/admin-dashboard/declined', (req, res) => {
    res.render('request_declined')
});


module.exports = router;