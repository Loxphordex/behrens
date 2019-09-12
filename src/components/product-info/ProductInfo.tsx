import * as React from 'react'
import { useState, useEffect } from 'react'
import { productState } from '../../store/products/types'
import {RouteComponentProps, withRouter} from "react-router";
import { Image, ImageFit, IImageProps } from 'office-ui-fabric-react/lib/Image';
import { FontSizes } from '@uifabric/fluent-theme/lib/fluent/FluentType';
import { findImage } from '../../images/images-export'

interface InfoProps {
  products: productState
  add: any
  getProd: any
}

const ProductInfo: React.FC<RouteComponentProps<any> & InfoProps> = (props) => {
  
  
  const { products, add, getProd } = props
  const [id, setId] = useState(0)
  const [image, setImage] = useState('')
  const [product, setProduct] = useState({dataName: ''})

  useEffect(() => {
    async function handleProductProps() {
      const paramsId = props.match.params.id
      await setId(paramsId)

      const prod = products.products[id-1]
      await setProduct(prod)

      let prodImage

      if (prod && prod.dataName) {
        prodImage = findImage(prod.dataName)
      }

      await setImage(prodImage)
    }

    handleProductProps()
  }, [products, id])

  const imageProps: IImageProps = {
    imageFit: ImageFit.contain,
    height: 200,
    width: 300
  }
 
  return(
    <section>
      {products && product && image && <div className='info-container'>
        <Image 
          src={image}
        />
      </div>}
    </section>
  )
}

export default withRouter(ProductInfo)