import * as React from 'react';
import { useState, useEffect } from 'react'
import { History } from 'history'
import { Item } from '../../store/items/types'
import { findImage } from '../../images/images-export'
import { Image, ImageFit, IImageProps } from 'office-ui-fabric-react/lib/Image';

interface CartItemProps {
  item: Item
  del: any
  history: History
}

export const CartItem: React.FC<CartItemProps> = ({item, del, history}) => {
  const [image, setImage] = useState('')
  const imageProps: IImageProps = {
    imageFit: ImageFit.contain,
    height: 200,
    width: 300
  };

  useEffect(() => {
    const prodImage = findImage(item.dataName)
    setImage(prodImage)
  }, [item])

  return(
    <div className='ms-Grid-row' key={item.id}>
      <div className='ms-Grid-col ms-sm6'>
        <Image 
          src={image}
          alt={item.name}
          {...imageProps as any}
        />
      </div>
    </div>
  )
}
