const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require('passport');

// Admin model

const Admin = require("../models/Admin");

// login route
router.get("/login", (req, res) => {
  res.render("login_admin");
});

// register route
router.get("/register", (req, res) => {
  res.render("register_admin");
});

// register user handler
router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;

  // check if user exist
  Admin.findOne({ email: email }).then(user => {
    if (user) {
      res.render("/admin/register");
    } else {
      const newAdmin = new Admin({
        name,
        email,
        password,
      });

      // hashing password
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
          if (err) throw err;
          // set password hashed
          newAdmin.password = hash;

          // save user to db
          newAdmin.save()
            .then(user => {
                res.redirect("/admin/login");
              })
            .catch(err => console.log(err));
        }),
      );
    }
  });
});

// login handle
router.post("/login", (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/admin-dashboard',
        failureRedirect: '/admin/login'
    })(req, res, next);
  });

//   logout handle
// login handle
router.get("/logout", (req, res) => {
   req.logout();
   res.redirect('/admin/login');
});


module.exports = router;
