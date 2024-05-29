const User = require("../models/user");
var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/auth/google', (req,res)=>{
    res.render("readonlyindex");
}
)


router.get('/auth/google', passport.authenticate(
    'google',
    {
      scope: ['profile', 'email'],

    }
  ));



router.get('/auth/google/logout', (req,res)=>{
    res.render("readonlyindex");
}
)


router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect: '/index',
      failureRedirect: '/readonlyindex'
    }
  ));

module.exports = router;
