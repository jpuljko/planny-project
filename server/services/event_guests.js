/**
 * Class: event_guest.js
 * Description: Will contain all the business logic to get and create programming laguages resources.
 */

const db = require('./databaseconnection');
const config = require('../config');


//GET all event guest records
async function getMulitple() {
    const rows = await db.query(
        `SELECT id_event_guest, first_name, last_name, description, fk_id_event 
         FROM event_guests`
    );

    const data = {
        rows
    };

    return {
        data
    }
}

//POST event guest record
async function create(event_guests) {
    const result = await db.query(
        `INSERT INTO event_guests (first_name, last_name, description, fk_id_event )
         VALUES (?,?,?,?)`,
        [
            event_guests.first_name,
            event_guests.last_name,
            event_guests.description,
            event_guests.fk_id_event

        ]
    );

    let message = 'Error in creating event guest data.';

    if (result.affectedRows) {
        message = 'Event guest created sucessfully';
    }

    return {
        message
    };
}

//PUT attendee record
async function update(id, event_guests) {
    const result = await db.query(
        `UPDATE event_guests 
       SET first_name=?, last_name=?, description=?, fk_id_event=?
       WHERE id_event_guest=?`,
        [
            event_guests.first_name,
            event_guests.last_name,
            event_guests.description,
            event_guests.fk_id_event,
            id
        ]
    );

    let message = 'Error in updating event guest record';

    if (result.affectedRows) {
        message = 'Event guest record updated successfully';
    }

    return {
        message
    };
}

//DELETE attendee record
async function remove(id) {
    const result = await db.query(
        `DELETE FROM event_guests WHERE id_event_guest = ?`,
        [
            id
        ]);

    let message = 'Error in deleting event guest record';

    if (result.affectedRows) {
        message = 'Event guest record deletion sucessfull';
    }

    return {
        message
    };
}

module.exports = {
    getMulitple,
    create,
    update,
    remove
}