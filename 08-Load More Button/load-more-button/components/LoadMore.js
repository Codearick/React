"use client"
import React from 'react';
import { useEffect, useState } from 'react'
import Image from 'next/image';


const LoadMore = () => {
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    try {
      let request = await fetch('https://dummyjson.com/products')
      let productData = await request.json();
      console.log("Product data is: ", productData)
      setProduct(productData.products);
    }
    catch (error) {
      console.error("Bhai ye catch error: ", error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, ([]));



  return (
    <div>
      {
        product.length > 0
          ? product.map((items, index) => (
            <div className="items">
              <Image
                src= {items.products.images}
                alt=""
                fill={true}
              />
            </div>
          ))
          : <div>No products found!</div>
      }
    </div>
  )
}

export default LoadMore