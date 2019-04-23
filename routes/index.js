const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// redirect to admin login
router.get('/', (req, res) => {
    res.redirect('/admin/login')
});

router.get('/supplier-dashboard', ensureAuthenticated, (req, res) => {
    res.render('supplier_dashboard')
});

router.get('/admin-dashboard', ensureAuthenticated , (req, res) => {
    res.render('dashboard')
});

module.exports = router;