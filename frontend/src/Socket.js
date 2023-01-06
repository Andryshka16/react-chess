import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { newRoom, removeRoom, updateRooms } from './features/emptyRooms/emptyRoomsSlice'
import { handleConnection } from './features/thisRoom/thisRoomSlice'
import { setChess } from './features/chess/chessSlice'
import { io } from 'socket.io-client'

const server = 'http://localhost:4000/'
const socket = io(server)

function useSocketHandlers() {
    const dispatch = useDispatch()

    useEffect(() => {
        socket.on('addRoom', (room) => {
            dispatch(newRoom(room))
        })
        socket.on('handleChessMove', (chess) => {
            dispatch(setChess(chess))
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
    }, [socket])
}

export default useSocketHandlers
export { socket }
