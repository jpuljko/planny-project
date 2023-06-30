/**
 * Class: payment_info.js
 * Description: Will contain all the business logic to get and create programming laguages resources.
 */

const db = require('./databaseconnection');
const config = require('../config');

async function getPaymentInfo() {
    const rows = await db.query(
        `SELECT fk_id_attendee, credit_card_number, full_name, expiration_date, security_code, country, zip
     FROM payment_info`
    );

    const data = {
        rows
    };

    return {
        data
    }
}

async function postPaymentInfo(payment_info) {
    const result = await db.query(
        `INSERT INTO payment_info (fk_id_attendee, credit_card_number, full_name, expiration_date, security_code, country, zip)
      VALUES (?,?,?,?,?,?,?)`,
        [
            payment_info.fk_id_attendee,
            payment_info.credit_card_number,
            payment_info.full_name,
            payment_info.expiration_date,
            payment_info.security_code,
            payment_info.country,
            payment_info.zip
        ]
    );

    let message = 'Error in creating payment info data.';

    if (result.affectedRows) {
        message = 'Payment info data created sucessfully';
    }

    return {
        message
    };
}

async function updatePaymentInfo(id, payment_info) {
    const result = await db.query(
        `UPDATE payment_info 
       SET fk_id_attendee=?, credit_card_number=?, full_name=?, expiration_date=?, security_code=?, country=?, 
       zip=?
       WHERE fk_id_attendee=?`,
        [
            payment_info.fk_id_attendee, payment_info.credit_card_number, payment_info.full_name,
            payment_info.expiration_date, payment_info.security_code,
            payment_info.country, payment_info.zip, id
        ]
    );

    let message = 'Error in updating payment info record';

    if (result.affectedRows) {
        message = 'Payment info record updated successfully';
    }

    return {
        message
    };
}

//DELETE attendee record
async function removePaymentInfo(id) {
    const result = await db.query(
        `DELETE FROM payment_info WHERE fk_id_attendee = ?`,
        [
            id
        ]);

    let message = 'Error in deleting payment info record';

    if (result.affectedRows) {
        message = 'Payment info record deleted sucessfully';
    }

    return {
        message
    };
}

module.exports = {
    getPaymentInfo,
    postPaymentInfo,
    updatePaymentInfo,
    removePaymentInfo
}