const express = require('express');
const minionsRouter = express.Router();

module.exports = minionsRouter;

const {getAllFromDatabase, addToDatabase, getFromDatabaseById} = require('./db');

//Get minionId from route parameters and assign to req.minion
minionsRouter.param('minionId', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);
    if(minion) {
        req.minion = minion;
        next()
    } else {
        res.status(404).send();
    }
});

// GET /api/minions to get an array of all minions.
minionsRouter.get('/', (req, res, next) => {
    console.log('You are requesting minions.')
    const minions = getAllFromDatabase('minions');
    res.status(200).send(minions)
})


// POST /api/minions to create a new minion and save it to the database.
minionsRouter.post('/', (req, res, next) => {
    console.log('You are posting a new minion to the database');
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
})
// GET /api/minions/:minionId to get a single minion by id.
minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
})
// PUT /api/minions/:minionId to update a single minion by id.
// DELETE /api/minions/:minionId to delete a single minion by id.