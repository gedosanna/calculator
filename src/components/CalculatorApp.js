import React from 'react';
import ReactDOM from 'react-dom';

import Result from './Result';
import Buttons from './Buttons';
import Caption from './Caption';

class CalculatorApp extends React.Component {
    constructor() {
        super();

        this.state = {
            result: 0,
            number: '',
            story: [''],
            operationSign: '',
            prevNumber: 0,
            newOperation: false,
            preventPressing: false
        }
    }

    // get clicked number

    numberClicked = num => {
        this.setState(prevState => ({
            number: prevState.number + num,
        }), () => {
            let storyArray = this.state.story;
            storyArray[storyArray.length - 1] = this.state.number;
            this.setState({
                story: storyArray,
                preventPressing: false,
                result: Number(this.state.number)
            })
        });
    }

    // get percent from the number

    percent = () => {
        this.setState(prevState => ({
            result: parseFloat(prevState.result / 100),
            number: ''
        }), () => {
            let storyArray = this.state.story;
            storyArray[storyArray.length - 1] = this.state.result;
            this.setState({
                story: storyArray
            })
        });

    }

    // change sign of the number: + or -

    changeSign = () => {
        this.setState(prevState => ({
            number: prevState.result * (-1)
        }), () => {
            let storyArray = this.state.story;
            storyArray[storyArray.length - 1] = this.state.number;
            this.setState({
                story: storyArray,
                result: Number(this.state.number)
            })
        });
    }

    // clear the board 

    clear = () => {
        this.setState({
            result: 0,
            number: '',
            story: [''],
            operationSign: '',
            prevNumber: 0,
            newOperation: false,
            preventPressing: false
        });
    }
    // make an operation: sum or different one: depends on a pressed button

    makeOperation = pressedSign => {

        if (!this.state.preventPressing) {

            let storyArray = this.state.story;

            if (this.state.newOperation) {

                let getResult = this.state.prevNumber;

                if (this.state.operationSign === '/') {
                    getResult = getResult / this.state.result;
                }
                else if (this.state.operationSign === 'x') {
                    getResult = getResult * this.state.result;
                }
                else if (this.state.operationSign === '-') {
                    getResult = getResult - this.state.result;
                }
                else if (this.state.operationSign === '+') {
                    getResult = getResult + this.state.result;
                }

                this.setState({
                    result: getResult,
                    prevNumber: getResult,
                    number: '',

                });

                if (pressedSign === '=') {
                    storyArray.push('=', getResult, '');
                    this.setState({
                        newOperation: false,
                        preventPressing: false

                    })
                }
                else {
                    storyArray.push('=', '' + getResult + '', pressedSign, '');
                    this.setState({
                        operationSign: pressedSign,
                        preventPressing: true
                    })
                }

            }

            // when not trying to calculate dynamically

            else {
                storyArray.push(pressedSign, '');
                this.setState(prevState => ({
                    newOperation: true,
                    prevNumber: prevState.result,
                    number: '',
                    operationSign: pressedSign,
                    preventPressing: true
                }));
            }
            
            this.setState({
                story: storyArray,
            })
        }
    }

    // when comma-button pressed

    makeFloating = () => {
        this.setState(prevState => ({
            number: prevState.number + '.'
        }), () => {
            let storyArray = this.state.story;
            storyArray[storyArray.length - 1] = this.state.number + '';
            this.setState({
                story: storyArray
            })
        });
    }

    render() {
        return (
            <>
                <div className='calculator-container'>
                    <Result currentResult={this.state.result} currentStory={this.state.story} />
                    <Buttons
                        numberClicked={this.numberClicked}
                        getPercent={this.percent}
                        changeSign={this.changeSign}
                        clear={this.clear}
                        makeOperation={this.makeOperation}
                        float={this.makeFloating}
                    />
                </div>
                <Caption />
            </>
        )
    }
}

export default CalculatorApp;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<CalculatorApp />, wrapper) : false;