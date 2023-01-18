import { v4 as uuid } from "uuid";
import { Tile, TileProps } from "./Tile";

export interface TileListProps {
  list: TileProps[];
  title?: string;
  highlightMessage?: {
    title: string;
    subtitle: string;
    button: {
      title: string;
      onClick: () => void;
    }
  }
}

// TODO: Scroll

export const TileList = (props: TileListProps) => {
  const { list, title, highlightMessage } = props;
  return (
    <div className="mb-12">
      { 
        title && 
        <div className="ml-7 mb-2 text-white text-lg font-bold">
          <h2>{title}</h2>
        </div> 
      }
      <div className="pl-7 flex justify-between overflow-y-hidden">
        {list.map(item => <Tile key={uuid()} {...item}/>)}
      </div>
    </div>
  )
}