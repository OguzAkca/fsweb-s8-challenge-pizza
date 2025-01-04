import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx'
import Home from './Home/Home.jsx'
import Order from './Order/Order.jsx'
import Success from './components/Success'
import ErrorPage from './components/ErrorPage'
import Baslik from './components/Baslik/Baslik.jsx'

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
      <Baslik/>
     
    </>
  )
}

export default App
