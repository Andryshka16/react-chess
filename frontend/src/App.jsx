import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { io } from 'socket.io-client'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { newRoom, removeRoom, updateRooms } from './features/emptyRooms/emptyRoomsSlice'
import { handleConnection } from './features/thisRoom/thisRoomSlice'
import { setChess } from './features/chess/chessSlice'
import { ChessBoard, CreateRoom, ChessGame, EmptyRooms, Navbar, Alert } from './Components/'

const server = 'http://localhost:4000/'
const socket = io(server)

function App() {
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

    return (
        <BrowserRouter>
            <Navbar />
            <Alert />
            <Routes>
                <Route path='/newRoom' element={<CreateRoom />} />
                <Route path='/public' element={<EmptyRooms />} />
                <Route path='/chess' element={<ChessGame />} />
                {/* <Route path="/practice" element={<ChessBoard/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App
export { socket }
