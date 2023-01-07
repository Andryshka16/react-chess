import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io'

import handleSocketEvents from './handleSocketEvents.js'

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

io.on('connection', handleSocketEvents)

server.listen(PORT, (error) => {
    if (error) {
        return console.log(error)
    }
    console.log('Server started!')
})
