import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const States = ['N', 'x', 'o']

function Switch() {
    const [token, setToken] = useState(0)
    return (
        <div>
            <p>state {States[token]}</p>
            <button onClick={() => setToken((token + 1) % 3)}></button>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Switch />
            </header>
        </div>
    )
}

export default App
