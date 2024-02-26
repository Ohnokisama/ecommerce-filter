import React from 'react'
import Button from '../Button'

function Recommended({handleClick}) {
  return (
    <>
      <div className='container mx-6 my-6'>
        <h2 className="font-bold text-2xl">Recommended</h2>
        <Button onClickHandler={handleClick} value={''} title={'All Products'} />
        <Button onClickHandler={handleClick} value={'Nike'} title={'Nike'} />
        <Button onClickHandler={handleClick} value={'Vans'} title={'Vans'} />
        <Button onClickHandler={handleClick} value={'Adidas'} title={'Adidas'} />
        <Button onClickHandler={handleClick} value={'Puma'} title={'Puma'} />
      </div>
    </>
  )
}

export default Recommended