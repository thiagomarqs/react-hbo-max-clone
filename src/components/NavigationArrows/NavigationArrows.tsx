import { NavigationArrow } from "./NavigationArrow"

export interface NavigationArrowsProps {
  toLeftAction: () => void;
  toRightAction: () => void;
}

export const NavigationArrows = (props: NavigationArrowsProps) => {
  const { toRightAction, toLeftAction } = props;

  return (
    <div className="hidden md:block absolute opacity-0 h-full w-full group-hover:opacity-100">
      <NavigationArrow direction="left" action={toLeftAction} />
      <NavigationArrow direction="right" action={toRightAction} />
    </div>
  )
}