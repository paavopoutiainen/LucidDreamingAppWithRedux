import React from 'react';

const AnalyzeDream = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.dream.name}</h1>
        </div>
    );
};

export default AnalyzeDream;