import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
    name: "wallet",
    initialState: {
        walletIsConnect: false
    },
    reducers: {
        // write functions here
        connectWallet: state => {
            state.walletIsConnect = true
        },
        disconnectWallet: state => {
            state.walletIsConnect = false
        }
    }
})


// export written functions
export const { connectWallet, disconnectWallet } = walletSlice.actions;

// export reducer
export default walletSlice.reducer;