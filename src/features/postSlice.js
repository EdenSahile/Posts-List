import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    title: "Apprendre React",
    content:
      "Grâce à React, il est facile de créer des interfaces utilisateurs interactives.",
    
  },
  {
    id: 2,
    title: "Apprendre Redux",
    content:
      "Redux est un gestionnaire d'état pour des applications JavaScript.",
  },
];


const postsSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
      // postAdded(state,action){
      //   state.push(action. payload)
      // }
      postAdded:{
        reducer(state,action){
          state.push(action.payload)
        },
        prepare(title,content,userId){
          return{
            payload:{
              id:nanoid(),
              title,
              content,
              userId
            }
          }
        }
      }
    }
})

export const selectAllPosts =(state)=>state.posts;

export const {postAdded}=postsSlice.actions


export default  postsSlice.reducer