import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChessBoard, CreateRoom, ChessGame, EmptyRooms, Navbar, Alert } from './Components/'
import useSocketHandlers from './Socket'

function App() {
    useSocketHandlers()

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
