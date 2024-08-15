import { Button, Image } from '@nextui-org/react'
import React from 'react'

function DeleteAccount() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
    
    
    <div className=' flex items-center justify-between mb-3'>
                <h2 className="text-xl font-bold mt-3 mb-3">Delete Account</h2>
                {/* <h3 className=' text-lg font-bold mt-3 mb-3'>Cart</h3> */}
                <div className=' bg-slate-200 p-2 rounded-full'>
                    <Image  width={18} height={18} alt='close' src='/close.png' />

                </div>
            </div>
    <p className="text-gray-600 mb-4">
      This will permanently delete your account. This action cannot be undone. Are you sure you want to continue?
    </p>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <Button  className=' bg-white text-black rounded-full border' href="/auth/signup" variant="flat">
            Cancel
          </Button>
          <Button     className=' bg-black text-white rounded-full' href="#" variant="flat">
            Delete Account
          </Button>
    </form>
  </div>
  )
}

export default DeleteAccount