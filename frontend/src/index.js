import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { chess, emptyRooms, myRoom, alert } from './features/'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const store = configureStore({
    reducer: {
        chess,
        emptyRooms,
        myRoom,
        alert
    }
})

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
