import express from 'express'
import cors from 'cors'

import { createServer } from 'http'
import { Server } from 'socket.io'

const PORT = process.env.PORT || 4000
const origin = 'http://localhost:3000'

const app = express()
app.use(cors())

const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin,
        methods: ['GET', 'POST']
    }
})

let connected = 0
let rooms = []

io.on('connection', (socket) => {
    connected += 1

    socket.emit('userConnected', [rooms, connected])

    socket.on('disconnect', () => {
        connected -= 1
    })

    socket.on('joinRoom', (id) => {
        socket.join(id)
        socket.to(id).emit('joinRoom', id)
    })

    socket.on('handleChessMove', ([chess, id]) => {
        socket.to(id).emit('handleChessMove', chess)
    })

    socket.on('createRoom', (room) => {
        socket.broadcast.emit('addRoom', room)
        socket.emit('addRoom', room)
        // rooms.push(room)
    })
    socket.on('removeRoom', (id) => {
        socket.broadcast.emit('removeRoom', id)
        socket.emit('removeRoom', id)
        // rooms = rooms.filter((elm) => elm.id !== id)
    })
})

server.listen(PORT, (error) => {
    if (error) {
        return console.log(error)
    }
    console.log('Server started!')
})
