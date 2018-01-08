import React from 'react';

const validate = (props) =>{
    return (
            <div>
            {props.inputLength >= 5 ? 'Text long enough' 
                    : 'Text too short'}
            </div>
    );
}

export default validate;