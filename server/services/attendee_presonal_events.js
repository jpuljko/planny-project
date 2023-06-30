/**
 * Class: attendee.js
 * Description: Will contain all the business logic to get and create programming laguages resources.
 */

const db = require('./databaseconnection');
const config = require('../config');


//GET all attendee records
async function getAllAttendeeEvents() {
    const rows = await db.query(
        `SELECT id_event, event_type, event_name, date_start, date_end, number_allowed, fk_id_venue FROM event join attendee_event ON event.id_event = attendee_event.fk_id_event
        JOIN attendee on attendee_event.fk_id_attendee = attendee.id_attendee where id_attendee = 12`
    );

    const data = {
        rows
    };

    return {
        data
    }
}

//POST attendee record
async function createAttendeeEvent(attendee_event) {
    const result = await db.query(
        `INSERT INTO attendee (fk_id_attendee, fk_id_event)
         VALUES (?,?)`,
        [
            attendee_event.fk_id_attendee,
            attendee_event.fk_id_event
        ]
    );

    let message = 'Error in creating attendee data.';

    if (result.affectedRows) {
        message = 'Attendee created sucessfully';
    }

    return {
        message
    };
}


//DELETE attendee record
async function removeAttendeeEvent(attendee_event) {
    const result = await db.query(
        `DELETE FROM attendee_event WHERE fk_id_attendee = ?`,
        [
            attendee_event.fk_id_attendee
        ]);

    let message = 'Error in deleting attendee record';

    if (result.affectedRows) {
        message = 'Attendee record deletion sucessfull';
    }

    return {
        message
    };
}

module.exports = {
    getAllAttendeeEvents,
    createAttendeeEvent,
    removeAttendeeEvent
}