import * as React from 'react'
import { History } from 'history'
import { Image, ImageFit, IImageProps } from 'office-ui-fabric-react/lib/Image';
import { FontSizes } from '@uifabric/fluent-theme/lib/fluent/FluentType';

interface PIProps {
  product: any,
  key:number,
  sourceImage: any,
  history: History
}

export const ProductImage: React.FC<PIProps> = (props) => {
  const { product, sourceImage, history } = props
  const imageProps: IImageProps = {
    imageFit: ImageFit.contain,
    height: 200,
    width: 300
  };

  return(
    <div 
      className='ms-Grid-col ms-sm6 ms-md4 ms-lg2' 
      style={{ display: 'inline-block '}}
      id={product.id} 
      key={product.id}
      onClick={() => history.push(`/info/${product.id}`)}>
      <div>
        <Image
          src={sourceImage}
          alt={product.name}
          {...imageProps as any}
        />
        <div style={{ cursor: 'pointer' }} className='basic-info'>
          <div 
            style={{ fontSize: FontSizes.size20, fontWeight: 'bold', cursor: 'pointer' }}>
            { product.name }
          </div>
          <div 
            style={{ fontSize: FontSizes.size18, cursor: 'pointer' }}>
            { `$${product.cost}` }
          </div>
        </div>
      </div>
    </div>
  )
}