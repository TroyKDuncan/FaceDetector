import { useState } from 'react'
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <Logo />
    </div>
  )
}

export default App
