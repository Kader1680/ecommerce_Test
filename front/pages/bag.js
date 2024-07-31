import { Button, Link } from '@nextui-org/react'
import React from 'react'
import {Card, CardBody} from "@nextui-org/react";
import Image from 'next/image';
// import { appstore } from '../public/appelBorder.png'
// import { playstore } from '../public/googleBorder.png'
function Bag() {
  return (
    <div className='bag '>
        <h2 className=' font-bold' style={{ fontSize:"48px" }}>
            Bag
            </h2>
             <div className='embty mr-auto  items-center'>
            <Image width={200} height={200} alt='alt' src='/embty.png' />

            <h2 className=' font-bold' style={{ fontSize:"48px" }}>
            YOUR BAG IS EMPTY
            </h2>

            <p style={{ width:"40%", margin: "auto" }}>
            Once you add something to your bag, it will appear here. Ready to get started?
            </p>

            <Button as={Link} className=' mt-5 mb-5 bg-black text-white rounded-full' href="#" variant="flat">
                Sell Now
            </Button>

        </div>






        <div className=' items grid sm:grid-cols-1 md:grid-cols-3 md:gap-4'>
            <div className=' col-span-2'>
            <div >
            
                <h3 className=' font-bold mt-6 mb-6'>4 items in your cart</h3>

                <div className='rounded border p-4'>
                    <div className='   flex items-center justify-between'>
                        <div className=' flex justify-center items-center'>
                            <Image width={50} height={50}   alt='alt' src='/profilItem.png' />
                            <div className=' ms-3'>
                                <h6>Floyd Miles</h6>
                                <p className=' font-normal'>@floydmiles </p>
                            </div>
                        </div>
                        <div className=' me-3'>
                            delete
                        </div>
                    </div>

                    <div className='flex items-center mt-3'>
                        <Image width={200} height={200}  alt='alt' src='/item (1).png' />
                        <div>
                            <div className=' ms-3 font-bold'>CIRCA BROWN LEATHER BELT Square Buckle Small 1.5”WIDE MADE IN USA STITCHED</div>
                            <div className='ms-3 flex items-center'>
                                <h6>$20.36</h6><p className=' line-through'>$25.00</p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>

        <div >
        

            <div className='rounded border p-4'>
                <div className='   flex items-center justify-between'>
                    <div className=' flex justify-center items-center'>
                        <Image width={50} height={200}  alt='alt' src='/profilItem.png' />
                        <div className=' ms-3'>
                            <h6>Floyd Miles</h6>
                            <p>@floydmiles </p>
                        </div>
                    </div>
                    <div className=' me-3'>
                        delete
                    </div>
                </div>

                <div className='flex items-center mt-3'>
                    <Image width={200} height={200}  alt='alt' src='/it.png' />
                    <div>
                        <div className=' ms-3 font-bold'>CIRCA BROWN LEATHER BELT Square Buckle Small 1.5”WIDE MADE IN USA STITCHED</div>
                        <div className='ms-3 flex items-center'>
                            <h6>$20.36</h6><p className=' line-through'>$25.00</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div >
        

            <div className='rounded border p-4'>
                <div className='   flex items-center justify-between'>
                    <div className=' flex justify-center items-center'>
                        <Image width={50} height={50}   alt='alt' src='/profilItem.png' />
                        <div className=' ms-3'>
                            <h6>Floyd Miles</h6>
                            <p>@floydmiles </p>
                        </div>
                    </div>
                    <div className=' me-3'>
                        delete
                    </div>
                </div>

                <div className='flex items-center mt-3'>
                    <Image width={200} height={200} alt='alt' src='/item (6).png' />
                    <div>
                        <div className=' ms-3 font-bold'>CIRCA BROWN LEATHER BELT Square Buckle Small 1.5”WIDE MADE IN USA STITCHED</div>
                        <div className='ms-3 flex items-center'>
                            <h6>$20.36</h6><p className=' line-through'>$25.00</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div>
        

            <div className='rounded border p-4 mt-2'>
                <div className='   flex items-center justify-between'>
                    <div className=' flex justify-center items-center'>
                        <Image width={50} height={50}  alt='alt' src='/profilItem.png' />
                        <div className=' ms-3'>
                            <h6>Floyd Miles</h6>
                            <p>@floydmiles </p>
                        </div>
                    </div>
                    <div className=' me-3'>
                        delete
                    </div>
                </div>

                <div className='flex items-center mt-3'>
                    <Image width={200} height={200} alt='alt' src='/item (6).png' />
                    <div>
                        <div className=' ms-3 font-bold'>CIRCA BROWN LEATHER BELT Square Buckle Small 1.5”WIDE MADE IN USA STITCHED</div>
                        <div className='ms-3 flex items-center'>
                            <h6>$20.36</h6><p className=' line-through'>$25.00</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div>
        

            <div className='rounded border p-4'>
                <div className='   flex items-center justify-between'>
                    <div className=' flex justify-center items-center'>
                        <Image width={50} height={50}  alt='alt' src='/profilItem.png' />
                        <div className=' ms-3'>
                            <h6>Floyd Miles</h6>
                            <p>@floydmiles </p>
                        </div>
                    </div>
                    <div className=' me-3'>
                        delete
                    </div>
                </div>

                <div className='flex items-center mt-3'>
                    <Image width={200} height={200} alt='alt' src='/item (5).png' />
                    <div>
                        <div className=' ms-3 font-bold'>CIRCA BROWN LEATHER BELT Square Buckle Small 1.5”WIDE MADE IN USA STITCHED</div>
                        <div className='ms-3 flex items-center'>
                            <h6>$20.36</h6><p className=' line-through'>$25.00</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

            </div>
   

            <div className='col-span-1'>

                <Card className=' bg-gray-200'>
                    <CardBody className=' '>
                        <p className=' font-bold'>Mother’s Day Sale: Extra 25% Off</p>
                        <p>Use code JUST4MOM to save on select styles.</p>
                    </CardBody>
                </Card>

                <div className='summary  pt-5 p-2'>
                    <h3 className=' mt-2'>Summary</h3>
                    <div className='price mt-3'>
                        <div className=' flex items-center justify-between'>
                            <div>
                                <ul>
                                    <li>Subtotal</li>
                                    <li>Estimated Shipping & Handling</li>
                                    <li>Estimated Tax</li>
                                    <li>Discount Total</li>
                                    <li>Total</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>$120.00</li>
                                    <li>$8.00</li>
                                    <li>—</li>
                                    <li>$12.00</li>
                                    <li>$116.00</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <Button style={{ width:"100%" }} as={Link} className=' mt-5 mb-5 bg-black text-white rounded-full' href="#" variant="flat">
                      Check Out
                    </Button>


                    <h3 className=' mb-4'>Download the app</h3>

                    <Image style={{ width:"100%" }} width={200} height={200} alt='alt' src='/Rectangle 2521.png' />

                    <p className=' mt-4'>List and shop and easier than on web </p>
                    <p className=' mt-4'>(and unlock the lastest features )</p>
                    {/* <div  className=' flex items-center mt-3 mb-3 '>
                        <Image width={200} height={200} alt='alt'   src={appstore} />
                        <Image width={200} height={200}  alt='alt' className=' ms-5'  src={playstore} />
                    </div> */}
                </div>
            </div>
        </div>
    
    
    </div>
  )
}

export default Bag