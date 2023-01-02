import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { io } from 'socket.io-client'
import Form from './Components/Create game/Form'

export const socket = io('http://localhost:4000/')

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/createGame" element={<Form />} />
            </Routes>
        </BrowserRouter>
    )
}
