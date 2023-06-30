/**
 * Class: attendee.js
 * Description: Will have act as the glue between the URL and the coresponding function in 
 * the service/venue.js
 */

const express = require('express');
const router = express.Router();
const venue = require('../services/venue');

//GET venues
router.get('/', async function (req, res, next) {
    try {
        res.json(await venue.getAllVenues());
    } catch (err) {
        console.error(`Error while getting list of venues`, err.message);
        next(err);
    }
});

//POST attendee record
router.post('/', async function (req, res, next) {
    console.log("this is body venue: " + req.body)
    try {
        res.json(await venue.createVenue(req.body.venue));
    } catch (err) {
        console.error(`error while creating new venue`, err.message);
        next(err);
    }
});

//PUT venue record
router.put('/', async function (req, res, next) {
    console.log("==============" + req.body.venue);
    try {
        res.json(await venue.updateVenue(req.body.venue));
    } catch (err) {
        console.error(`Error while updating vneue`, err.message);
        next(err);
    }
});

//DELETE venue record
router.delete('/', async function (req, res, next) {
    try {
        res.json(await venue.removeVenue(req.params.id));
    } catch (err) {
        console.error(`Error while deleting venue record`, err.message);
        next(err);
    }
});

module.exports = router;