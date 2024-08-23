import React from 'react'
import ManageShippingCarriers from './shipping/manageShippingCarriers '
import PrintLabelsPackingSlips from './shipping/PrintLabelsPackingSlips'
import ManageFulfillmentCenters from './shipping/manageFulfillmentCenters'
import CalculateShippingRates from './shipping/calculateShippingRates'
ManageFulfillmentCenters
function Shipping() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-2xl font-bold mb-6">Shipping and Fulfillment</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="col-span-1">
        <ManageShippingCarriers />
      </div>
      <div className="col-span-1">
        <CalculateShippingRates />
      </div>
      <div className="col-span-1">
        <ManageFulfillmentCenters />
      </div>
      <div className="col-span-1">
        <PrintLabelsPackingSlips />
      </div>
    </div>
  </div>
  )
}

export default Shipping