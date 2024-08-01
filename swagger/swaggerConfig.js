const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Student Project Tracking API',
            version: '1.0.0',
            description: 'API for documenting and managing student projects',
        },
    },
    apis: ['./routers/*.js'], // המיקום של קבצי הראוטר שלך
};
const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs,
};