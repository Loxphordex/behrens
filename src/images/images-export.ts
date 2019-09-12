import All_Purpose_Chair from './All Purpose Chair.jpg'
import Ancient_Gray from './Ancient Gray.jpg'
import Basic_Dining_Set from './Basic Dining Set.jpg'
import Blocky_Comfort from './Blocky Comfort.jpg'
import Coffee_Table_Pair from './Coffee Table Pair.jpg'
import Dusty_Desk from './Dusty Desk.jpg'
import Fancy_Bedroom_Pillow from './Fancy Bedroom Pillow.jpg'
import Fancy_Bedroom_Set from './Fancy Bedroom Set.jpg'
import Leather_Chunk from './Leather Chunk.jpg'
import Posh_Dining_Set from './Posh Dining Set.jpg'
import Spread_of_Stripes from './Spread of Stripes.jpg'
import Squishable_Round from './Squishable Round.jpg'
import Supply_Starter_Pack from './Supply Starter Pack.jpg'
import Throw_Pillows from './Throw Pillows.jpg'

export const imagesStore = {
  All_Purpose_Chair,
  Ancient_Gray,
  Basic_Dining_Set,
  Blocky_Comfort,
  Coffee_Table_Pair,
  Dusty_Desk,
  Fancy_Bedroom_Pillow,
  Fancy_Bedroom_Set,
  Leather_Chunk,
  Posh_Dining_Set,
  Spread_of_Stripes,
  Squishable_Round,
  Supply_Starter_Pack,
  Throw_Pillows,
}

export function findImage(dataName:string) {
  const store:any = imagesStore
  const image = store[dataName]
  return (image)
    ? image
    : `No image exists with dataname: ${dataName}`
}