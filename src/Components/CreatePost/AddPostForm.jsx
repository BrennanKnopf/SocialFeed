import React, { useState } from 'react';

const AddPostForm = (props) => {
   
    const[name, setName] = useState('');
    const [post, setPost] = useState('');
    
    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        console.log(newPost);
        props.addNewPostProperty(newPost)
    }

    
    return ( 
        <form onSubmit={handleSubmit} className ='form-grid' >
        <div>
           <label>Name</label>
           <input type = 'name' value ={name} onChange={(event) => setName(event.target.value)} />
           <label>Post</label>
           <input type = 'post' value={post} onChange={(event) => setPost(event.target.value)} />
           <button type='submit' >Create</button>
        </div>
    </form> 

     );
}
 
export default AddPostForm;