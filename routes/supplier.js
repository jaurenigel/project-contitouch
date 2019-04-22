const express = require("express");
const router = express.Router();

// supplier login
router.get('/login', (req, res) => {
    res.render('login_supplier')
});

// supplier  register
router.get('/register', (req, res) => {
    res.render('register_supplier')
});

module.exports = router;