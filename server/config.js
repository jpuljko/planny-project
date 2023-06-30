/**
 * Class: config.js
 * Description: Will containg the configuration of the database credentials
 */

const env = process.env;

const config = {
    db: {
        host: env.DB_HOST || 'freedb.tech',
        user: env.DB_USER || 'freedbtech_planny',
        password: env.DB_PASSWORD || 'planny123',
        database: env.DB_NAME || 'freedbtech_plannyProjectDatabaseConnectivity',
    },
}

module.exports = config;