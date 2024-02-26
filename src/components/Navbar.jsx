import React from 'react'

function Navbar({query, handleInputChange}) {
  return (
    <>
      <nav className='flex justify-between bg-[#333] py-4 px-4 md:px-12'>
        <input type="text" className="block w-[400px] h-[50px] py-3 px-6 rounded-full focus:border-2 focus:outline-none focus:border-[#aaa]" placeholder='Search for your shoes...' onChange={handleInputChange} value={query} />
        <ul className="flex">
          <li className="py-3 px-6">
            <a href="" className="text-white decoration-none hover:text-violet-500 transition-all">
              <i className="ri-heart-line"></i>
            </a>
          </li>
          <li className="py-3 px-6">
            <a href="" className="text-white decoration-none hover:text-violet-500 transition-all">
              <i className="ri-shopping-bag-line"></i>
            </a>
          </li>
          <li className="py-3 px-6">
            <a href="" className="text-white decoration-none hover:text-violet-500 transition-all">
              <i className="ri-user-line"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar