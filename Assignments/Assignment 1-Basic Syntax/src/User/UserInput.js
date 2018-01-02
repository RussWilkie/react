import React from 'react';

const input = (props) => {
    return <input type='text' onChange={props.changed} value={props.username} />
};

export default input;