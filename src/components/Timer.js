import React, { Component } from 'react';
import "./Timer.css";

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            interval: null,
            start: null,
            elapsedTime : 0
        }
    };


    start = () => {
        this.stop();
        this.setState({
            interval: setInterval(this.tick, 1),
            start: Date.now()
        })
    };

    stop = () => {
        clearInterval(this.state.interval)
    };

    reset = () => {
        clearInterval(this.state.interval);
        this.setState({
            interval: null,
            start: null,
            elapsedTime : 0
        });
    };

    tick = () => {
        this.setState({
            elapsedTime : Date.now() - this.state.start
        })
    };


    addZero = (n) => {
        return n < 10 ? '0' + n : n;
    }

    render() {
        let elapsedTime  = this.state.elapsedTime ;
        let hundredths = elapsedTime  ? Math.floor(this.state.elapsedTime  % 1000 / 10) : 0;
        let seconds = elapsedTime  ? Math.floor(this.state.elapsedTime  % 60000 / 1000) : 0;
        let minutes = elapsedTime  ? Math.floor(this.state.elapsedTime  / 60000) : 0;

        //if (hundredths === 100) hundredths = 0;

        return (
            <div className='Chrono'>
                <h1>{this.addZero(minutes)}:{this.addZero(seconds)}:{this.addZero(hundredths)}</h1>
                <div className="buttons">
                    <button onClick={this.start}>START</button>
                    <button onClick={this.stop}>STOP</button>
                    <button onClick={this.reset}>RESET</button>
                </div>
            </div>
        )
    }
};


export default Timer;