/**
 * Class: event_guests.js
 * Description: Will have act as the glue between the URL and the coresponding function in 
 * the service/event_guests.js
 */

const express = require('express');
const router = express.Router();
const event_guests = require('../services/event_guests');

//GET event_guests
router.get('/', async function (req, res, next) {
    try {
        res.json(await event_guests.getMulitple());
    } catch (err) {
        console.error(`Error while getting list of event guests`, err.message);
        next(err);
    }
});

//POST event_guests record
router.post('/', async function (req, res, next) {
    try {
        res.json(await event_guests.create(req.body));
    } catch (err) {
        console.error(`error while creating new event guests`, err.message);
        next(err);
    }
});

//PUT event_guests record
router.put('/:id', async function (req, res, next) {
    try {
        res.json(await event_guests.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating event guests`, err.message);
        next(err);
    }
});

//DELETE event_guests
router.delete('/:id', async function (req, res, next) {
    try {
        res.json(await event_guests.remove(req.params.id));
    } catch (err) {
        console.error(`Error while deleting event guests record`, err.message);
        next(err);
    }
});

module.exports = router;