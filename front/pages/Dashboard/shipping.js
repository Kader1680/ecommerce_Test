import React from 'react'
import ManageShippingCarriers from './shipping/manageShippingCarriers '
import PrintLabelsPackingSlips from './shipping/PrintLabelsPackingSlips'
import ManageFulfillmentCenters from './shipping/manageFulfillmentCenters'
import CalculateShippingRates from './shipping/calculateShippingRates'
ManageFulfillmentCenters
function Shipping() {
  return (
    <div className="min-h-screen bg-gray-100 p-3">
    <h1 className="text-2xl font-bold mb-6">Shipping and Fulfillment</h1>
    <div className="grid grid-cols-1 md:grid-cols-7 md:gap-6">
      <div className="col-span-4 ">
        <div className=' md:mb-6 bg-white p-2 rounded-lg'>
        <ManageShippingCarriers />
        </div>
        <div className='mb-3 mt-4 bg-white p-2  rounded-lg'>
        <ManageFulfillmentCenters />

        </div>
      </div>
      <div className="col-span-3  ">
      <div className='mt-4 md:mt-0   md:mb-6 bg-white p-2 rounded-lg'>
      <CalculateShippingRates />

      </div>
      <div  className=' mt-4 md:mb-6 bg-white p-2  rounded-lg'>
      <PrintLabelsPackingSlips />

      </div>
      </div>
      {/* <div className="col-span-2 bg-white">
      </div>
      <div className="col-span-1 bg-white">
      </div> */}
    </div>
  </div>
  )
}

export default Shipping