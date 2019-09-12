import * as React from 'react'
import { useState, useEffect } from 'react'
import { productState } from '../../store/products/types'
import {RouteComponentProps, withRouter} from "react-router";
import { PrimaryButton } from 'office-ui-fabric-react'
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
  const [product, setProduct] = useState({
    id: 0,
    cost: 0,
    name: '',
    dataName: '',
    category: '',
    description: '',
  })

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
  }
 
  return(
    <section>
      {products && product && image && 
      <div className='info-container ms-Grid'
        style={{ width: '90%', maxWidth: '700px', margin: 'auto' }}>
        <div className='ms-Grid-row'>
          <Image
            className='ms-Grid-col ms-sm12'
            src={image}
            alt={product.dataName}
            {...imageProps as any}
          />
        </div>
        <h3 style={{  fontSize: FontSizes.size14, fontWeight: 'normal', margin: 0, marginTop: '5%' }}
          >{`${product.category[0].toUpperCase()}${product.category.slice(1)}`}
        </h3>
        <h2 style={{ margin: 0 }}>{product.name}</h2>
        <div style={{ fontSize: FontSizes.size24 }}>{`$${product.cost}`}</div>
        <p style={{ fontSize: FontSizes.size12 }}>{product.description}</p>
        <div style={{ display: 'block', margin: '10% auto', textAlign: 'center' }}>
          <PrimaryButton text='Add to Cart' />
        </div>
      </div>}
    </section>
  )
}

export default withRouter(ProductInfo)