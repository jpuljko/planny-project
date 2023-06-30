/**
 * Class: attendee.js
 * Description: Will have act as the glue between the URL and the coresponding function in 
 * the service/attendee.js
 */

const express = require('express');
const router = express.Router();
const attendee = require('../services/attendee');

//GET attendees
router.get('/', async function (req, res, next) {
    try {
        res.json(await attendee.getAllAttendees());
    } catch (err) {
        console.error(`Error while getting list of attendees`, err.message);
        next(err);
    }
});

router.post('/', async function (req, res, next) {
    try {
        res.json(await attendee.createAttendee(req.body.user));
    } catch (err) {
        console.error(`Error while creating new attendee`, err.message);
        next(err);
    }
    console.log('attendee creation!')
});

//PUT attendee record
router.put('/', async function (req, res, next) {
    console.log(req.body.user);
    try {
        res.json(await attendee.updateAttendee(req.body.user));
    } catch (err) {
        console.error(`Error while updating new attendee`, err.message);
        next(err);
    }
    console.log('attendee update!')
});

//DELETE attendee record
router.delete('/', async function (req, res, next) {
    console.log(req.body.user);
    try {
        res.json(await attendee.removeAttendee(req.body.user));
    } catch (err) {
        console.error(`Error while deleting attendee record`, err.message);
        next(err);
    }
});

module.exports = router;