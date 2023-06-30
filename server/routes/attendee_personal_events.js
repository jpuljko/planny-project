/**
 * Class: attendee.js
 * Description: Will have act as the glue between the URL and the coresponding function in 
 * the service/attendeeEvent.js
 */

 const express = require('express');
 const router = express.Router();
 const attendee = require('../services/attendee_presonal_events');
 
 //GET AttendeeEvents
 router.get('/', async function (req, res, next) {
     try {
         res.json(await attendee.getAllAttendeeEvents());
     } catch (err) {
         console.error(`Error while getting list of subscribed events`, err.message);
         next(err);
     }
 });
 
 //POST AttendeeEvent
 router.post('/', async function (req, res, next) {
     try {
         res.json(await attendee.createAttendeeEvent(req.body.user));
     } catch (err) {
         console.error(`Error while subscribing to an event`, err.message);
         next(err);
     }
     console.log('Subscribed!')
 });
 
 //DELETE AttendeeEvent
 router.delete('/', async function (req, res, next) {
     console.log(req.body.user);
     try {
         res.json(await attendee.removeAttendeeEvent(req.body.user));
     } catch (err) {
         console.error(`Error while unsubscribing to an event`, err.message);
         next(err);
     }
 });
 
 module.exports = router;