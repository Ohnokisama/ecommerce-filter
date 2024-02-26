import React from 'react'

function Card({img, title, reviews, newPrice, prevPrice, star}) {
  return (
    <div className="border rounded-lg border-slate-500">
      <img src={img} alt={title} className="w-full h-[200px] object-contain p-3" />
      <div className='p-6'>
        <h1 className="font-bold text-2xl">{title}</h1>
        <div className="rating flex justify-between items-center my-2">
          <div className="stars flex text-yellow-500">
            {star}
            {star}
            {star}
            {star}
          </div>
          <p>{reviews}</p>
        </div>
        <div className="price flex justify-between items-center my-2">
          <div className='font-medium'>
            <del>{prevPrice}</del> ${newPrice}
          </div>
          <i className="ri-shopping-bag-line"></i>
        </div>
      </div>
    </div>
  )
}

export default Card