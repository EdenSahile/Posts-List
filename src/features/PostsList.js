import {useSelector} from 'react-redux'
import PostAuthor from './PostAuthor';
import { selectAllPosts } from './postSlice';

const PostsList = () => {
  
  const posts=useSelector(selectAllPosts)

  const renderedPosts=posts.map(post=>{

    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p className='postCredit'>
          <PostAuthor userId={post.userId}/>
        </p>
      </article>
    );
 
   
  })

  return (
    <section>
      <h2>Publication</h2>
      {renderedPosts}
      
    </section>
  );
};
export default PostsList;
