const http = require('http')
const app = require('./app');
const port = process.env.PORT || 7000
const server = http.createServer(app)

// require('dotenv').config({path: __dirname + '/.env'})

server.listen(port , function(){
    console.log('Starting node.js on port ' + port)
})
