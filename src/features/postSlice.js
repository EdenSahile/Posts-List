import {createSlice,nanoid} from '@reduxjs/toolkit'


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


const postList=createSlice({
    name:"posts",
    initialState,
    reducers:{}
})




export default  postList.Reducer