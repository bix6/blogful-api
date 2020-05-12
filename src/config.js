module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_TOKEN: process.env.API_TOKEN || 'config-api-token',
    DATABASE_URL: process.env.DATABASE_URL || 'CHECK CONFIG',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'CHECK CONFIG',
}