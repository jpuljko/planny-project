/**
 * Class: user_error_log.js
 * Description: Will have act as the glue between the URL and the coresponding function in 
 * the service/user_error_log.js
 */

const express = require('express');
const router = express.Router();
const user_error_log = require('../services/user_error_log');

//GET user_error_log
router.get('/', async function (req, res, next) {
    try {
        res.json(await user_error_log.getMultiple());
    } catch (err) {
        console.error(`Error while getting list of user error logs`, err.message);
        next(err);
    }
});

//POST user_error_log
router.post('/', async function (req, res, next) {
    try {
        res.json(await user_error_log.createReport(req.body.user_error_log));
    } catch (err) {
        console.error(`error while creating new  user error logs `, err.message);
        next(err);
    }
});

//PUT user_error_log record
router.put('/:id', async function (req, res, next) {
    try {
        res.json(await user_error_log.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating  user error logs`, err.message);
        next(err);
    }
});

//DELETE user_error_log
router.delete('/', async function (req, res, next) {
    try {
        res.json(await user_error_log.removeLog(req.body.user_error_log));
    } catch (err) {
        console.error(`Error while deleting  user error log record`, err.message);
        next(err);
    }
});

module.exports = router;