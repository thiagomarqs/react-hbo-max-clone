import { useCurrentScreenWidth } from "hooks/useCurrentScreenWidth";
import { useEffect, useState } from "react";
import { ContentMainInfo, ContentMainInfoProps } from "./ContentMainInfo"

export interface ContentDetailsProps extends ContentMainInfoProps {
  backdropUrl: string;
  posterUrl: string;
  description: string;
}

export const ContentDetails = (props: ContentDetailsProps) => {
  const {
    backdropUrl,
    posterUrl,
    certification,
    description,
    releaseDate,
    runtimeInMinutes,
    logo: logoUrl
  } = props;

  const screenWidth = useCurrentScreenWidth();

  const [ backgroundImageUrl, setBackgroundImageUrl ] = useState(posterUrl);

  useEffect(() => { 
    const isSmallScreen = screenWidth < 640;
    const bgImgUrl = isSmallScreen ? posterUrl : backdropUrl;
    setBackgroundImageUrl(bgImgUrl);
  }, [screenWidth]);

  return (
    <div className="relative mb-6">

      <div className="absolute -z-1 top-0 w-full h-full bg-contain bg-no-repeat mb-6 sm:bg-cover sm:bg-center" style={{ backgroundImage: `url(${backgroundImageUrl})` }}></div>
      <div className="absolute -z-1 top-0 w-full h-full bg-backdrop-gradient-to-t"></div>
      <div className="absolute -z-1 top-0 w-full h-full bg-backdrop-gradient-to-r"></div>
      <div className="absolute -z-1 top-0 w-full h-full bg-backdrop-gradient-to-l"></div>
      <div className="absolute -z-1 top-0 w-full h-full bg-backdrop-gradient-to-b"></div>

      <div className="relative h-max pl-7 w-11/12 pt-[67vh] sm:pt-[40vh] lg:pt-[70vh]">

        <ContentMainInfo
          logo={logoUrl}
          runtimeInMinutes={runtimeInMinutes}
          certification={certification}
          releaseDate={releaseDate} />

        <div className="mt-3">
          <p>{description}</p>
        </div>
      </div>

    </div>
  )

}