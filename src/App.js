import React, { useState } from 'react';
import AddPostForm from './Components/CreatePost/AddPostForm';
import DisplayPost from './Components/DisplayPost/DisplayPost';

function App() {
  
  const [post, setPost] =useState([{name: 'Brennan Knopf', post: 'I wonder if this will work.'}])
  
  function addNewPost(newPost){

    let tempPost = [...post, newPost]

    setPost(tempPost)
  }
  
  
  
  return (
    <div>
      <AddPostForm addNewPostProperty={addNewPost}/>
      <DisplayPost parentPost={post} />
    </div>
  );
}

export default App;
