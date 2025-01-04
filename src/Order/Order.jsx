import React, { useState } from 'react'
import './Order.css'



function Order() {
  const [selection, setSelection] = useState(''); 
  const handleChange = (event) => { 
    setSelection(event.target.value);
  };
  return (
    <header >
      <div className="ana-baslik">
        <h1 className='h1-bg'>Teknolojik Yemekler</h1>
      </div>
         <div className='order'>
          <h2>Position Absolute Acı Pizza</h2>
          <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
          </p>
          <h3>Boyut Seç</h3>
          <label>
            <input 
            type='radio'
            name='boyut'
            value='küçük'
            checked={selection === 'küçük'}
            onChange={handleChange}
            />
            Küçük
          </label>
          <label>
            <input 
            type='radio'
            name='boyut'
            value='orta'
            checked={selection === 'orta'}
            onChange={handleChange}
            />
            Orta
          </label>
          <label>
            <input 
            type='radio'
            name='boyut'
            value='büyük'
            checked={selection === 'büyük'}
            onChange={handleChange}
            />
            Büyük
          </label>
        </div>
    </header>
  )
}

export default Order