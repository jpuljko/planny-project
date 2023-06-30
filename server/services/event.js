/**
 * Class: event.js
 * Description: Will contain all the business logic to get and create event informations.
 */

const db = require('./databaseconnection');
const config = require('../config');


//GET all attendee records
async function getAllEvents() {
    const rows = await db.query(
        `SELECT id_event, event_type, event_name, date_start, date_end, number_allowed 
         FROM event`
    );

    const data = {
        rows
    };

    return {
        data
    }
}

//POST attendee record
async function createEvent(event) {
    const result = await db.query(
        `INSERT INTO event (event_type, event_name, date_start, date_end, number_allowed)
         VALUES (?,?,?,?,?)`,
        [
            event.event_type,
            event.event_name,
            event.date_start,
            event.date_end,
            event.number_allowed
        ]
    );

    let message = 'Error in creating event data.';

    if (result.affectedRows) {
        message = 'Event created sucessfully';
    }

    return {
        message
    };
}

//PUT attendee record
async function updateEvent(id, event) {
    const result = await db.query(
        `UPDATE event 
       SET event_type=?, event_name=?, date_start=?, date_end=?, number_allowed=?
       WHERE id_event=?`,
        [
            event.event_type,
            event.event_name,
            event.date_start,
            event.date_end,
            event.number_allowed,
            id
        ]
    );

    let message = 'Error in updating event record';

    if (result.affectedRows) {
        message = 'Event record updated successfully';
    }

    return {
        message
    };
}

//DELETE attendee record
async function removeEvent(event) {
    console.log("id_event: " + event);
    const result = await db.query(
        `DELETE FROM event WHERE id_event = ?`,
        [
            event
        ]);

    let message = 'Error in deleting event record';

    if (result.affectedRows) {
        message = 'Event record deletion sucessfull';
    }

    return {
        message
    };
}

module.exports = {
    getAllEvents,
    createEvent,
    updateEvent,
    removeEvent
}