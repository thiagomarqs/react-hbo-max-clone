import { Link } from "react-router-dom";

export interface TileProps {
  contentUrl: string;
  imageUrl: string;
  size: 'default' | 'small' | 'large' | 'wide';
  caption?: {
    main?: string;
    secondary?: string;
  }
}

export const Tile = (props: TileProps) => {
  const { contentUrl, imageUrl, size, caption } = props;
  return (
    <Link to={contentUrl}>
      <div className="-ml-1 group/tile mr-3">
        <div className="relative duration-900">
          <img className="p-1 max-w-[40vw] max-h-[40vh] md:max-w-[45vw] md:max-h-[45vh] transition-opacity opacity-70 group-active/tile:opacity-100 group-hover/tile:opacity-100" src={imageUrl}/>
          <div className="absolute top-0 -z-1 w-full h-full opacity-0 transition-opacity border-hbo-purple border-2 rounded group-active/tile:opacity-100 group-hover/tile:opacity-100"></div>
        </div>
        {
          caption && 
          <div className='ml-1 mt-1'>
            { caption.main && <p className="text-white">{caption.main}</p> }
            { caption.secondary && <p className="text-sm">{caption.secondary}</p> }
          </div>
        }
      </div>
    </Link>
  )
}