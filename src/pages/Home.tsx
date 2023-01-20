import { TileProps } from "components/TileList/Tile"
import { TileList } from "components/TileList/TileList"

export const Home = () => {

  const finishedPages: TileProps[] = [
    {
      caption: {main: 'Movies'},
      title: 'Movies',
      backdropUrl: '',
      size: 'default',
      contentUrl: '/movie/500',
      posterUrl: ''
    },
    {
      caption: {main: 'Search'},
      title: 'Search',
      backdropUrl: '',
      size: 'default',
      contentUrl: '/search',
      posterUrl: ''
    }
  ]

  return (
    <div className="text-text-secondary h-max w-screen pt-[27vh] sm:pt-[20vh] lg:pt-[30vh]">
      <h1 className="pl-7 mb-5 text-4xl text-white font-bold md:text-6xl md:pl-14">Under Construction</h1>
      <TileList mode="horizontal" title="Finished Pages" list={finishedPages} tileSize={"default"}/>
    </div>
  )
}