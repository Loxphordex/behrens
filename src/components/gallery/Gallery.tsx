import * as React from 'react'
import {RouteComponentProps, withRouter} from "react-router";
import { Image } from 'office-ui-fabric-react/lib/Image';

interface galleryProps {
  products: any[]
  productData: any[]
  imagesStore: any
}

const Gallery: React.FC<RouteComponentProps<any> & galleryProps> = (props) => {
  return(
    <div>test</div>
  )
    

}

export default withRouter(Gallery)