const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require('cors')

// Database
mongoose.Promise = global.Promise
//fazendo a conexao
mongoose.connect('mongodb://db/mydb')

//Teste
server.get('/', (req,res,next) => res.send('Backend'))

//Start Server
server.listen(3000)