/**
 * Class: session.js
 * Description: Will have act as the glue between the URL and the coresponding function in 
 * the service/session.js
 */

const express = require('express');
const router = express.Router();
const session = require('../services/session');

//GET sesison
router.get('/', async function (req, res, next) {
    try {
        res.json(await session.getMulitple());
    } catch (err) {
        console.error(`Error while getting list of sessions`, err.message);
        next(err);
    }
});

//POST sesison
router.post('/', async function (req, res, next) {
    try {
        res.json(await session.create(req.body));
    } catch (err) {
        console.error(`error while creating new sessions`, err.message);
        next(err);
    }
});

//PUT sesison record
router.put('/:id', async function (req, res, next) {
    try {
        res.json(await session.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating sessions`, err.message);
        next(err);
    }
});

//DELETE sesison
router.delete('/:id', async function (req, res, next) {
    try {
        res.json(await session.remove(req.params.id));
    } catch (err) {
        console.error(`Error while deleting session record`, err.message);
        next(err);
    }
});

module.exports = router;