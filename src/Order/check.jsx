import React from 'react'

export default function Kontrol({changeFn, isCheck, fieldName, value, label}) {
  return (
    <label className="ekler">
    <input 
    type="checkbox" 
    onChange={changeFn}
    checked={isCheck}
    name={fieldName}
    value= {value}
    />
    {label}
  </label>
  )
}

