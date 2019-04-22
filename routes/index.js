const express = require("express");
const router = express.Router();

// redirect to admin login
router.get('/', (req, res) => {
    res.redirect('/admin/login')
});

router.get('/supplier-dashboard', (req, res) => {
    res.render('supplier_dashboard')
});

router.get('/admin-dashboard', (req, res) => {
    res.render('dashoard')
});

module.exports = router;