/**
 * Class: attendee.js
 * Description: Will contain all the business logic to get and create programming laguages resources.
 */

const db = require('./databaseconnection');
const config = require('../config');


//GET all attendee records
async function getAllAttendees() {
    const rows = await db.query(
        `SELECT id_attendee, first_name, last_name, attendee_password, fk_id_role, mail, username
        FROM attendee`
    );

    const data = {
        rows
    };

    return {
        data
    }
}

//POST attendee record
async function createAttendee(attendee) {
    const result = await db.query(
        `INSERT INTO attendee (first_name, last_name, attendee_password, fk_id_role, mail, username)
        VALUES (?,?,?,?,?,?)`,
        [
            attendee.first_name,
            attendee.last_name,
            attendee.attendee_password,
            attendee.fk_id_role,
            attendee.mail,
            attendee.username
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

//PUT attendee record
async function updateAttendee(attendee) {
    const result = await db.query(
        `UPDATE attendee 
      SET first_name=?, last_name=?, attendee_password=?, fk_id_role=?, mail=?, username=? 
      WHERE id_attendee=?`,
        [
            attendee.first_name,
            attendee.last_name,
            attendee.attendee_password,
            attendee.fk_id_role,
            attendee.mail,
            attendee.username,
            attendee.id_attendee
        ]
    );

    let message = 'Error in updating attendee record';

    if (result.affectedRows) {
        message = 'Attendee record updated successfully';
    }

    return {
        message
    };
}

//DELETE attendee record
async function removeAttendee(attendee) {
    const result = await db.query(
        `DELETE FROM attendee WHERE id_attendee = ?`,
        [
            attendee.id_attendee
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
    getAllAttendees,
    createAttendee,
    updateAttendee,
    removeAttendee
}