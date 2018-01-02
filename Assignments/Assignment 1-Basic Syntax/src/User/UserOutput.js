import React from 'react';

const output = (props) => {
    return(
            <div className='Output'>   
                <p>My name is: {props.username} and I am {props.age}</p>
                <p>{props.children}</p>
            </div>
            )
};
export default output;