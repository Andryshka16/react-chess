import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { newRoom, removeRoom, updateRooms } from './features/emptyRooms/emptyRoomsSlice'
import { handleConnection, readyToPlay, setReadyPlayers, unReadyToPlay } from './features/thisRoom/thisRoomSlice'
import { restart, setChess } from './features/chess/chessSlice'
import { io } from 'socket.io-client'
import { setOnlineChess } from './features/online/onlineSlice'

const server = 'http://localhost:4000/'
const socket = io(server)

function useSocketHandlers() {
    const dispatch = useDispatch()

    useEffect(() => {
        socket.on('addRoom', (room) => {
            dispatch(newRoom(room))
        })
        socket.on('handleChessMove', (chess) => {
            dispatch(setOnlineChess(chess))
        })
        socket.on('joinRoom', (id) => {
            dispatch(handleConnection(id))
        })
        socket.on('removeRoom', (id) => {
            dispatch(removeRoom(id))
        })
        socket.on('userConnected', ([rooms, connected]) => {
            dispatch(updateRooms(rooms))
        })
        socket.on('readyToPlayAgain', () => {
            dispatch(readyToPlay())
        })
        socket.on('unReadyToPlayAgain', () => {
            dispatch(unReadyToPlay())
        })
        socket.on('restart', () => {
            dispatch(restart())
            dispatch(setReadyPlayers(0))
        })
    }, [socket])
}

export default useSocketHandlers
export { socket }
