import React from 'react'

export default function Kontrol({changeFn, fieldName, value, label}) {
  return (
    <label className="ekler">
    <input 
    type="checkbox" 
    onChange={changeFn}
    name={fieldName}
    value= {value}
    />
    {label}
  </label>
  )
}

