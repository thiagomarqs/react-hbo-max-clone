import { useEffect, useState } from "react";

interface Scroll {
  scrollY: number;
  scrollX: number;
}

export const useWindowScroll = (): Scroll => {

  const [scroll, setScroll]  = useState<Scroll>({scrollY: 0, scrollX: 0});

  useEffect(() => {    

    window.onscroll = (e) => {
      const { scrollY, scrollX } = window;
      setScroll({scrollY: scrollY, scrollX: scrollX});
    }

  }, []);

  return scroll;
}