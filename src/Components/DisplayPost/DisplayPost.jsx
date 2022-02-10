import React, {useState} from "react";
import Button from "../Button/Button";
import './DisplayPost.css'

const DisplayPost = (props) => {
    
    return ( 
        <table className="displayPost">
            <tbody>
                {props.parentPost.map((post, index) =>{
                    return (
                        <tr key = {index}>
                            <div className='border-box'>
                            <td>{post.name}</td>
                            <td>{post.post}</td>
                            <Button changeColor="green" buttonName="Like"></Button>
                            <Button changeColor="red" buttonName="Dislike"></Button>
                            </div>
                            {/* <button type= 'toggle' className='btn btn-secondary' onClick={likeHandleClick} style= {likeColor}>Like </button>
                            <button type= 'toggle' className='btn btn-secondary' onClick={dislikeHandleClick} style= {dislikeColor}>Dislike</button> */}
                        </tr>
                    );
                })}
            </tbody>
        </table>

     );
}
 
export default DisplayPost;
