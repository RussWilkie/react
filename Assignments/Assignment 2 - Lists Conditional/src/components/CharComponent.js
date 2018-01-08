import React from 'react'

const character = (props) => {
    
    const style = {
            display: 'inline-block',
            padding: '16px',
            textAlign: 'center', 
            margin: '16px',
            border: '1px solid black'
        };
    return(
            <div style= {style} onClick={props.clicked}
            className="CharComponent">
                {props.character}
            </div>
            );
}

export default character;

