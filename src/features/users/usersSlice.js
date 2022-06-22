import {createSlice} from '@reduxjs/toolkit'


const initialState=[
    {id:"0", name:"melissa Young"},
     {id:"1", name:"Sophie Dupont"},
     {id:"2", name:" Eric Marcel"}
]


const usersSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
      
   }
})

export const selectAllUsers=(state)=>state.users


export default usersSlice.reducer