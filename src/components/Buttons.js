import React from 'react';
import '../styles/Buttons.css';

const Buttons = props => {
    return (
        <div className='buttons-container'>
            <button className='darkest-gray-color light' onClick={() => props.getPercent()}>%</button>

            <button className='gray-color light' onClick={props.changeSign}><sup>+</sup>/-</button>

            <button className='lighter-gray-color light' onClick={props.clear}>C</button>

            <button className='purple-color' onClick={() => props.makeOperation('/')}>/</button>

            <button className='gray-color light' onClick={() => props.numberClicked('7')}>7</button>

            <button className='lighter-gray-color light' onClick={() => props.numberClicked('8')}>8</button>

            <button className='white-color light' onClick={() => props.numberClicked('9')}>9</button>

            <button className='purple-color' onClick={() => props.makeOperation('x')}>x</button>

            <button className='gray-color light' onClick={() => props.numberClicked('4')}>4</button>

            <button className='lighter-gray-color light' onClick={() => props.numberClicked('5')}>5</button>

            <button className='white-color light' onClick={() => props.numberClicked('6')}>6</button>

            <button className='purple-color' onClick={() => props.makeOperation('-')}>-</button>

            <button className='gray-color light' onClick={() => props.numberClicked('1')}>1</button>

            <button className='lighter-gray-color light' onClick={() => props.numberClicked('2')}>2</button>

            <button className='white-color light' onClick={() => props.numberClicked('3')}>3</button>

            <button className='purple-color' onClick={() => props.makeOperation('+')}>+</button>

            <button className='lighter-gray-color light' id='zero' onClick={() => props.numberClicked('0')}>0</button>

            <button className='white-color light' onClick={props.float}>,</button>
            
            <button id='sum' className='pink-color' onClick={() => props.makeOperation('=')}>=</button>
        </div>
    )
}

export default Buttons;