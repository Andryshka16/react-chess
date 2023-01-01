import Chess from './Components/Chessboard/Chess'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { restart } from './features/chess/chessSlice'

function Preview() {
    const dispatch = useDispatch()
    console.log('restart')
    dispatch(restart())
    return <Chess />
}

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Preview />} />
            </Routes>
        </BrowserRouter>
    )
}
