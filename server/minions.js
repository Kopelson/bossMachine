const express = require('express');
const minionsRouter = express.Router();

module.exports = minionsRouter;

const {getAllFromDatabase} = require('./db');

// GET /api/minions to get an array of all minions.
minionsRouter.get('/', (req, res, next) => {
    console.log('You are requesting minions.')
    const minions = getAllFromDatabase('minions');
    res.status(200).send(minions)
})


// POST /api/minions to create a new minion and save it to the database.
// GET /api/minions/:minionId to get a single minion by id.
// PUT /api/minions/:minionId to update a single minion by id.
// DELETE /api/minions/:minionId to delete a single minion by id.