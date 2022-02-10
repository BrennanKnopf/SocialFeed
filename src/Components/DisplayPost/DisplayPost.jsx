import React, {useState} from "react";

const DisplayPost = (props) => {
    
    const [likeColor, setLikeColors] = useState({backgroundColor: "gray"});
    const [dislikeColor, setdislikeColor] = useState({backgroundColor: "gray"})
    const [active, setActive] = useState(false);
    const likeHandleClick = () => {
        setActive(true);
        // setdislikeColor({backgroundColor: "red"})
        setLikeColors({backgroundColor: "green"});
        if(active === true) {
            setActive(false);
            setLikeColors({backgroundColor: "gray"});
            // setdislikeColor({backgroundColor: "gray"})
        }
    }
    const dislikeHandleClick = () => {
        setActive(true);
           setdislikeColor({backgroundColor: "red"})
        // setLikeColors({backgroundColor: "green"});
        if(active === true) {
            setActive(false);
            // setLikeColors({backgroundColor: "gray"});
            setdislikeColor({backgroundColor: "gray"})
        }
    }

   
   
   
    return ( 
        <table>
            <tbody>
                {props.parentPost.map((post, index) =>{
                    return (
                        <tr key = {index}>
                            <td>{post.name}</td>
                            <td>{post.post}</td>
                            <button type= 'toggle' className='btn btn-secondary' onClick={likeHandleClick} style= {likeColor}>Like </button>
                            <button type= 'toggle' className='btn btn-secondary' onClick={dislikeHandleClick} style= {dislikeColor}>Dislike</button>
                        </tr>
                    );
                })}
            </tbody>
        </table>

     );
}
 
export default DisplayPost;
