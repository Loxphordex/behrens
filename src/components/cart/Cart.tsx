import * as React from 'react'

interface CartProps {
  items: any[]
  del: any
}

export const Cart: React.FC<CartProps> = (props) => {
  return(
    <section>
      Shopping Cart
    </section>
  )
}