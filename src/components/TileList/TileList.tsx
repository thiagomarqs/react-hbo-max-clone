import { List } from "components/List/List";
import { Movie } from "models/Movie";
import { v4 as uuid } from "uuid";
import { Tile } from "./Tile";

export interface TileListProps {
  list: Movie[];
  tileSize: 'default' | 'small' | 'large' | 'wide';
  mode: "horizontal" | "vertical";
  title?: string;
  highlightMessage?: {
    title: string;
    subtitle: string;
    button: {
      title: string;
      onClick: () => void;
    }
  }
  className?: string;
}

export const TileList = (props: TileListProps) => {
  const { list, tileSize, mode, title, highlightMessage, className } = props;

  return (
    <div className={`mb-12 ${className || ''}`}>
      {
        title &&
        <div className="ml-7 mb-2 text-white text-lg font-bold md:ml-14">
          <h2>{title}</h2>
        </div>
      }
      <List className="pl-7 md:pl-14" mode={mode} numberOfItemsToMoveUsingNavigationArrows={6}>
        {list.map(item => <Tile size={tileSize} key={uuid()} {...item} />)}
      </List>
    </div>
  )
}