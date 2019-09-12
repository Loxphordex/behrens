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
  const [id, setId] = useState(0)
  const [product, setProduct] = useState({})
  console.log(products)

  useEffect(() => {
    async function handleId() {
      const paramsId = props.match.params.id
      setId(paramsId)
    }

    async function handleProduct() {
      const prod = products.products[id-1]
      setProduct(prod)
    }

    handleId()
    handleProduct()
  }, [products])

  //props.match.params.id
 
  return(
    <section>Info</section>
  )
}

export default withRouter(ProductInfo)