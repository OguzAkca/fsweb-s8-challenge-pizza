import React from 'react'
import './CuisineList.css'

function CuisineList(cuisines) {
  return (
    <div className="cuisine-container">
        <ul className="cuisine-list">
            {cuisines.map((cuisine) => (
                <li key= {cuisine.cuisineName} className="cusine-item">
                    <img src={cuisine.img} alt=""  />
                    {cuisine.cuisineName}
                </li>
            ))}

        </ul>
    </div>
  )
}

export default CuisineList