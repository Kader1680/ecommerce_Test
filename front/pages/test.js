import React from 'react'
import SideBarCart from '../components/sideBarCart'
import Notification from '../components/notification'
import DeleteAccount from '../components/deleteAccount'
import AddShippingAdress from '../components/addShippingAdress'
import AddPaymentMethod from '../components/addPaymentMetho'

function Test() {
  return (
    <div>
        <AddPaymentMethod />
        <AddShippingAdress />
        <DeleteAccount />
        <Notification />
        <SideBarCart/>
    </div>
  )
}

export default Test