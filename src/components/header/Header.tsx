import * as React from 'react'
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
        key: 'categories',
        name: 'Categories',
        cacheKey: 'cash',
        iconProps: {
          iconName: 'OEM',
        },
        ariaLabel: 'Categories',
        onClick: () => history.push('/categories')
      },
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
      items={[]}
      farItems={getItems()}
    />
  )
}

export default Header