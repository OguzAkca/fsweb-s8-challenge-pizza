import React, { useState } from 'react'
import './Order.css'
import Kontrol from './check.jsx'



function Order() {
  const ekMalzemeler = [{
    value:'pepperoni',
    label:'Pepperoni',
  },
  {
    value:'tavuk ızgara',
    label:'Tavuk Izgara',
  },
  {
    value:'mısır',
    label:'Mısır',
  },
  {
    value:'sarımsak',
    label:'Sarımsak',
  },
  {
    value:'ananas',
    label:'Ananas',
  },{
    value:'sosis',
    label:'Sosis',
  },{
    value:'soğan',
    label:'Soğan',
  },{
    value:'sucuk',
    label:'Sucuk'
  },{
    value:'biber',
    label:'Biber'
  },{
    value:'kabak',
    label:'Kabak'
  },{
    value:'domates',
    label:'Domates'
  }];
  const [selection, setSelection] = useState([]); 
  const handleChange = (event) => { 
    setSelection(event.target.value);
  };
  const [hamurselection, setHamurselection] = useState([]); 
  const hamurChange = (event) => { 
    setHamurselection(event.target.value);
  };
  const [ekselection, setEkselection] = useState([]); 
  const ekChange = (event) => { 
    setEkselection(event.target.value);

    let newValue='';
    if(event.target.type==='checkbox'){
    const oldValues = ekselection[event.target.name];
    if(oldValues.includes(event.target.value)){
    newValue=oldValues.filter((v) => v!== event.target.value)
  } else {
    newValue = [...oldValues, event.target.value]
  }
  }else {
    newValue=event.target.value
  }
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
          <div className="secimler">
            <div className="radio">
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
          <div className="hamur-select">
            <h3>Hamur Seçimi</h3>
            <select name="hamur" onChange={hamurChange}>
            <option value="" disabled selected>
            Hamur Kalınlığı
            </option>
            <option value="ince-hamur">İnce Hamur</option>
            <option value="normal-hamur">Normal Hamur</option>
            <option value="kalın-hamur">Kalın Hamur</option>
            
          </select>
          </div>
          <div className="ek-malzemeler">
            <h3>Ek Malzemeler</h3>
            <p>En fazla 10 Malzeme Seçebilirsiniz</p>
           {
           ekMalzemeler.map((ek) =>(
            <Kontrol 
            changeFn={ekChange}
            fieldName='ekler'
            value={ek.value}
            label={ek.label}/>
           ))
           }
          </div>
          <div className="siparis-notu">
            <h3>Sipariş Notu</h3>
            
          </div>
          </div>
        </div>
    </header>
  )
}

export default Order