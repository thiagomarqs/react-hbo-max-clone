import { Link } from "react-router-dom";

export interface TileProps {
  title: string;
  contentUrl: string;
  posterUrl: string;
  backdropUrl: string;
  size: 'default' | 'small' | 'large' | 'wide';
  caption?: {
    main?: string;
    secondary?: string;
  }
}

const tileDimensionsClassesBySize: Record<string, {width: string, height: string}> = {
  default: {
    width: 'w-[45vw] md:w-[15vw]',
    height: 'h-[40vh] md:h-[45vh]'
  },
  wide: {
    width: 'w-[87vw] md:w-[22vw]',
    height: 'h-[28vh] md:h-[25vh]'
  }
}

export const Tile = (props: TileProps) => {
  const { title, contentUrl, posterUrl, backdropUrl, size, caption } = props;
  const imageUrl = size == 'wide' ? backdropUrl : posterUrl;
  const { width, height } = tileDimensionsClassesBySize[size];
  
  return (
    <Link to={contentUrl}>
      <div className={`group/tile flex flex-col -ml-1 ${width}`}>
        <div className="relative duration-900">
          <div className="overflow-hidden p-1 transition-opacity opacity-70 group-active/tile:opacity-100 group-hover/tile:opacity-100">
            {imageUrl && <img className={height} src={imageUrl}/> }
            {!imageUrl && <div className={`p-2 w-full ${height} bg-[#20202E]`}></div>}
          </div>
          <div className="absolute top-0 -z-1 w-full h-full opacity-0 transition-opacity border-hbo-purple border-2 rounded group-active/tile:opacity-100 group-hover/tile:opacity-100"></div>
        </div>
        {
          caption && 
          <div className='ml-1'>
            { caption.main && <p className="text-text-secondary text-lg font-bold">{caption.main}</p> }
            { caption.secondary && <p className="text-sm">{caption.secondary}</p> }
          </div>
        }
      </div>
    </Link>
  )
}