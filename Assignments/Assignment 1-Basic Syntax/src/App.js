import React, { Component } from 'react';
import './App.css';
import Input from './User/UserInput';
import Output from './User/UserOutput';
import './User/UserOutput.css';

class App extends Component {

    state = {
            username: 'Fred Bed'
    }

    addAge = (age) => {
        this.setState(
                {
                  age: age
                })
    }

    changeName = (event) => {
        this.setState(
                {
                        username: event.target.value
            })
    }

    render() {
        const style = {
            backgroundColor: 'blue',
            font: 'inherit',
            border: '1x solid ed',
            color: 'white',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
                <div className="App">
                    <h1>I'm a React Element</h1>
                    <Input changed={this.changeName}/>  
                    <br />
                    <button style = {style} onClick={() => this.addAge('25 decades old')}>Add Age</button>
                    <Output 
                        username={this.state.username}
                        age={this.state.age}
                       
                                >I like brownies  
                    </Output>
                    <Output 
                        username='Bill'
                        age='20 years young'>I want to be a brownie
                    </Output>
                    <Output 
                        username='Drake'
                        age='5 seconds old'>I baked cookies
                    </Output>
                
                </div>
                );
    }
}

export default App;
