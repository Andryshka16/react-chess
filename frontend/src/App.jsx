import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreateRoom, OnlineGame, EmptyRooms, Navbar, Alert } from './Components/'
import Practice from './Components/Practice/Practice'
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
                <Route path='/chess' element={<OnlineGame />} />
                <Route path='/practice' element={<Practice />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
