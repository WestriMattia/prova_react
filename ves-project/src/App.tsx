import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ves from './components/Ves/Ves';

function App() {
  const [count, setCount] = useState(0)
  const [ciccio, setCiccio] = useState(0)
  return (
    <div className="App">
      <Ves valore={count} aggiorna={setCiccio} contato ={ciccio}/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
          Cliccami {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more {ciccio}
      </p>
    </div>
  )
}

export default App