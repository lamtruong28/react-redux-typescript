import { configureStore } from '@reduxjs/toolkit';
import balanceSlice from '../reducers/balanceSlice'
 
const store = configureStore({
    reducer: {
        balance: balanceSlice.reducer
    },
})

export type AppDispatch = typeof store.dispatch
export  type State = ReturnType<typeof store.getState>

export default store;