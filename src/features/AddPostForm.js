import {useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { postAdded } from './postSlice';
import {selectAllUsers} from '../features/users/usersSlice'

const AddPostForm = () => {

const dispatch = useDispatch();

const [title, setTitle]=useState("")  
const [content, setContent] = useState("");
const [userId, setUserId] = useState(""); 


const users=useSelector(selectAllUsers)

const handleChangeTitle=e=>setTitle(e.target.value)
const handleChangeContent = e => setContent(e.target.value);
const handleChangeAuthor = e => setUserId(e.target.value);




const onSavePostClicked=()=>{
  if(title && content){
    dispatch(postAdded(title,content,userId))

    setTitle("")
    setContent("");
  }
}

const canSave= Boolean(title)&& Boolean(content) && Boolean(userId)


const usersOptions=users.map(user=>{
  return (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  );

})

  
  return (
    <section>
      <h2>Ajouter une nouvelle publication</h2>
      <form>
        <label htmlFor="postTitle">Titre de la publication:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={handleChangeTitle}
        />
        <label htmlFor="postAuthor">Auteur:</label>
        <select id="postAuthor" value={userId} onChange={handleChangeAuthor}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Contenu:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={handleChangeContent}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Enregistrer la publication
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
