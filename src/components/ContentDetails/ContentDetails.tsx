import { useCurrentScreenWidth } from "hooks/useCurrentScreenWidth";
import { Content } from "models/Content";
import { useEffect, useState } from "react";
import { ContentMainInfo } from "./ContentMainInfo";

export interface ContentDetailsProps {
  content: Content;
}

export const ContentDetails = (props: ContentDetailsProps) => {

  const { content } = props;

  const { 
    poster_url,
    backdrop_url,
    runtime,
    release_date,
    overview,
    original_title,
    certification
  } = content;

  const screenWidth = useCurrentScreenWidth();

  const [ backgroundImageUrl, setBackgroundImageUrl ] = useState(poster_url);

  useEffect(() => { 
    const isSmallScreen = screenWidth < 640;
    const bgImgUrl = isSmallScreen ? poster_url : backdrop_url;
    setBackgroundImageUrl(bgImgUrl);
  }, [screenWidth, poster_url, backdrop_url]);

  return (
    <div className="relative mb-6">

      <div className="absolute -z-1 top-0 w-full h-full bg-contain bg-no-repeat mb-6 sm:bg-cover sm:bg-center" style={{ backgroundImage: `url(${backgroundImageUrl})` }}></div>
      <div className="absolute -z-1 top-0 w-full h-full bg-backdrop-gradient-to-t"></div>
      <div className="absolute -z-1 top-0 w-full h-full bg-backdrop-gradient-to-r"></div>
      <div className="absolute -z-1 top-0 w-full h-full bg-backdrop-gradient-to-l"></div>
      <div className="absolute -z-1 top-0 w-full h-full bg-backdrop-gradient-to-b"></div>

      <div className="relative h-max pl-7 w-11/12 pt-[67vh] sm:pt-[40vh] lg:pt-[70vh] md:pl-14">

        <ContentMainInfo
          logo={{title: original_title}}
          runtimeInMinutes={runtime}
          certification={certification}
          releaseDate={new Date(release_date)} />

        <div className="mt-3 md:w-1/2 md:text-lg">
          <p>{overview}</p>
        </div>
      </div>

    </div>
  )

}