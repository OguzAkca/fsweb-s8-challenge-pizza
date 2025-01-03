import React from 'react'
import Card from './Card'
import './Card.css'

export default function Cards() {
  return (
    <div className="card-container">
        <Card 
         className ='card-item'
         img= 'images/cta/kart-1.png'
         text='Terminal Pizza'
        />
        <Card 
         className ='card-item'
         img= 'images/cta/kart-2.png'
         text='Position Ablosulte Acı Pizza'
        />
        <Card 
         className ='card-item'
         img= 'images/cta/kart-3.png'
         text='useEffect Tabuklu Burger'
        />
    </div>
  )
}

 