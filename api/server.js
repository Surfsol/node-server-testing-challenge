const express = require('express')

const server = express()

//bring in routers
const sportsRouter = require('../sports/sports-router');

//bring in middleware, then configure it to server
const configureMiddleware = require('./api-middleware')
configureMiddleware(server)

server.use('/api', sportsRouter);


server.use('/', (req, res) => {
    {res.status(200).json('Its Alive')}
})



module.exports = server