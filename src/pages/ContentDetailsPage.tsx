import { ContentDetails } from "components/ContentDetails/ContentDetails"
import { Loading } from "components/Loading/Loading"
import { SectionGroup } from "components/SectionGroup/SectionGroup"
import { TileProps } from "components/TileList/Tile"
import { TileList } from "components/TileList/TileList"
import { Movie } from "models/api/movie/Movie"
import { SectionDefinition } from "models/components/SectionDefinition"
import { useQuery } from "react-query"
import { getMovie } from "services/movies"


// TODO: Load all content from API with the movie id -> React Router + React Query + Axios.
// TODO: Movie certification
// TODO: Movie technical info
// TODO: Related content (Get based on movie category)

const sections: SectionDefinition[] = [
  {
    header: 'Cast & Crew',
    rows: [
      { label: 'Lefty', value: 'Al Pacino' },
      { label: 'Lefty', value: 'Al Pacino' },
      { label: 'Lefty', value: 'Al Pacino' },
      { label: 'Lefty', value: 'Al Pacino' },
      { label: 'Lefty', value: 'Al Pacino' },
      { label: 'Lefty', value: 'Al Pacino' },
    ],
    expandByDefault: true
  },
  {
    header: 'Cast & Crew',
    rows: [
      { label: 'Lefty', value: 'Al Pacino' }
    ]
  },
  {
    header: 'Cast & Crew',
    rows: [
      { label: 'Lefty', value: 'Al Pacino' }
    ]
  },
  {
    header: 'Cast & Crew',
    rows: [
      { label: 'Lefty', value: 'Al Pacino' }
    ]
  },
]

const movies: TileProps[] = [
  {
    imageUrl: 'https://art-gallery-latam.api.hbo.com/images/GYQFtyQxJ5MLCwwEAAABY/tileburnedin?v=e854aecfc5e709fa4b0893b993a1a097&size=320x480&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:warnerbros&language=en-us',
    size: 'default',
  },
  {
    imageUrl: 'https://image.tmdb.org/t/p/w500//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    size: 'default',
    caption: { secondary: 'HBO' }
  },
  { imageUrl: 'https://art-gallery-latam.api.hbo.com/images/GYQFtyQxJ5MLCwwEAAABY/tileburnedin?v=e854aecfc5e709fa4b0893b993a1a097&size=320x480&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:warnerbros&language=en-us', size: 'default' },
  { imageUrl: 'https://art-gallery-latam.api.hbo.com/images/GYQFtyQxJ5MLCwwEAAABY/tileburnedin?v=e854aecfc5e709fa4b0893b993a1a097&size=320x480&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:warnerbros&language=en-us', size: 'default' },
  { imageUrl: 'https://art-gallery-latam.api.hbo.com/images/GYQFtyQxJ5MLCwwEAAABY/tileburnedin?v=e854aecfc5e709fa4b0893b993a1a097&size=320x480&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:warnerbros&language=en-us', size: 'default' },
  { imageUrl: 'https://art-gallery-latam.api.hbo.com/images/GYQFtyQxJ5MLCwwEAAABY/tileburnedin?v=e854aecfc5e709fa4b0893b993a1a097&size=320x480&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:warnerbros&language=en-us', size: 'default' },
  { imageUrl: 'https://art-gallery-latam.api.hbo.com/images/GYQFtyQxJ5MLCwwEAAABY/tileburnedin?v=e854aecfc5e709fa4b0893b993a1a097&size=320x480&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:warnerbros&language=en-us', size: 'default' },
  { imageUrl: 'https://art-gallery-latam.api.hbo.com/images/GYQFtyQxJ5MLCwwEAAABY/tileburnedin?v=e854aecfc5e709fa4b0893b993a1a097&size=320x480&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:warnerbros&language=en-us', size: 'default' },
  { imageUrl: 'https://art-gallery-latam.api.hbo.com/images/GYQFtyQxJ5MLCwwEAAABY/tileburnedin?v=e854aecfc5e709fa4b0893b993a1a097&size=320x480&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:warnerbros&language=en-us', size: 'default' },
  { imageUrl: 'https://art-gallery-latam.api.hbo.com/images/GYQFtyQxJ5MLCwwEAAABY/tileburnedin?v=e854aecfc5e709fa4b0893b993a1a097&size=320x480&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:warnerbros&language=en-us', size: 'default' },
  { imageUrl: 'https://art-gallery-latam.api.hbo.com/images/GYQFtyQxJ5MLCwwEAAABY/tileburnedin?v=e854aecfc5e709fa4b0893b993a1a097&size=320x480&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:warnerbros&language=en-us', size: 'default' },
  { imageUrl: 'https://art-gallery-latam.api.hbo.com/images/GYQFtyQxJ5MLCwwEAAABY/tileburnedin?v=e854aecfc5e709fa4b0893b993a1a097&size=320x480&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:warnerbros&language=en-us', size: 'default' },
  { imageUrl: 'https://art-gallery-latam.api.hbo.com/images/GYQFtyQxJ5MLCwwEAAABY/tileburnedin?v=e854aecfc5e709fa4b0893b993a1a097&size=320x480&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:warnerbros&language=en-us', size: 'default' },
  { imageUrl: 'https://art-gallery-latam.api.hbo.com/images/GYQFtyQxJ5MLCwwEAAABY/tileburnedin?v=e854aecfc5e709fa4b0893b993a1a097&size=320x480&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:warnerbros&language=en-us', size: 'default' },
]

export const ContentDetailsPage = () => {

  const { isLoading, isError, data, error } = useQuery('getMovie', () => getMovie(550));

  if(isLoading) return <Loading/>

  const { overview, runtime, release_date, backdrop_url, poster_url, original_title } = data as Movie;

  return (
    <div className="w-screen text-text-secondary">

      <ContentDetails
        backdropUrl={backdrop_url}
        posterUrl={poster_url}
        logo={{
          title: original_title
        }}
        description={overview}
        runtimeInMinutes={runtime}
        certification={'16'}
        releaseDate={new Date(release_date)} />

      <TileList title="More Like This" list={movies} />

      <SectionGroup sections={sections} />

    </div>
  )
}