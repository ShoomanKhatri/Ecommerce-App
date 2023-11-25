import React from 'react';
import myContext from './myContext';

const myState(props) {
    const state = {
        name: "Suman Khatri",
        rollno: 23
    }
    return (
        <myContext.provider value={state,color}>
            {props.children}
            </myContext.provider>
    )
}

export default myState;