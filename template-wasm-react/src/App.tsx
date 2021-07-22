import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import init, { greet } from 'wasm-test'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    init()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello WebAssembly!</p>
        <p>Vite + Rust + React</p>
        <p>
          <button onClick={() => greet('wasm')}>
            hello wasm
          </button>
          {' '}
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://github.com/lencx/vite-plugin-rsw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rsw Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
