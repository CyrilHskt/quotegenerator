// Code React
import React from 'react';
import { render } from 'react-dom';
import citations from './citations';
import './index.css';

class App extends React.Component {
    
    state = {};

    genererCitation = event => {
        const keyArray = Object.keys(citations);
        const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
        this.setState(citations[randomKey]);
    };

    render(){
        return (
            <div>
                <p>{this.state.citation}
                <span>- {this.state.auteur}</span>
                </p>
                <button onClick={e => this.genererCitation(e)}>Une autre citation</button>
            </div>
        )
    };
}

render(
    <App />,
    document.getElementById('root')
)