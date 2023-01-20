import { PropsWithChildren } from "react";

export interface ItemProps extends PropsWithChildren {
  onClick?: () => void;
}

export const Item = (props: ItemProps) => {
  const { children} = props;
  return (
    <div className="h-fit w-max py-1 px-2 rounded-full border-[#ffffff66] border-[1px]">
      <h2 className="w-max text-sm font-bold text-white">{children}</h2>
    </div>
  )
}