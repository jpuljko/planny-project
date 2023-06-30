/**
 * Class: event.js
 * Description: Will have act as the glue between the URL and the coresponding function in 
 * the service/attendee.js
 */

const express = require('express');
const router = express.Router();
const event = require('../services/event');

//GET attendees
router.get('/', async function (req, res, next) {
    try {
        res.json(await event.getAllEvents());
    } catch (err) {
        console.error(`Error while getting list of events`, err.message);
        next(err);
    }
});

//POST attendee record
router.post('/', async function (req, res, next) {
    try {
        res.json(await event.createEvent(req.body.event));
    } catch (err) {
        console.error(`error while creating new event`, err.message);
        next(err);
    }
});

//PUT attendee record
router.put('/', async function (req, res, next) {
    try {
        res.json(await event.updateEvent(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating event`, err.message);
        next(err);
    }
});

//DELETE programming langugae
router.delete('/', async function (req, res, next) {
    console.log(req.body.event);
    try {
        res.json(await event.removeEvent(req.body.event));
    } catch (err) {
        console.error(`Error while deleting event record`, err.message);
        next(err);
    }
});

module.exports = router;