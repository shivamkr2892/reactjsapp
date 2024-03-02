import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0
};

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        },
        incrementByValue:(state,action)=>{
            state.value+=action.payload;
        },
        update:(state)=>{
            state.value+=2;
        },

    }

});


console.log("counter slice==>",counterSlice);

export const {increment,decrement,incrementByValue}=counterSlice.actions;

export default counterSlice.reducer;