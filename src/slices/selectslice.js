import { createSlice } from "@reduxjs/toolkit";
const selectedslice=createSlice({
    name:"selected",
    initialState:{
        selID:"",
        text:"Select"
    },
    reducers:{
        change:{
            prepare(id){
                return{
                    payload:{id}
                }
            },
            reducer(state,action){
                state.selID=action.payload.id

            }
        },
        openclose:{
            prepare(name,text){
                return{
                    payload:{name,text}
                }
            },
            reducer(state,action){
                state.text=action.payload.text
            }
        }
    }
})
export default selectedslice.reducer;
export const {change,openclose} =selectedslice.actions;
