/**
 * Class: payment_info.js
 * Description: Will have act as the glue between the URL and the coresponding function in 
 * the service/attendee.js
 */

const express = require('express');
const router = express.Router();
const payment_info = require('../services/payment_info');

//GET payments
router.get('/', async function (req, res, next) {
    try {
        res.json(await payment_info.getPaymentInfo());
    } catch (err) {
        console.error(`Error while getting list of payment info data`, err.message);
        next(err);
    }
});

//POST payments record
router.post('/', async function (req, res, next) {
    try {
        res.json(await payment_info.postPaymentInfo(req.body.payment));
    } catch (err) {
        console.error(`Error while creating new payment info data`, err.message);
        next(err);
    }
});

//PUT payments record
router.put('/:id', async function (req, res, next) {
    try {
        res.json(await payment_info.updatePaymentInfo(req.body.payment));
    } catch (err) {
        console.error(`Error while updating payment info data`, err.message);
        next(err);
    }
});

//DELETE payments
router.delete('/', async function (req, res, next) {
    try {
        res.json(await payment_info.removePaymentInfo(req.body.payment));
    } catch (err) {
        console.error(`Error while deleting payment info record`, err.message);
        next(err);
    }
});

module.exports = router;