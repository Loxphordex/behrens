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
    height: 300,
  };

  return(
    <div 
      className='prod-image-container ms-Grid-row' 
      id={product.id} 
      key={product.id}
      onClick={() => history.push(`/info/${product.id}`)}>
      <div className='ms-Grid-col ms-sm-12 ms-md-4'>
        <Image
          src={sourceImage}
          alt={product.name}
          {...imageProps as any}
        />
        <div 
          style={{ fontSize: FontSizes.size20, textAlign: "center", cursor: 'pointer' }}>
          { product.name }
        </div>;
      </div>
    </div>
  )
}