import FilterCategory from '../components/filterBar'
import GetApp from '../components/getApp'
import Products from '../components/products'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import products from "../pages/product"
import filterIcon from "../public/filterIcon.png"

import bellow from "../public/bellow.png"
import Slider from '../components/imageSlider'
import ImageSlider from '../components/imageSlider'
function Category() {

  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', "3XL", "4XL", "5XL", "One size"];
    
  const colors = [
    'gray', 'black', 'white', 'brown', 'pink', 'blue', 
    'red', 'orange', 'yellow', 'green', 'purple', 'multicolor'
  ];
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  

  const [filterMenu, setfilterMenu] = useState(false);

  function displayMenu() {
    setfilterMenu(!filterMenu)
  }
  const [displayFilterBar, setdisplayFilterBar] = useState(false);

  function setFilterBar() {
    setdisplayFilterBar(!displayFilterBar)
  }
    

  const [filtProduct, setfiltProduct] = useState(products);

  const filter =  () => {
        setfiltProduct(products.filter(el => el.discount > 40))
       
    } 
  
 

  const filterSize = (size) => {
        if (size) {
          setfiltProduct(products.filter(el => el.size === size))
          
        }else{
          setfiltProduct(products)

        }
        
       
  }
 
  
  function allProduct() {
      setfiltProduct(products)
  }

  useEffect(() => {
    
    setfiltProduct(filtProduct)
      

  },[filtProduct]);

 

  const filterColor = (color) => {
    if (color) {
        setfiltProduct(products.filter(el => el.color === color));
    } else {
        setfiltProduct(products);
    }
};
  
  


  return (


    <div style={{ width:"90%", margin:"auto" }}>
        <h3 style={{ fontSize:"24px" }}  className='myfont font-bold'>Fashion for Women</h3>

        <i className="cil-energy icon icon-xxl"></i>

        <p className=' mt-2 mb-5 font-bold'>CATEGORIES</p>










       <div className=' md:hidden'>
            <ImageSlider />
       </div>
 
    



        <div className='type sm:hidden md:flex justify-center gap-2 '>
            <div>
            
                <Image width={100} height={100} alt='alt' src='/cat (1).png' />
                <p className=' text-center font-bold mt-2'>Coats & Jackets</p>
            </div>
            <div>
                <Image width={100} height={100} alt='alt' src='/cat (2).png' />
                <p className=' text-center font-bold mt-2'>Sweaters</p>
            </div>
            <div>
                <Image width={100} height={100} alt='alt' src='/cat (3).png' />
                <p className=' text-center font-bold mt-2'>Tops</p>
            </div>
            <div>
                <Image width={100} height={100} alt='alt' src='/cat (4).png' />
                <p className=' text-center font-bold mt-2'>Dresses</p>
            </div>
            <div>
                <Image width={100} height={100} alt='alt' src='/cat (7).png' />
                <p className=' text-center font-bold mt-2'>Shoes</p>
            </div>
            <div>
                <Image width={100} height={100} alt='alt' src='/cat (8).png' />
                <p className=' text-center font-bold mt-2'>Handbags</p>
            </div>
            <div>
                <Image width={100} height={100} alt='alt' src='/cat (9).png' />
                <p className=' text-center font-bold mt-2'>Skirts</p>
            </div>
            <div>
                <Image width={100} height={100} alt='alt' src='/cat (10).png' />
                <p className=' text-center font-bold mt-2'>Accessories</p>
            </div>
            

        </div>
        
        <div className='contentCategorie grid md:grid-cols-10 mt-10 '>
            <div className='0 md:col-span-3'>



                {/* <FilterCategory   /> */}

                

        <div className=' font-bold flex items-center mt-3 mb-3 '>
        <Image width={17} height={17} src={filterIcon} onClick={setFilterBar} alt='alt' /><h4 style={{ fontSize:"20px" }} className=' ms-2 '>FILTER</h4>
        
        </div>
       
           <div  className= {`filtring w-64 p-4 border rounded-lg ${displayFilterBar ? '' : 'show-filter-bar'}`}>



                    <div className="mb-4">
                        <div className="relative w-full   mx-auto max-w-screen-sm">
                            <div id="bouton" className="relative group/bouton w-full">
                            <div onClick={displayMenu} className=' flex items-center justify-between'>
                              <p className=' font-bold'>Status</p>
                                  <Image src={bellow} alt='alt' width={20} height={20}  />
                            </div>
 
                            <div style={{ display: filterMenu ? "block" : "none" }} className={`w-full  z-50  top-full bg-white origine-top  flex-col  `}>
                              <div className=' flex items-center p-2'  >
                                <input type='radio' /><p className=' ms-3' onClick={allProduct}>Any</p>
                              </div>
                              <div className=' flex items-center p-2'>
                                <input type='radio' /><p className=' ms-3'>For sale </p>
                              </div>
                              <div className=' flex items-center p-2'>
                                <input type='radio'  /><p className=' ms-3' onClick={()=>{filter()}} >Sold</p>
                              </div>
                              

                          
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="relative w-full   mx-auto max-w-screen-sm">
                            <div id="bouton" className="relative group/bouton w-full">
                            <div className=' flex items-center justify-between'>
                                  <p className=' font-bold'>Size</p>
                                  <Image src={bellow} alt='alt' width={20} height={20}  />
                                </div>
                            <div style={{ display: filterMenu ? "block" : "none" }} className={`w-full  z-50  top-full bg-white origine-top  flex-col  `}>
                              

                            <h5 className=' font-bold mt-3 mb-3'>Tops</h5>
                              <div className=' flex flex-wrap gap-1 '>
                                {
                                  sizes.map(item => (
                                    <div onClick={()=>{filterSize(item)}}  key={item} className='w-fit p-2 border   text-black hover:bg-black hover:text-white rounded-md gap-2'> {item} </div>
                                  ))
                                }
                              </div>
                            

                              <h5 className=' font-bold mt-3 mb-3'>BOTTOMS</h5>  

                            <div className=' flex flex-wrap gap-1 '>
                                {
                                  sizes.map(item => (
                                    <div  key={item} className='w-fit p-2 border   text-black hover:bg-black hover:text-white rounded-md gap-2'> {item} </div>
                                  ))
                                }
                              </div>

                              

                          
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div clasclassNames="relative w-full   mx-auto max-w-screen-sm">
                            <div id="bouton" className="relative group/bouton w-full">
                            <div className=' flex items-center justify-between'>
                                  <p className=' font-bold'>Condition</p>
                                  <Image src={bellow} alt='alt' width={20} height={20}  />
                                </div>
                            <div style={{ display: filterMenu ? "block" : "none" }} className={`w-full  z-50  top-full bg-white origine-top  flex-col  `}>
                              <div className=' flex items-center p-2'>
                                <input type="checkbox" /><p className=' ms-3'>Excellent (243)</p>
                              </div>
                              <div className=' flex items-center p-2'>
                                <input type='checkbox' /><p className=' ms-3'>Very Good (670)</p>
                              </div>
                              

                          
                            </div>
                            </div>
                        </div>
                    </div>
            
                     {/* Price  */}
            
                    <div className="mb-4">
              
                        <div className="relative w-full  z-40  mx-auto max-w-screen-sm">
                  <div id="bouton" className="relative group/bouton w-full">
                  <div className=' flex items-center justify-between'>
                                  <p className=' font-bold'>Price</p>
                                  <Image src={bellow} alt='alt' width={20} height={20}  />
                                </div>
                    <div style={{ display: filterMenu ? "block" : "none" }} className={`w-full  z-50  top-full bg-white origine-top  flex-col  `}>
                      <div className=' flex items-center p-2'>
                        <input type='radio' /><p className=' ms-3'>Any</p>
                      </div>
                      <div className=' flex items-center p-2'>
                        <input type='radio' /><p className=' ms-3'>Under $25</p>
                      </div>
                      <div className=' flex items-center p-2'>
                        <input type='radio' /><p className=' ms-3'>$25 to $50</p>
                      </div>
                      <div className=' flex items-center p-2'>
                        <input type='radio' /><p className=' ms-3'>$50 to $100</p>
                      </div>

                      <div className=' flex items-center p-2'>
                        <input type='radio' /><p className=' ms-3'>$100 to $200</p>
                      </div>

                      <div className=' flex items-center p-2'>
                        <input type='radio' /><p className=' ms-3'>$200 to $UP</p>
                      </div>

                      <div className="mt-2 flex space-x-2">
                        <input
                          type="number"
                          placeholder="Min"
                          className="w-full p-2 border rounded-lg"
                          value={minPrice}
                          onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          className="w-full p-2 border rounded-lg"
                          value={maxPrice}
                          onChange={(e) => setMaxPrice(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                        </div>
                    </div>
                  
                      {/* Color */}
                    <div className="mb-4">
                          <div className="relative w-full   mx-auto max-w-screen-sm">
                              <div id="bouton" className="relative group/bouton w-full">
                              <div className=' flex items-center justify-between'>
                                    <p className=' font-bold'>Color</p>
                                    <Image src={bellow} alt='alt' width={20} height={20}  />
                                  </div>

                                  <div style={{ display: filterMenu ? "block" : "none" }} className={`w-full  z-50  top-full bg-white origine-top  flex-col  `}>
                                    <div className='  '>
                                        <h5 className=' font-bold mt-3 mb-3'>Tops</h5>
                                        <div className=' flex flex-wrap gap-1 '>
                                          {
                                            colors.map(item => (
                                              <div onClick={() => filterColor(item)} key={item} style={{ backgroundColor: item, width:"25px", height:"25px" }} className={`  p-2 border ${item}  rounded-full   gap-2`}></div>
                                            ))
                                          }
                                        </div>
                              

                              
                            </div>
                            

                        
                              </div>
                              </div> 
                          </div>
                    </div>

                      {/* shipping */}

                    <div className="mb-4">
                          <div className="relative w-full   mx-auto max-w-screen-sm">
                              <div id="bouton" className="relative group/bouton w-full">
                              <div className=' flex items-center justify-between'>
                                    <p className=' font-bold'>Shipping</p>
                                    <Image src={bellow} alt='alt' width={20} height={20}  />
                                  </div>
                              <div style={{ display: filterMenu ? "block" : "none" }} className={`w-full  z-50  top-full bg-white origine-top  flex-col  `}>
                                <div className=' flex items-center p-2'>
                                  <input type="checkbox" /><p className=' ms-3'>All (243)</p>
                                </div>
                                <div className=' flex items-center p-2'>
                                  <input type='checkbox' /><p className=' ms-3'>Free Shipping (670)</p>
                                </div>
                            
                                

                            
                              </div>
                              </div>
                          </div>
                    </div>
 
            </div>

        </div>













































            <div className=' md:col-span-7'>
            <div  className='products  md:gap-4 grid sm:grid-cols-2 md:grid-cols-4'>
            {
            filtProduct.map(item => (
                <div key={item.id} className='relative car'>
                    <div  className='discount absolute'>{item.discount} $</div>
                    <div style={{ top:"3rem", width:"fit-content", backgroundColor:"#cc0d39" }} className='discount absolute'>{item.featured}</div>
                    <Image alt='alt'  src={item.image} width={300} height={460.03}  />
                    <div className='price flex justify-between '>
                        <div>{item.name}</div>
                        <div className=' block '>
                            <div style={{ fontSize:"18px" }} className=' font-bold '>{item.oldPrice}</div>
                            <div style={{ fontSize:"12px" }}>{item.newOld}</div>
                        </div>
                    </div>
                </div>
                ))
        }


        </div>


                {/* <Products products={filtProduct} /> */}

                {/* {filtProduct.map(i => (

                <div> {i.discount} </div>
                ) )} */}
            </div>
            
        
        </div>

        <GetApp />
        
    </div>
  )
}

export default Category