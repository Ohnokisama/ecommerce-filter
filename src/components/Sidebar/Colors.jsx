import React from 'react'
import Input from '../Input'

function Colors({handleChange}) {
  return (
    <>
      <div className="my-4">
        <h3 className="font-bold uppercase">Colors</h3>
        <Input
          handleChange={handleChange}
          value={''}
          title={'All'}
          name={'test3'}
        />
        <Input
          handleChange={handleChange}
          value={'black'}
          title={'Black'}
          name={'test3'}
          color={'black'}
        />
        <Input
          handleChange={handleChange}
          value={'red'}
          title={'Red'}
          name={'test3'}
          color={'red'}
        />
        <Input
          handleChange={handleChange}
          value={'white'}
          title={'White'}
          name={'test3'}
          color={'white'}
        />
        <Input
          handleChange={handleChange}
          value={'blue'}
          title={'Blue'}
          name={'test3'}
          color={'blue'}
        />
        <Input
          handleChange={handleChange}
          value={'green'}
          title={'Green'}
          name={'test3'}
          color={'green'}
        />
        
      </div>
      
    </>
  )
}

export default Colors