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

// Middlewares
server.use(bodyParser.urlencoded({extended:true})) // faz o parse o conteudo
server.use(bodyParser.json()) // faz o parse do json
server.use(cors())

// ODM mapeamento objeto documento
const Client = restful.model('Client', {
    name: { type: String, required: true }
})

// Rest API
Client.methods(['get', 'post', 'put', 'delete']) //metodos rest
Client.updateOptions({new: true, runValidators: true})//valida o update

// Routes
Client.register(server, '/clients')

//Start Server
server.listen(3000)