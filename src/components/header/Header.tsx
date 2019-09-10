import * as React from 'react'
import { useEffect } from 'react'
import { History } from 'history'
import { Link } from 'react-router-dom'
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

interface headerProps {
  history:History
}


const Header:React.FC<headerProps> = ({ history }) => {

  function getItems() {
    return [
      {
        key: 'living',
        name: 'Living',
        cacheKey: 'cash',
        ariaLabel: 'Living',
        onClick: () => history.push('/categories/living')
      },
      {
        key: 'dining',
        name: 'Dining',
        cacheKey: 'cash',
        ariaLabel: 'Dining',
        onClick: () => history.push('/categories/dining')
      },
      {
        key: 'bedroom',
        name: 'Bedroom',
        cacheKey: 'cash',
        ariaLabel: 'Bedroom',
        onClick: () => history.push('/categories/bedroom')
      },
      {
        key: 'office',
        name: 'Office',
        cacheKey: 'cash',
        ariaLabel: 'Office',
        onClick: () => history.push('/categories/office')
      },
    ]
  }

  function getFarItems() {
    return [
      {
        key: 'cart',
        name: 'Cart',
        cacheKey: 'cash',
        iconProps: {
          iconName: 'ShoppingCart',
        },
        ariaLabel: 'Cart',
        onClick: () => history.push('/cart')
      },
    ]
  }

  return(
    <CommandBar 
      items={getItems()}
      farItems={getFarItems()}
    />
  )
}

export default Header