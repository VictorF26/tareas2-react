import { useState } from 'react'
import reactLogo from './assets/react.svg'
import TodoApp from './components/todoApp.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TodoApp />
  )
}

export default App
