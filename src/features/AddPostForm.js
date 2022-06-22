import {useState} from 'react';
import { useDispatch } from "react-redux";
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postSlice';


const AddPostForm = () => {


const [title, setTitle]=useState("")  
const [content, setContent] = useState("");  

const handleChangeTitle=(e)=>setTitle(e.target.value)
const handleChangeContent = (e) => setContent(e.target.value);

const dispatch = useDispatch();

const onSavePostClicked=()=>{
  if(title && content){
    dispatch(postAdded(title,content))
    
    setTitle("")
    setContent("");
  }
}



  
  return (
    <section>
      <h2>Ajouter une nouvelle publication</h2>
      <form>
        <label htmlFor="postTitle">Titre de la publication:</label>
        <input type="text"
         id="postTitle" 
         name="postTitle"
         value={title}
         onChange={handleChangeTitle}
          />
        <label htmlFor="postAuthor">Auteur:</label>
        <select id="postAuthor">
          <option value=""></option>
          <option value="name 1">Name1</option>
          <option value="name 1">Name2</option>
          <option value="name 1">Name3</option>
        </select>
        <label htmlFor="postContent">Contenu:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={handleChangeContent}
         />
        <button type="button"
        onClick={onSavePostClicked}>
         Enregistrer la publication
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
