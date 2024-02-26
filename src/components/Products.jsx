import React, {useState, useEffect} from 'react'
import Card from './Card'

function Products({ result }) {
  const [items, setItems] = useState([])
  useEffect(() => {
    
  }, [])

  return (
    <>
      <div className="mx-6 my-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {result}
        </div>
      </div>
    </>
  )
}

export default Products