import * as React from 'react'
import { History } from 'history'
import { CartItem } from '../cart-item/CartItem'
import { itemState } from '../../store/items/types'

interface CartProps {
  items: itemState
  del: any
  history: History
}

export const Cart: React.FC<CartProps> = ({ items, del, history }) => {

  return(
    <section>
      <div className='cart-list ms-Grid'>
        {items && items.items.map(item => {
          return(
            <CartItem item={item} del={del} key={item.id} history={history} />
          )
        })}
      </div>
    </section>
  )
}