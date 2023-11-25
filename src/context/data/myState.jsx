import React, { useState } from 'react';
import myContext from './MyContext';

const MyState=(props)=> {
const [mode, setmode] = useState("light");
const toggleMode= () =>{
    if (mode=== "light"){
        setmode="dark";
        document.body.style.backgroundColor = "rgb(17,24,39)";
    }
    else{
        setMode="light";
        document.body.style.backgroundColor="white";
    }
}
    return (
        <myContext.provider value={{mode, toggleMode}}>
            {props.children}
        </myContext.provider>
    )
}

export default MyState;