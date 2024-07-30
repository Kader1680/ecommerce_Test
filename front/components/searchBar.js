import React from 'react'
import {Input} from "@nextui-org/react";
function SearchBar() {
  return (
    <div>
    <Input
     className=' bg-transparent'
      isClearable
      radius="lg"
      placeholder="search items"
      startContent={
        <img width={20} src='/images/searchicon.png' />
      }
    />
  </div>
  )
}

export default SearchBar