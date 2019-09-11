import * as React from 'react'
import { Image, ImageFit, IImageProps } from 'office-ui-fabric-react/lib/Image';
import { FontSizes } from '@uifabric/fluent-theme/lib/fluent/FluentType';

interface PIProps {
  product: any,
  key:number,
  sourceImage: any
}

export const ProductImage: React.FC<PIProps> = (props) => {
  const { product, key, sourceImage } = props
  const imageProps: IImageProps = {
    imageFit: ImageFit.contain,
    height: 300,
  };
  return(
    <div className='prod-image-container ms-Grid-row' key={product.id}>
      <div className='ms-Grid-col ms-sm-12'>
        <Image
          src={sourceImage}
          alt={product.name}
          {...imageProps as any}
        />
        <div style={{ fontSize: FontSizes.size20, textAlign: "center" }}>{ product.name }</div>;
      </div>
    </div>
  )
}