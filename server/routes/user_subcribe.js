const express = require('express');
const router = express.Router();
const venue = require('../services/user_subscribe');

//POST attendee record
router.post('/', async function (req, res, next) {
    console.log("this is subscription: " + req.body.subscription)
    try {
        res.json(await venue.createSubscription(req.body.subscription));
    } catch (err) {
        console.error(`error while creating new venue`, err.message);
        next(err);
    }
});

module.exports = router;