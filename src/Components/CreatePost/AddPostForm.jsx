import React, { useState } from 'react';
import './AddPostForm.css'

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
        <div className='form-group'>
           <label>Name</label>
           <input type = 'name' value ={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className='form-group'>
           <label>Post</label>
           <input type = 'post' value={post} onChange={(event) => setPost(event.target.value)} />
           <div className="d-flex justify-content-end">
           <button type='submit' className='btn btn-primary'  >Create</button>
           </div>
        </div>
    </form> 

     );
}
 
export default AddPostForm;