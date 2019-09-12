import * as React from 'react'
import { FocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { List } from 'office-ui-fabric-react/lib/List';
import { IRectangle } from 'office-ui-fabric-react/lib/Utilities';
import { ITheme, getTheme, mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { createListItems, IExampleItem } from '@uifabric/example-data';

interface AppProps {
  categories: string[]
}

const Categories: React.FC<AppProps> = ({ categories }) => {
  return(
    <FocusZone>
      <List 
        className='categories-list'
        items={categories}
      />
    </FocusZone>
  )
}

export default Categories