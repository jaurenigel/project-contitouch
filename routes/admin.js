const express = require("express");
const router = express.Router();

// login route
router.get('/login', (req, res) => {
    res.render('login_admin')
});

// sign up route
router.get('/register', (req, res) => {
    res.render('register_admin')
});


module.exports = router;