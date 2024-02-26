import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Recommended from './components/Recommended'
import Sidebar from './components/Sidebar/Sidebar'

// Import data
import products from './data'
import Card from './components/Card'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Input Filter
  const [query, setQuery] = useState("")

  const handleInputChange = e => {
    setQuery(e.target.value)
  }

  const filteredItems = products.filter(
    (product) => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  )

  // Radio Filter
  const handleChange = e => {
    setSelectedCategory(e.target.value)
  }

  //  Button Filter
  const handleClick = e => {
    setSelectedCategory(e.target.value)
  }

  function filterData(products, selected, query) {
    let filteredProducts = products

    // Filtering Input Items
    if(query) {
      filteredProducts = filteredItems
    }

    // Selected filter
    if(selected) {
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => 
        category === selected || 
        color === selected || 
        company === selected || 
        newPrice === selected || 
        title === selected 
      )
    }

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice }) => (
      <Card 
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ))
  }

  const result = filterData(products, selectedCategory, query)

  return (
    <>
      <div className="flex overflow-x-hidden">
        <div className='w-[15%]'>
          <Sidebar handleChange={handleChange} />
        </div>
        <div className='w-[85%]'>
          <Navbar query={query} handleInputChange={handleInputChange} />
          <Recommended handleClick={handleClick} />
          <Products result={result} /> 
        </div>
      </div>
      
    </>
  )
}

export default App
