import * as React from 'react'
import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';

interface CartProps {
  items: any[]
  del: any
}

export const Cart: React.FC<CartProps> = ({ items, del }) => {

  return(
    <section>
      <DetailsList
        items={items}
        setKey='set'
      />
    </section>
  )
}