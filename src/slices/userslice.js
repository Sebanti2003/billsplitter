import { createSlice } from "@reduxjs/toolkit";
const userslice = createSlice({
  name: "user",
  initialState: {
    user: [
      {
        name: "Clark",
        id: 0,
        money: 90,
        paid: false,
        imageURL:
          "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  reducers: {
    reset(state,action){
        state.user=[ {
            name: "Clark",
            id: 0,
            money: 90,
            paid: false,
            imageURL:
              "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }];
    },
    selectedandsplit: {
        prepare(namee, paid, money) {
          return {
            payload: { namee, paid, money },
          };
        },
        reducer(state, action) {
          const personIndex = state.user.findIndex(
            (e) => e.name === action.payload.namee
          );
  
          if (personIndex !== -1) {
            // If person is found in the array
            const updatedPerson = {
              ...state.user[personIndex],
              money: action.payload.money,
              paid: action.payload.paid,
            };
  
            state.user = [
              ...state.user.slice(0, personIndex),
              updatedPerson,
              ...state.user.slice(personIndex + 1),
            ];
          }
        }},
    add: {
      prepare(name, image) {
        return {
          payload: { name, image },
        };
      },
      reducer(state, action) {
        state.user = [
          ...state.user,
          {
            name: action.payload.name,
            imageURL: action.payload.image,
            id: Math.random() * 10,
            money: 0,
            paid: Math.random(),
          },
        ];
      },
    },
    deletee:{
      prepare(id){
        return{
          payload:{id}
        }
      },
      reducer(state,action){
        state.user=state.user.filter((e)=>e.id!==action.payload.id);
      }
    }
  },
});
export default userslice.reducer;
export const { add ,selectedandsplit,reset,deletee} = userslice.actions;
