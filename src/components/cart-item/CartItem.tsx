import * as React from 'react';
import { useState, useEffect } from 'react'
import { History } from 'history'
import { Item } from '../../store/items/types'
import { findImage } from '../../images/images-export'
import { Image, ImageFit, IImageProps } from 'office-ui-fabric-react/lib/Image';
import { Stack, IStackStyles, IStackTokens, IStackItemStyles } from 'office-ui-fabric-react/lib/Stack';

interface CartItemProps {
  item: Item
  del: any
  history: History
}

export const CartItem: React.FC<CartItemProps> = ({item, del, history}) => {
  const [image, setImage] = useState('')
  const imageProps: IImageProps = {
    imageFit: ImageFit.contain,
    height: 100,
    width: 100
  };

  const stackStyles: IStackStyles = {
    root: {
      flexFlow: 'row'
    }
  };

  const itemStyles: React.CSSProperties = {
    padding: 5,
    display: 'inline-block'
  };

  useEffect(() => {
    const prodImage = findImage(item.dataName)
    setImage(prodImage)
  }, [item])

  return(
    <div key={item.id}>
      <div>
        <Stack horizontal={true} styles={stackStyles}>
            <Image
              src={image}
              alt={item.name}
              {...imageProps as any}
            />

            <div style={itemStyles}>{item.name}</div>

        </Stack>

        
      </div>
    </div>
  )
}
