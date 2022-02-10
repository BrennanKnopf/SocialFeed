import React, { useState } from 'react';
import AddPostForm from './Components/CreatePost/AddPostForm';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import './App.css'

function App() {
  
  const [post, setPost] =useState([{name: 'Brennan Knopf', post: 'I wonder if this will work.', liked: false, disliked: false}])
  
  function addNewPost(newPost){

    let tempPost = [...post, newPost]

    setPost(tempPost)
  }
  
  
  
  return (
    <div className='App'>
      <div className='navbar'>
        <div className='row'>
          <h3 style={{margin: '1em'}}>Social
          <small className='text-muted'>Feed</small></h3>
          <div className='col-md-6'>
        </div>
      </div>
    </div>
    <div className='firstContainer'>
       <div className ='d-flex justify-content-center'>
        <div className="shadow col col-md-6" style={{margin: '1em'}}>
          <div className="row">
            <AddPostForm addNewPostProperty={addNewPost}/>
          </div>
        </div>
        </div>
        <div className='2container'>
        <div className ='d-flex justify-content-center'> 
      <div className='shadow col-md-6'>
          <div className="row">
            <DisplayPost parentPost={post} />
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>

  );
}

export default App;
