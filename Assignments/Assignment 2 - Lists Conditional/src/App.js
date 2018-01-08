import React, { Component } from 'react';
import './App.css';
import Validate from './components/ValidationComponent'
import Char from './components/CharComponent';
class App extends Component {

    state = {
        text: ''
    }

    toggleText = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    deleteCharacter = (index) =>{
        const temp = this.state.text.split('');
        temp.splice(index,1);
        const newText = temp.join('');
        this.setState({text: newText});
    }
    render() {
        
        const charList = this.state.text.split('').map((ch,index) => {
            return <Char 
            character={ch} 
            key={index} 
            clicked={() => this.deleteCharacter(index)}/>
        });
        
        return (
                <div className="App">
                    <input 
                    input="text"
                    onChange={this.toggleText}
                    value={this.state.text}/>
                    <p>Length: {this.state.text.length}</p>
                    <Validate inputLength={this.state.text.length}/>
                    {charList}
                </div>
                );
    }
}

export default App;
