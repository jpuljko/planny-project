//CREATE subscription record
async function createSubscription(subcription) {
    const result = await db.query(
        `INSERT INTO attendee_event (venue_name, capacity)
      VALUES (?,?)`,
        [
            subcription.fk_id_attendee_event,
            venue.fk_id_event_attendee
        ]
    );

    let message = 'Error while subscribing user.';

    if (result.affectedRows) {
        message = 'User Subscribed sucessfully';
    }

    return {
        message
    };
}

module.exports = {
    createSubscription
}