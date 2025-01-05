import React, { useState } from 'react'

 function Counter() {
const [sayac, setSayac] = useState('');

const artiBtn = () => {
    setSayac((count) => count + 1);
}
const eksiBtn = () => {
    setSayac((count) => count - 1 );
}

const pizzaSayisi = sayac + 1;

  return (
    <div className="sayac">
        <button onClick={artiBtn}>+</button>
        <p>{pizzaSayisi}</p>
        <button onClick={eksiBtn}>-</button>
        
    </div>
  )
}
export default Counter;
