import FilterCategory from '@/components/filterBar'
import GetApp from '@/components/getApp'
import Products from '@/components/products'
import React from 'react'

function category() {
  return (
    <div>
        <h3   className=' font-bold'>Fashion for Women</h3>
        <p className=' font-bold'>CATEGORIES</p>
        <div className='type md:flex justify-center gap-2 '>
            <div>
                <img src='/images/cat (1).png' />
                <p className=' text-center font-bold mt-2'>Coats & Jackets</p>
            </div>
            <div>
                <img src='/images/cat (2).png' />
                <p className=' text-center font-bold mt-2'>Sweaters</p>
            </div>
            <div>
                <img src='/images/cat (3).png' />
                <p className=' text-center font-bold mt-2'>Tops</p>
            </div>
            <div>
                <img src='/images/cat (4).png' />
                <p className=' text-center font-bold mt-2'>Dresses</p>
            </div>
            <div>
                <img src='/images/cat (7).png' />
                <p className=' text-center font-bold mt-2'>Shoes</p>
            </div>
            <div>
                <img src='/images/cat (8).png' />
                <p className=' text-center font-bold mt-2'>Handbags</p>
            </div>
            <div>
                <img src='/images/cat (9).png' />
                <p className=' text-center font-bold mt-2'>Skirts</p>
            </div>
            <div>
                <img src='/images/cat (10).png' />
                <p className=' text-center font-bold mt-2'>Accessories</p>
            </div>
            

        </div>
        
        <div className='contentCategorie grid md:grid-cols-10 mt-10 '>
            <div className='0 md:col-span-3'>
                <FilterCategory  />

            </div>
            <div className=' md:col-span-7'>
                <Products />
            </div>
            
        
        </div>

        <GetApp />
        
    </div>
  )
}

export default category