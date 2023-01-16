import { useEffect, useState } from "react"

export const useCurrentScreenWidth = () => {
  
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => window.onresize = () => setWidth(window.innerWidth), []);

  return width;
}