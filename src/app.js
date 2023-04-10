const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, { cors: { origin: "*" } })


app.get('/', (req, res) => {
  res.send('API de mensagem com Node.js e Socket.io')
})
io.on('connection', (socket) => {
  console.log('Novo usuário conectado: ' + socket.id)
  


socket.on('message', (data) => {
  console.log('Mensagem recebida: ' + data.message)
  io.emit('message', data)
})
  
socket.on('disconnect', () => {
    console.log('Usuário desconectado: ' + socket.id)
  })
})
  
server.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000')
})