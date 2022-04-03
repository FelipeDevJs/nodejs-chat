const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: "*"}})

app.set('view engine', 'ejs')


app.get('/',(req,res, next)=>{
    res.render('index')
})


io.on('connection', (socket)=>{
    console.log(socket.id)

    socket.on("message", (data)=>{
        socket.broadcast.emit('message', data)
    })

})

server.listen(3000, console.log('🔥 rodando na porta 3000'))
