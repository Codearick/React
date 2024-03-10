"use client"
import React from 'react';
import { useEffect, useState } from 'react'
import Image from 'next/image';
import { MdOutlineShoppingCart } from "react-icons/md";


const page = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true)
      const request = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 30}`)
      const productData = await request.json();
      const laptopData =  productData.products.filter(item => item.category === "laptops")

      if (laptopData && laptopData.length) {
        console.log("Phone data is: ", laptopData)
        setProduct(laptopData);
        setLoading(false);
      }
    }
    catch (error) {
      console.error("Bhai ye catch error: ", error.message);
      setLoading(true)
    }
  }

  useEffect(() => {
    fetchData();
    if (product && count === 5) {
      setDisableBtn(true);
    }
  }, ([product], [count]));

  return (
    <div className='card-container flex flex-wrap items-center justify-center min-h-[100vh] w-full gap-5 bg-white p-7 overflow-auto'>
      {
        product && product.length > 0
          ? product.map((product, index) => (
            <div className='card mx-auto my-5 border border-black' key={product.id}>
              {product.images.length >= 1
                ? (
                  <div className='flex flex-col border-y border-x-none cursor-pointer hover:bg-gray-100'>
                    <div className='relative w-[20vw] h-[25vh]  border border-black'>
                      <Image
                        className='object-contain'
                        fill
                        priority
                        src={product.images[0]}
                        alt={product.brand}
                        sizes='100vw,50vw,33vw'
                      />
                    </div>
                    <div className='text-black w-[20vw] h-[12vh] p-2'>
                      <div className='font-semibold'>{product.title}</div>
                      <div className='text-sm text-red-500'>Rs.{product.price}</div>
                    </div>
                    <div className='cart flex gap-3 justify-center bg-black color-white p-2 border-none'>
                      <span><MdOutlineShoppingCart /></span>
                      <span className='text-sm'>Add To Cart</span>
                    </div>
                  </div>
                )
                : (<div>Nothing to display!</div>)
              }
            </div>
          ))
          : <div className='font-extrabold text-3xl '>No products found!</div>
      }
      {/* <div className=' flex flex-col items-center button-container h-10'>
        <button disabled={disableBtn} onClick={() => setCount(count + 1)} className='hover:text-lg bg-black text-white p-3 rounded-3xl'>Load More Products</button>
        {disableBtn ? <div className='text-black p-3 rounded-3xl'>Nothing More to Display!</div> : null}
      </div> */}
    </div>
  )
}

export default page
