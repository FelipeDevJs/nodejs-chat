const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: "*"}})

app.set('view engine', 'ejs')


app.get('/',(req,res, next)=>{
    res.render('index')
})


server.listen(3000, console.log('🔥 rodando na porta 3000'))

io.on('connection', (socket)=>{
    console.log(socket.id)
})