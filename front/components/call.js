import React from 'react'

function Call({onClick}) {
    const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', "3XL", "4XL", "5XL", "One size"];
  return (
    <div>
      <div className="mb-4">
                        <div className="relative w-full   mx-auto max-w-screen-sm">
                            <div id="bouton" className="relative group/bouton w-full">
                            <div className=' flex items-center justify-between'>
                                  <p className=' font-bold'>Size</p>
                             
                                </div>
                            <div  >
                              

                            <h5 className=' font-bold mt-3 mb-3'>Tops</h5>
                              <div className=' flex flex-wrap gap-1 '>
                                {
                                  sizes.map(item => (
                                    <div onClick={onClick(item)}  key={item} className='w-fit p-2 border   text-black hover:bg-black hover:text-white rounded-md gap-2'> {item} </div>
                                  ))
                                }
                              </div>
                            

                           
                              

                          
                            </div>
                            </div>
                        </div>
                    </div>
    
    </div>
  )
}

export default Call