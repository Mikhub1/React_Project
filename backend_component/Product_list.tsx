import React, { useEffect } from 'react'
import { useState } from 'react'

const Product_list = ({ category}: {category: string}) => {
    const [products, setProducts] = useState<string[]>([])

    useEffect (() => {
        console.log("Fetching products in ", category)
        setProducts(['Clothing','Household'])
    }, [category]);

  return (
    <div>Product_list</div>
  )
}

export default Product_list