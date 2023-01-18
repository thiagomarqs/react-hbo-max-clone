import { NavigationArrow } from "components/NavigationArrow/NavigationArrow";
import { useRef } from "react";
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

export const TileList = (props: TileListProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const { list, title, highlightMessage } = props;

  const moveList = (to: 'right' | 'left') => {
    if (!listRef) return;

    const numberOfTilesToMove = 6;
    const list = listRef.current as HTMLDivElement;
    const { scrollWidth } = list;
    const currentTranslate = list.style.translate !== '' ? Math.abs(parseInt(list.style.translate)) : 0;
    const tileWidth = (list.children[0] as HTMLAnchorElement).offsetWidth;

    let units = tileWidth * numberOfTilesToMove;
    units = to === 'right' ? units : units * -1;

    const newPosition = currentTranslate + units;
    
    if(scrollWidth < newPosition) return;

    list.style.translate = `-${newPosition}px`;
  }

  return (
    <div className="mb-12">
      {
        title &&
        <div className="ml-7 mb-2 text-white text-lg font-bold md:ml-14">
          <h2>{title}</h2>
        </div>
      }
      <div className="group relative overflow-x-scroll md:overflow-x-hidden">
        <div className="hidden md:block absolute opacity-0 h-full w-full group-hover:opacity-100">
          <NavigationArrow direction="left" action={() => moveList("left")} />
          <NavigationArrow direction="right" action={() => moveList("right")} />
        </div>
        <div ref={listRef} className="pl-7 flex justify-between transition-[translate] duration-1000 md:pl-14">
          {list.map(item => <Tile key={uuid()} {...item} />)}
        </div>
      </div>
    </div>
  )
}