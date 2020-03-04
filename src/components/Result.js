import React from 'react';
import '../styles/Result.css';

const Result = props => {
    return (
        <div className='calculator-heading'>
            <div className='story'>
                <p>{props.currentStory.join(' ')}</p>
            </div>
            <h2>{props.currentResult}</h2>
        </div>
    )
}

export default Result;