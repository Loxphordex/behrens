import * as React from 'react'
import { useState, useEffect } from 'react'
import { productState } from '../../store/products/types'
import {RouteComponentProps, withRouter} from "react-router";

interface InfoProps {
  products: productState
  add: any
}

const ProductInfo: React.FC<RouteComponentProps<any> & InfoProps> = (props) => {
  
  
  const { products, add } = props
  const [id, setId] = useState(props.match.params.id)
  const [product, setProduct] = useState({})

  useEffect(() => {
    if (products.products && id) {
      console.log('effect' +products.products[id-1])
      const currentProduct = products.products[id-1]
      console.log('currentProduct: ' +currentProduct)
      return
    }
  }, [])
 
  return(
    <section>Info</section>
  )
}

export default withRouter(ProductInfo)