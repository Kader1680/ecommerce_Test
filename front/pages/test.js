import React from 'react'
import SideBarCart from '../components/sideBarCart'
import Notification from '../components/notification'
import DeleteAccount from '../components/deleteAccount'
import AddShippingAdress from '../components/addShippingAdress'
import AddPaymentMethod from '../components/addPaymentMetho'
import DownloadApp from '../components/downloadApp'
import MakeOffer from '../components/makeOffer'
import Followers from '../components/followers'
import Following from '../components/following'

function Test() {
  return (
    <div>
        <Following />
        <Followers />
        <MakeOffer />
        <DownloadApp/>
        <AddPaymentMethod />
        <AddShippingAdress />
        <DeleteAccount />
        <Notification />
        <SideBarCart/>
    </div>
  )
}

export default Test