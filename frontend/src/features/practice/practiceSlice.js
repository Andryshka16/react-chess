import { createSlice } from '@reduxjs/toolkit'

import initialState from '../chess/initialState'

const practiceSlice = createSlice({
    name: 'practice',
    initialState,
    reducers: {
        setPracticeChess: (_, { payload }) => {
            return payload
        }
    }
})

export default practiceSlice.reducer

export const { setPracticeChess } = practiceSlice.actions