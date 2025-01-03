import React from 'react'
import './Button.css'
import { useHistory } from 'react-router-dom'



function Button() {
    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault(); 
        history.push('/order'); 
      };
   
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <button  className='button' type='submit'>Acıktım</button>
        </form>
        
    </div>
          
  )
}

export default Button