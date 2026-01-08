const express = require('express');

const healthRouter = express.Router();

healthRouter.get('/health', (req, res) => {
    res.status(200).send('up');
});

module.exports = {
    healthRouter,
}