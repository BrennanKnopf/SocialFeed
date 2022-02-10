import React, {useState} from "react";

const Button = (props) => {
    
    const [color, setColors] = useState("");
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(true);
        setColors();
        if(active === true) {
            setActive(false);
            setColors("");
        }
    }
}

export default Button;