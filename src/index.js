import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import chessReducer from "./features/chessBoard/boardSlice"

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
	reducer: chessReducer,
});

root.render(
    <Provider store={ store }>
        <App />
    </Provider>
    
)
