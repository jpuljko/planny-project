/**
 * Class: user-error-log.js
 * Description: Will contain all the business logic to get and create programming laguages resources.
 */

const db = require('./databaseconnection');
const config = require('../config');


//GET all user-error-log records
async function getMultiple() {
    const rows = await db.query(
        `SELECT id_error, error_date, type_of_error, message, fk_id_attendee 
         FROM user_error_log`
    );

    const data = {
        rows
    };

    return {
        data
    }
}

//POST user-error-log record
async function createReport(user_error_log) {
    const result = await db.query(
        `INSERT INTO user_error_log (error_date, type_of_error, message,fk_id_attendee   )
         VALUES (?,?,?,?)`,
        [
            user_error_log.error_date,
            user_error_log.type_of_error,
            user_error_log.message,
            user_error_log.fk_id_attendee

        ]
    );

    let message = 'Error in creating user error log data.';

    if (result.affectedRows) {
        message = 'User error log created sucessfully';
    }

    return {
        message
    };
}

//PUT user-error-log record
async function update(id, user_error_log) {
    const result = await db.query(
        `UPDATE user_error_log 
       SET error_date=?, type_of_error=?, message=?, fk_id_attendee=?
       WHERE id_error=?`,
        [
            user_error_log.error_date,
            user_error_log.type_of_error,
            user_error_log.message,
            user_error_log.fk_id_attendee,
            id
        ]
    );

    let message = 'Error in updating user error log record';

    if (result.affectedRows) {
        message = 'User error log record updated successfully';
    }

    return {
        message
    };
}

//DELETE user-error-log record
async function removeLog(user_error_log) {
    const result = await db.query(
        `DELETE FROM user_error_log WHERE id_error = ?`,
        [
            user_error_log
        ]);

    let message = 'Error in deleting user error log record';

    if (result.affectedRows) {
        message = 'User error log record deleted sucessfully';
    }

    return {
        message
    };
}

module.exports = {
    getMultiple,
    removeLog,
    createReport,
    update

}