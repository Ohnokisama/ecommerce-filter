import React from 'react'
import Category from './Category'
import Price from './Price'
import Colors from './Colors'

function Sidebar({handleChange}) {
  return (
    <>
      <div className="w-[15%] h-full fixed bg-[#333] text-white px-4">
        <div className='text-center  text-white pt-4 flex items-center gap-3'>
          <i className="ri-shopping-cart-line ri-2x"></i>
          <h1 className='text-2xl font-bold'>Shop<span className='text-violet-500'>Ly</span></h1>
        </div>
        <div className="my-4">
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </div>
        
      </div>
      
    </>
  )
}

export default Sidebar