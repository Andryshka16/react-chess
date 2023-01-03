import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { io } from 'socket.io-client'
import CreateGameForm from './Components/Create game/CreateForm'
import JoinGame from './Components/Join game/JoinGame'
import { useEffect } from 'react'
import {useDispatch} from "react-redux"
import { createRoom } from './features/rooms/roomsSlice'

export const socket = io('http://localhost:4000/')

export default function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        socket.on('addRoom', (room) => dispatch(createRoom(room)))
    }, [socket])

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/createGame" element={<CreateGameForm />} />
                <Route path="/joinGame" element={<JoinGame/>} />
            </Routes>
        </BrowserRouter>
    )
}
