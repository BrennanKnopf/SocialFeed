import React, {useState} from "react";

const Button = (props) => {
    
    const [color, setColors] = useState("grey");
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(true);
        setColors(props.changeColor);
        if(active === true) {
            setActive(false);
            setColors("grey");
        }
    }
    return (
        <div className="d-flex justify-content-end">
        <button type= 'toggle' className='btn btn-secondary' onClick={handleClick} style= {{backgroundColor: color}}>{props.buttonName}</button>
        </div>

    )
}

export default Button;