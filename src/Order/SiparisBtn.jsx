import React from 'react'
import { useHistory } from 'react-router-dom';

function SiparisBtn() {
    
        const history = useHistory();
        const handleSubmit = (event) => {
            event.preventDefault(); 
            history.push('/succes'); 
          };
       
      return (
        <div>
            <form onSubmit={handleSubmit}>
                <button  className='button' type='submit'>Sipariş Ver</button>
            </form>
            
        </div>
              
      )
    
}

export default SiparisBtn