// import json-server
const jsonServer = require('json-server')

// create json server application

const server = jsonServer.create()

//set up route for db.json

const router = jsonServer.router("db.json")

//return a middleware

const middleware = jsonServer.defaults()

//set up port number for server app

const port = process.env.PORT || 3000

// use router and middleware in server app

server.use(middleware)
server.use(router)

// to listen the server app in port

server.listen(port,()=>{
    console.log(`Contact server app started at port ${port}`);
})