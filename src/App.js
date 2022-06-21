import React from 'react';
import AddPostForm from './features/AddPostForm';
import PostsList from './features/PostsList'

import './App.css'


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 mx-auto">
            <AddPostForm />
            <PostsList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
