/**
 * Class: event_guest.js
 * Description: Will contain all the business logic to get and create programming laguages resources.
 */

const db = require('./databaseconnection');
const config = require('../config');


//GET all event guest records
async function getMulitple() {
    const rows = await db.query(
        `SELECT id_session, date_start, date_end, number_allowed, fk_id_event_session 
         FROM session`
    );

    const data = {
        rows
    };

    return {
        data
    }
}

//POST event guest record
async function create(session) {
    const result = await db.query(
        `INSERT INTO session (date_start, date_end, number_allowed, fk_id_event_session )
         VALUES (?,?,?,?)`,
        [
            session.date_start,
            session.date_end,
            session.number_allowed,
            session.fk_id_event_session

        ]
    );

    let message = 'Error in creating session data.';

    if (result.affectedRows) {
        message = 'Session created sucessfully';
    }

    return {
        message
    };
}

//PUT attendee record
async function update(id, session) {
    const result = await db.query(
        `UPDATE session 
       SET date_start=?, date_end=?, number_allowed=?, fk_id_event_session=?
       WHERE id_session=?`,
        [
            session.date_start,
            session.date_end,
            session.number_allowed,
            session.fk_id_event_session,
            id
        ]
    );

    let message = 'Error in updating session record';

    if (result.affectedRows) {
        message = 'Session record updated successfully';
    }

    return {
        message
    };
}

//DELETE attendee record
async function remove(id) {
    const result = await db.query(
        `DELETE FROM session WHERE id_session = ?`,
        [
            id
        ]);

    let message = 'Error in deleting session record';

    if (result.affectedRows) {
        message = 'Session record deletion sucessfull';
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