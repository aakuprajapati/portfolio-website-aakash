/**
 * Refrence for routing Youtube
 * video by Hungry turtle code
 * 
 */
const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {

    res.render("main")
});


router.get('/about', (req,res) => {

    res.render("about")
});

router.get('/main', (req,res) => {

    res.render("main")
});

router.get('/contact', (req,res) => {

    res.render("contact")
});

router.get('/skills', (req,res) => {

    res.render("skills")
});

module.exports = router;