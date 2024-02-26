import React from 'react'
import Input from '../Input'

function Category({handleChange}) {
  return (
    <>
      <div className="my-4">
        <h3 className="font-bold uppercase">Categories</h3>
        <Input 
          handleChange={handleChange} 
          value={''}
          title={'All'}
          name={'test'}
        />
        <Input 
          handleChange={handleChange} 
          value={'sneakers'}
          title={'Sneakers'}
          name={'test'}
        />
        <Input 
          handleChange={handleChange} 
          value={'flats'}
          title={'Flats'}
          name={'test'}
        />
        <Input 
          handleChange={handleChange} 
          value={'sandals'}
          title={'Sandals'}
          name={'test'}
        />
        <Input 
          handleChange={handleChange} 
          value={'heels'}
          title={'Heels'}
          name={'test'}
        />
      </div>
    </>
  )
}

export default Category