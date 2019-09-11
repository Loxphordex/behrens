import * as React from 'react'
import {RouteComponentProps, withRouter} from "react-router";
import { ProductImage } from '../product-image/ProductImage'

interface galleryProps {
  products: any[]
  imagesStore: any
}

const Gallery: React.FC<RouteComponentProps<any> & galleryProps> = (props) => {
  
  const category = props.location.pathname.slice(12)
  const { products, imagesStore } = props
  
  return(
    <div className='ms-Grid' dir='ltr'>
      { products && 
      products.map(product => {
        if (product.category === category) {
          const sourceImage = imagesStore[product.dataName]
          return <ProductImage product={product} key={product.id} sourceImage={sourceImage} />
        }
      })}
    </div>
  )
    

}

export default withRouter(Gallery)