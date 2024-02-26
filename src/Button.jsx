import React from 'react'

function Button({onClickHandler, value, title}) {
  return (
    <button className='py-2 px-4 border border-violet-600 text-violet-600 font-medium mr-3 rounded-lg hover:bg-violet-600 hover:text-white transition-all' onClick={onClickHandler} value={value}>{title}</button>
  )
}

export default Button