/**
 * Class: venue.js
 * Description: Will contain all the business logic to get and create programming laguages resources.
 */

const db = require('./databaseconnection');
const config = require('../config');

async function getAllVenues() {
    const rows = await db.query(
        `SELECT id_venue, venue_name, capacity
     FROM venue`
    );

    const data = {
        rows
    };

    return {
        data
    }
}


//CREATE venue record
async function createVenue(venue) {
    const result = await db.query(
        `INSERT INTO venue (venue_name, capacity)
      VALUES (?,?)`,
        [
            venue.venue_name,
            venue.capacity
        ]
    );

    let message = 'Error in creating venue data.';

    if (result.affectedRows) {
        message = 'Venue created sucessfully';
    }

    return {
        message
    };
}


//UPDATE venue record
async function updateVenue(venue) {
    console.log("ovo je kraj=======================" + venue.venue_name)
    const result = await db.query(
        `UPDATE venue 
       SET venue_name=?, capacity=?
       WHERE id_venue=?`,
        [
            venue.venue_name, venue.capacity, venue.id_venue
        ]
    );

    let message = 'Error in updating venue record';

    if (result.affectedRows) {
        message = 'Venue record updated successfully';
    }

    return {
        message
    };
}

//DELETE venue record
async function removeVenue(id) {
    const result = await db.query(
        `DELETE FROM venue WHERE id_venue = ?`,
        [
            id
        ]);

    let message = 'Error in deleting venue record';

    if (result.affectedRows) {
        message = 'Venue record deleted sucessfully';
    }

    return {
        message
    };
}

module.exports = {
    getAllVenues,
    createVenue,
    updateVenue,
    removeVenue
}