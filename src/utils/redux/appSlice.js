import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: 'app',
    initialState:{
        isOpen: "homeOn",
    },
    reducers:{
        toogleMenu:(state)=>{
            if(state.isOpen==="homeOn"){
                state.isOpen = "homeOff"
            }
            else if(state.isOpen==="homeOff"){
                state.isOpen = "homeOn"
            }
        },
        toogleWatchMenu:(state,action)=>{
            if(action.payload==="watchOn"){
                state.isOpen="watchOn"
            }
            else if(action.payload==="watchOff"){
                state.isOpen="watchOff"
            }
        },
        menuSetDefault : (state)=>{
            state.isOpen = "homeOn"
        }
    }
})

export const {toogleMenu,toogleWatchMenu,menuSetDefault} = appSlice.actions;
export default appSlice.reducer;