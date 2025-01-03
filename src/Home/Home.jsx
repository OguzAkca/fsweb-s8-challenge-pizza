import React from 'react'
import Baslik from '../components/Baslik/Baslik'
import './Home.css'

import Button from './Button/Button';

function Home() {

 

  return (
    <div className='background'>
      <div className="baslik">
      <Baslik/>
        <div className="yazi">
          <p>KOD ACIKTIRIR</p>
          <p>PİZZA DOYURUR</p>
        </div>
      <Button/>
      
      </div>
    </div>
  )
}

export default Home