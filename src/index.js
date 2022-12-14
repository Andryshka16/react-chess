import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import chess from "./features/chess/chessSlice"

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
    reducer: {
        chess,
    }
})

root.render(
    <Provider store={store}>
        <App />
    </Provider>
    
)
