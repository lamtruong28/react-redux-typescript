import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
    name: 'bank',
    initialState: {
        balance: 0
    },
    reducers: {
        depositMoney: (state, action: PayloadAction<number>)=>{
            state.balance += action.payload;
        },
        withdrawMoney: (state, action: PayloadAction<number>)=>{
            state.balance -= action.payload;
        },
        bankruptMoney: (state)=>{
            state.balance = 0;
        }
    }
});

export default balanceSlice;
