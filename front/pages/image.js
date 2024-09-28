import axios from 'axios';
import React, { useState } from 'react'

function Image() {

    const [fetchImage, setfetchImage] = useState();
    const imageFetch = () => {

        try {
            const images = axios.get("http://127.0.0.1:8000/api/pics")
            console.log(images.data)
        } catch (error) {
            console.log(error)
        }
    
    }
    imageFetch()
  return (
    <div>image</div>
  )
}

export default Image