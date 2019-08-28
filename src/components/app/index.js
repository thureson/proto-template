import React from 'react'
import './App.css'

function App({ app, data, index, lead, children }) {
  return (
    <div className="App">
      App
      <br/>
      <button onClick={() => lead(['data', 'index'], index + ' generic')}>
        Add data
      </button>
      <br/>
      { index }
      { children }
    </div>
  )
}

export default App
