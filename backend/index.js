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
const rooms = []

io.on('connection', (socket) => {
    connected += 1
    
    socket.emit('userConnected', connected)
    socket.emit('getRooms', rooms)
    
    socket.broadcast.emit('userConnected', connected)

    socket.on('disconnect', () => {
        connected -= 1
    })
    socket.on('createRoom', (room) => {
        socket.broadcast.emit('addRoom', room)
        socket.emit('addRoom', room)
        rooms.push(room)
    })
    socket.on('removeRoom', (id) => {
        socket.broadcast.emit('removeRoom', id)
        socket.emit('removeRoom', id)
    })
})

server.listen(PORT, (error) => {
    if (error) {
        return console.log(error)
    }
    console.log('Server started!')
})
