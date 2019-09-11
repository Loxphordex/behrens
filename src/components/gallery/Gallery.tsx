import * as React from 'react'
import {RouteComponentProps, withRouter} from "react-router";

interface galleryProps {
  products: any[]
  imagesStore: any
}

const Gallery: React.FC<RouteComponentProps<any> & galleryProps> = (props) => {
  return(
    <div>test</div>
  )
    

}

export default withRouter(Gallery)