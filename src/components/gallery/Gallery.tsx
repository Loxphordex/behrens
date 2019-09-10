import * as React from 'react'

interface galleryProps {
  category:string,
  products:any[]
}

const Gallery: React.FC<galleryProps> = ({ category, products }) => {
  return(
    <div>test</div>
  )
}

export default Gallery