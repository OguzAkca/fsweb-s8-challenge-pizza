import React from 'react'

export default function Card({className, img, text}) {
  return (
    <li className={className}>
        <img src={img} alt=""  />
        <p><strong>{text}</strong></p>
        <div className="card-detail">
            <span>4.9</span>
            <span>60TL</span>
        </div>
    </li>
    
  )
}

 