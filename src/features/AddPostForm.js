import {useState} from 'react'


const AddPostForm = () => {


const [title, setTitle]=useState("")  
const [content, setContent] = useState("");  

const handleChangeTitle=(e)=>setTitle(e.target.value)
const handleChangeContent = (e) => setContent(e.target.value);





  
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text"
         id="postTitle" 
         name="postTitle"
         value={title}
         onChange={handleChangeTitle}
          />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor">
          <option value=""></option>
          <option value="name 1">Name1</option>
          <option value="name 1">Name2</option>
          <option value="name 1">Name3</option>
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={handleChangeContent}
         />
        <button type="button">
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
