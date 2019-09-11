import * as React from 'react'
import {RouteComponentProps, withRouter} from "react-router";

interface galleryProps {
  products: any[]
}

const Gallery: React.FC<RouteComponentProps<any> & galleryProps> = (props) => {
  

  console.log(props)
  return(
    <div>test</div>
  )
    

}

export default withRouter(Gallery)