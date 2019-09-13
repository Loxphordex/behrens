import * as React from 'react';
import { useState, useEffect } from 'react'
import { History } from 'history'
import { Item } from '../../store/items/types'
import { findImage } from '../../images/images-export'
import { Image, ImageFit, IImageProps } from 'office-ui-fabric-react/lib/Image';
import { Stack, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { FontSizes } from '@uifabric/fluent-theme/lib/fluent/FluentType';

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
      margin: '1% auto',
      maxWidth: '500px',
    }
  };

  const itemStyles: React.CSSProperties = {
    padding: 5,
    display: 'inline-block',
    margin: 'auto',
    textAlign: 'center',
  };

  useEffect(() => {
    const prodImage = findImage(item.dataName)
    setImage(prodImage)
  }, [item])

  return(
    <div key={item.id}>
      <Stack horizontal={true} styles={stackStyles}>
        <Image
          src={image}
          alt={item.name}
          {...imageProps as any}
        />  
        <div style={{...itemStyles, textAlign: 'left'}}>
          <h2 style={{ margin: 0 }}>{item.name}</h2>
          <div>{item.category}</div>
        </div>  

        <div style={{...itemStyles, alignSelf: 'center' }}>
          <div style={{ fontSize: FontSizes.size32, color: '#a4373a', textAlign: 'right'}}>
            {`$${item.cost}`}

          </div>
        </div>  
      </Stack>
    </div>
  )
}
