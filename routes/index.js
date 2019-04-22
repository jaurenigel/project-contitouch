const express = require("express");
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth');

// redirect to admin login
router.get('/', (req, res) => {
    res.redirect('/admin/login')
});

router.get('/supplier-dashboard', (req, res) => {
    res.render('supplier_dashboard')
});

router.get('/admin-dashboard', ensureAuthenticated , (req, res) => {
    res.render('dashoard')
});

module.exports = router;