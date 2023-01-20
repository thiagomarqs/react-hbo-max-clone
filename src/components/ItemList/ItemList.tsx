import { List } from "components/List/List";
import { Item, ItemProps } from "./Item";

export interface ItemListProps {
  items: ItemProps[];
}

export const ItemList = (props: ItemListProps) => {
  return (
    <List className="mt-5 pl-7 md:pl-14" mode="horizontal" numberOfItemsToMoveUsingNavigationArrows={3}>
      <Item>Popular Movies</Item>
      <Item>Popular Shows</Item>
      <Item>Cartoon Network</Item>
      <Item>Comedy</Item>
      <Item>Horror</Item>
    </List>
  )
}