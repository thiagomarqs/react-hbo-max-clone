import { ReactComponent as Arrow } from "assets/icons/arrow.svg";

export interface NavigationArrowProps {
  direction: 'right' | 'left';
  action: () => void;
}

export const NavigationArrow = (props: NavigationArrowProps) => {
  const { direction, action } = props;
  const directionRightClasses = "bg-gradient-to-l right-0";
  const directionLeftClasses = "bg-gradient-to-r left-0";
  const directionClasses = direction === 'right' ? directionRightClasses : directionLeftClasses;
  const rotateArrow = direction === 'right' ? "rotate-90" : "-rotate-90";

  return (
    <div onClick={action} className={`absolute z-10 from-black h-full w-[5%] hover:cursor-pointer ${directionClasses}`}>
      <Arrow className={`absolute right-1/2 top-1/2 my-[-20px] ${rotateArrow}`} />
    </div>
  )
}