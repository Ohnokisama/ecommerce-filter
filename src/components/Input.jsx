import React from 'react'

function Input({ handleChange, value, title, name, color }) {
  return (
    <div className="flex justify-between my-3">
      <h3><span style={{backgroundColor: color, width: '50px', height: '50px'}}></span>{title}</h3>
      <input type="radio" id="" onChange={handleChange} value={value} name={name} />
    </div>
  )
}

export default Input