import * as React from 'react'
import { useState, useEffect } from 'react'
import { productState } from '../../store/products/types'
import {RouteComponentProps, withRouter} from "react-router";

interface InfoProps {
  products: productState
}

const ProductInfo: React.FC<RouteComponentProps<any> & InfoProps> = (props) => {

  const { products } = props
  const [id, setId] = useState(props.match.params.id)
  const [product, setProduct] = useState({})

  useEffect(() => {
    const prod = products.products.filter(product => product.id === id)
    setProduct(prod[0])
  })

  
 
  return(
    <section>Product Info</section>
  )
}

export default withRouter(ProductInfo)