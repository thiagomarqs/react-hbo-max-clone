import { NavigationArrows } from "components/NavigationArrows/NavigationArrows";
import { PropsWithChildren, useRef } from "react";

export interface ListProps extends PropsWithChildren {
  mode: "horizontal" | "vertical";
  numberOfItemsToMoveUsingNavigationArrows: number;
  className?: string;
}

export const List = (props: ListProps) => {
  const { mode, numberOfItemsToMoveUsingNavigationArrows, children, className } = props;
  const listRef = useRef<HTMLDivElement>(null);

  const moveList = (to: 'right' | 'left') => {
    if (!listRef) return;

    const list = listRef.current as HTMLDivElement;
    const { scrollWidth } = list;
    const currentTranslate = list.style.translate !== '' ? Math.abs(parseInt(list.style.translate)) : 0;
    const firstItemWidth = (list.children[0] as HTMLElement).offsetWidth;

    let units = firstItemWidth * numberOfItemsToMoveUsingNavigationArrows;
    units = to === 'right' ? units : units * -1;

    const newPosition = currentTranslate + units;
    const hasReachedLimitOfTheList = scrollWidth < newPosition;
    
    if(hasReachedLimitOfTheList) return;

    list.style.translate = `-${newPosition}px`;
  }

  return (
    <div className="group relative h-fit overflow-x-scroll md:overflow-x-hidden">
      { mode === 'horizontal' && <NavigationArrows toLeftAction={() => moveList('left')} toRightAction={() => moveList('right')}/> }
      <div ref={listRef} className={`flex shrink-0 gap-3 transition-[translate] duration-1000 ${mode === 'vertical' ? 'flex-wrap justify-start gap-y-12' : ''} ${className || ''}`}>
        { children }
      </div>
    </div>
  )
}