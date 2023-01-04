import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { io } from 'socket.io-client'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CreateGameForm from './Components/Create room/CreateRoomForm'
import { newRoom, removeRoom } from './features/empyRooms/emptyRoomsSlice'
import JoinGame from './Components/Join room/EmptyRooms'
import ChessGame from './Components/ChessGame/ChessGame'

export const socket = io('http://localhost:4000/')

export default function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        socket.on('addRoom', (room) => {
            dispatch(newRoom(room))
        })
        socket.on('removeRoom', (id) => {
            dispatch(removeRoom(id))
        })
    }, [socket])

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/createGame" element={<CreateGameForm />} />
                <Route path="/joinGame" element={<JoinGame />} />
                <Route path="/chess" element={<ChessGame />} />
            </Routes>
        </BrowserRouter>
    )
}
