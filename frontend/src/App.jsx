import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { io } from 'socket.io-client'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CreateGameForm from './Components/Create room/CreateRoomForm'
import {
    newRoom,
    removeRoom,
    updateRooms
} from './features/empyRooms/emptyRoomsSlice'
import JoinGame from './Components/Join room/EmptyRooms'
import ChessGame from './Components/ChessGame/ChessGame'
import Alert from './Components/Alert/Alert'

const server = 'http://localhost:4000/'
export const socket = io(server)

export default function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        socket.on('addRoom', (room) => {
            dispatch(newRoom(room))
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
            <Alert/>
            <Routes>
                <Route path="/newRoom" element={<CreateGameForm />} />
                <Route path="/public" element={<JoinGame />} />
                <Route path="/chess" element={<ChessGame />} />
            </Routes>
        </BrowserRouter>
    )
}
