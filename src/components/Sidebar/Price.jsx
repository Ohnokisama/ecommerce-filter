import React from 'react'
import Input from '../Input'

function Price({handleChange}) {
  return (
    <>
      <div className="my-4">
        <h3 className="font-bold uppercase">Price</h3>
        <Input
          handleChange={handleChange}
          value={''}
          title={"All"}
          name={'test2'}
        />
        <Input
          handleChange={handleChange}
          value={50}
          title={"$0 - $50"}
          name={'test2'}
        />
        <Input
          handleChange={handleChange}
          value={100}
          title={"$50 - $100"}
          name={'test2'}
        />
        <Input
          handleChange={handleChange}
          value={150}
          title={"$100 - $150"}
          name={'test2'}
        />
        <Input
          handleChange={handleChange}
          value={200}
          title={"Over $150"}
          name={'test2'}
        />
        
      </div>
      
    </>
  )
}

export default Price