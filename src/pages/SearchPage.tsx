import { SearchBar } from "components/SearchBar/SearchBar"
import { TileProps } from "components/TileList/Tile"
import { TileList } from "components/TileList/TileList"
import { FormEvent, useState } from "react"
import { useQuery } from "react-query"
import { Form } from "react-router-dom"
import { getPopular } from "services/movies"
import { searchMovie } from "services/search"

const IMAGE_URL = import.meta.env.VITE_API_IMAGE_BASE_URL;

export const SearchPage = () => {
  const [ searchString, setSearchString ] = useState("");
  const { isLoading: isLoadingSearchResults, data: searchResults, refetch: fetchSearchString, isSuccess: isSearchSuccess } = useQuery(['searchMovie', searchString], () => searchMovie(searchString), { enabled: false });
  const { isSuccess: isPopularSearchesResultSuccess, data: popularSearchesResult } = useQuery(['popularMovies'], () => getPopular());

  const onType = async (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearchString(value);
  }

  const renderSearchResults = () => {
    if(!searchResults) return "";

    const tiles: TileProps[] = [];
    const { results } = searchResults;

    results.forEach(r => {
      tiles.push({
        title: r.original_title,
        contentUrl: `/movie/${r.id}`,
        posterUrl: r.poster_path ? `${IMAGE_URL}/w342/${r.poster_path}` : '',
        backdropUrl: r.backdrop_path ? `${IMAGE_URL}/w780/${r.backdrop_path}` : '',
        size: 'wide',
        caption: {main: r.original_title}
      })
    })

    return (
      <div className="mt-10">
        <TileList tileSize="default" list={tiles} mode={"vertical"}/>
      </div>
    )
  }

  return (
    <div className="min-h-screen text-text-secondary">
      <Form className="mt-24 ml-7 mr-7 md:ml-14">
        <SearchBar 
          value={searchString}
          setValue={setSearchString}
          placeholder="What are you looking for?" 
          onType={onType} 
          onStopTyping={fetchSearchString}/>
      </Form>
      { isSearchSuccess && renderSearchResults() }
      { (!searchString && isPopularSearchesResultSuccess) && 
        <TileList className="mt-10" title="Popular Searches" tileSize="default" list={popularSearchesResult} mode={"vertical"}/> 
      }
    </div>
  )
}