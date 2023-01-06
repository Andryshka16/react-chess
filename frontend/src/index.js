import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { chess, emptyRooms, thisRoom, alert } from './features/'
import './index.css'

const store = configureStore({
    reducer: {
        chess,
        emptyRooms,
        thisRoom,
        alert
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
