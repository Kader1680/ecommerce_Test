import React from 'react'
import {Input} from "@nextui-org/react";
import Image from 'next/image';

function SearchBar() {
  return (
    <div>

      <Input
      className='searchBar bg-transparent'
        isClearable
        radius="lg"
        placeholder="search items"
        startContent={
          <Image alt='alt' width={20} height={20} src='/searchicon.png' />
        }
      />
  </div>
  )
}

export default SearchBar