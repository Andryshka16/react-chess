import express from 'express'
import cors from 'cors'

import { createServer } from 'http'
import { Server } from 'socket.io'

const PORT = process.env.PORT || 4000

const app = express()
app.use(cors())

const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

let connected = 0

io.on('connection', (socket) => {
    connected += 1

    socket.on('disconnect', () => {
        connected -= 1
    })

    socket.emit('userConnected', connected)
    socket.broadcast.emit('userConnected', connected)

    socket.on('createRoom', (message) => {
        socket.broadcast.emit('addRoom', message)
    })
})

server.listen(PORT, (error) => {
    if (error) {
        return console.log(error)
    }
    console.log('Server started!')
})