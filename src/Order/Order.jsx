import React, { useState } from 'react'
import './Order.css'
import Kontrol from './check.jsx'
import Counter  from './sayac.jsx';
import SiparisBtn from './SiparisBtn.jsx';



export default function Order() {
  const ekMalzemeler = [{
    id:1,
    value:'pepperoni',
    label:'Pepperoni',
  },
  {
    id:2,
    value:'tavuk ızgara',
    label:'Tavuk Izgara',
  },
  {
    id:3,
    value:'mısır',
    label:'Mısır',
  },
  {
    id:4,
    value:'sarımsak',
    label:'Sarımsak',
  },
  {
    id:5,
    value:'ananas',
    label:'Ananas',
  },
  {
    id:6,
    value:'sosis',
    label:'Sosis',
  },
  {
    id:7,
    value:'soğan',
    label:'Soğan',
  },
  {
    id:8,
    value:'sucuk',
    label:'Sucuk'
  },
  {
    id:9,
    value:'biber',
    label:'Biber'
  },{
    id:10,
    value:'kabak',
    label:'Kabak'
  },{
    id:11,
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
      const { type, name, value, checked } = event.target;
      let newValue;
  
      if (type === "checkbox") {
        
        if (ekselection.includes(value)) {
          // Eğer değer zaten seçiliyse, onu çıkar
          newValue = ekselection.filter((v) => v !== value);
        } else {
          // Eğer değer seçili değilse, onu ekle
          newValue = [...ekselection, value];
        }
      } else {
        // Checkbox dışında bir input için yeni değeri doğrudan ata
        newValue = value;
      }
  
      setEkselection(newValue); // Durumu güncelle
      console.log(newValue); // Yeni durumu logla
    };
    //Sayaç
    const [sayac, setSayac] = useState('');
    
    const artiBtn = () => {
        setSayac((count) => count + 1);
    }
    const eksiBtn = () => {
        setSayac((count) => count - 1 );
    }
    const pizzaSayisi = sayac + 1;
  
  
 

  
  return (
    <header >
      <div className="ana-baslik">
        <h1 className='h1-bg'>Teknolojik Yemekler</h1>
        
        
      </div>
         <div className='order'>
          <h2>Position Absolute Acı Pizza</h2>
          <p className='pizza-icerik'>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
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
          <div className="ek-baslik">
          <h3>Ek Malzemeler</h3>
          <p>En fazla 10 Malzeme Seçebilirsiniz (5TL)</p>
          </div>
          <div className="ek-malzemeler">
            
            
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
            
            <form>
              <h3>Sipariş Notu</h3>
              <label htmlFor="not"> </label>
              <textarea name="kullanıcı-not" id="not" placeholder="Siparişine eklemek istediğin bir not var mı?"></textarea>
            </form>
            
          </div>
          <div className="toplam">
            <div className="sayac">
              <h3>Sipariş Sayısı</h3>
              <button className='sayac-btn' onClick={artiBtn}>+</button>
              <p>{pizzaSayisi}</p>
              <button className='sayac-btn' onClick={eksiBtn}>-</button>
            </div>
            <div className="siparis-toplami">
              
              <div className="yazilar">
              <h3>Sipariş Toplamı</h3>
              <p>Seçimler : {(ekselection.length*5)+ '.00TL'}</p>
              <p>Toplam : {((ekselection.length*5) + 85)*pizzaSayisi + '.00TL'}</p>
              </div>
            </div>
          </div>
          <div className="siparis-btn">
            <SiparisBtn/>
          </div>
          </div>
        </div>
    </header>
  )
}

