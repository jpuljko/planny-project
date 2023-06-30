const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//API routes
const attendeeRouter = require('./routes/attendee');
const venueRouter = require('./routes/venue');
const payment_infoRouter = require('./routes/payment_info');
const eventRouter = require('./routes/event')
const eventGuestRouter = require('./routes/event_guests');
const sessionRouter = require('./routes/session');
const userErrorLogRouter = require('./routes/user_error_log');
const attendeePersonalEventsRouter = require('./routes/attendee_personal_events');
const userSubscriptionRouter = require("./routes/user_subcribe")

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

//using the URL addresses to perform HTTP requests (GET, POST, PUT, DELETE)
app.use('/event_guests', eventGuestRouter);
app.use('/session', sessionRouter);
app.use('/server/attendee', attendeeRouter);
app.use('/server/event', eventRouter);
app.use('/server/venue', venueRouter);
app.use('/server/payment_info', payment_infoRouter);
app.use('/server/event_guest', eventGuestRouter);
app.use('/server/session', sessionRouter);
app.use('/server/user_error_log', userErrorLogRouter);
app.use('/server/attendeeEvent', attendeePersonalEventsRouter);
app.use('/server/userSubscription', userSubscriptionRouter);

//error handler middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({
        'message': err.message
    });
    return;
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});