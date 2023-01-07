export default function handleSocketEvents(socket) {
    // WHEN USER CONNECTS

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
    })

    socket.on('removeRoom', (id) => {
        socket.broadcast.emit('removeRoom', id)
        socket.emit('removeRoom', id)
    })

    socket.on('readyToPlayAgain', (id) => {
        socket.to(id).emit('readyToPlayAgain')
        socket.emit('readyToPlayAgain')
    })

    socket.on('unReadyToPlayAgain', (id) => {
        socket.to(id).emit('unReadyToPlayAgain')
        socket.emit('unReadyToPlayAgain')
    })
    socket.on('restart', (id) => {
        socket.to(id).emit('restart')
        socket.emit('restart')
    })
}
