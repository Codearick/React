"use client"
import React from 'react';
import { useEffect, useState } from 'react'
import Image from 'next/image';
import { MdOutlineShoppingCart } from "react-icons/md";


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
    <div className='card-container flex flex-wrap h-full w-full justify-start gap-3 bg-white p-7'>
      {
        product && product.length > 0
          ? product.map((product, index) => (
            <div className='card mx-auto my-10 border border-black' key={index}>
              {product.images.length >= 1
                ? (
                  <div className='flex flex-col border-y border-x-none'>
                    <div className='relative w-[20vw] h-[25vh]  border border-black'>
                      <Image
                        className='object-contain'
                        fill
                        src={product.images[0]}
                        alt={product.brand}
                        sizes='100vw,50vw,33vw'
                      />
                    </div>
                    <div className='text-black w-[20vw] h-[12vh] p-2'>
                      <div className='font-semibold'>{product.title}</div>
                      <div className='text-sm text-red-500'>Rs.{product.price}</div>
                    </div>
                    <div className='flex gap-3 justify-center bg-black color-white p-2 border-none'>
                    <span><MdOutlineShoppingCart /></span>
                    <span className='text-sm'>Add To Cart</span>
                    </div>
                  </div>
                )
                : (<div>Nothing to display!</div>)
              }
            </div>
          ))
          : <div>No products found!</div>
      }
    </div>
  )
}

export default LoadMore
