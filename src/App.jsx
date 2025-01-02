import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import Order from './components/Order'
import Success from './components/Success'
import ErrorPage from './components/ErrorPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <Switch>
      <Route path='/' exact><Home /></Route>
      <Route path='/order'><Order /></Route>
      <Route path='/succes'><Success/></Route>
      <Route path='*'><ErrorPage/></Route>
    </Switch>
      <div>
        <a href="https://github.com/Workintech/fsweb-s7-challenge-pizza" target="_blank">
          <img src={workintech} className="logo" alt="Workintech logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Workintech + 🍕</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Absolute Acı Pizza sayısı {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Workintech or Pizza logos to learn more
      </p>
      <Footer/>
    </>
  )
}

export default App
