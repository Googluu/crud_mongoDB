require('dotenv').config();

const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://books.pwynx.mongodb.net/myFirstDatabase',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
}

module.exports = { config };
