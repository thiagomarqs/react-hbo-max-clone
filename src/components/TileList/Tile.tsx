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

// TODO: Highlight effect on hover (desktop)

export const Tile = (props: TileProps) => {
  const { contentUrl, imageUrl, size, caption } = props;
  return (
    <Link to={contentUrl}>
      <div className="-ml-1 group mr-3">
        <div className="relative">
          <img className="p-1 max-w-[40vw] max-h-[40vh]" src={imageUrl}/>
          <div className="absolute top-0 -z-1 w-full h-full opacity-0 transition-opacity duration-400 border-hbo-purple border-2 rounded group-active:opacity-100"></div>
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