// Code React
import React from 'react';
import { render } from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Ma Citation
                <span>- Auteur</span>
                </p>
                <button>Une autre citation</button>
            </div>
        )
    }
}

render(
    <App />,
    document.getElementById('root')
)