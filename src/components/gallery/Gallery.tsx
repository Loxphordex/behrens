import * as React from 'react'
import {RouteComponentProps, withRouter} from "react-router";

interface galleryProps {
  products: any[]
}

class Gallery extends React.Component<RouteComponentProps<any> & galleryProps> {
  
  render() {
    console.log(this.props)
    return(
      <div>test</div>
    )
    
  }
}

export default withRouter(Gallery)