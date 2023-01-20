import axios, { AxiosResponse } from 'axios';
import { Cast } from 'models/api/movie/credits/Cast';
import { Credits } from 'models/api/movie/credits/Credits';
import { CreditsResponse } from 'models/api/movie/credits/CreditsResponse';
import { Crew } from 'models/api/movie/credits/Crew';
import { MovieResponse } from 'models/api/movie/MovieResponse';
import { MovieRecommendationResponse } from 'models/api/movie/recommendation/MovieRecommendationResponse';
import { ReleaseDate, ReleaseDateResponse, ReleaseDateResult } from 'models/api/movie/releaseDate/ReleaseDateResponse';
import { MovieSearchResult } from 'models/api/search/MovieSearchResult';
import { Content } from 'models/Content';
import { Movie } from 'models/Movie';
import { Recommendation } from 'models/Recommendation';
import { requestConfig } from './config';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const IMAGE_URL = import.meta.env.VITE_API_IMAGE_BASE_URL;
const MOVIE_URL = `${BASE_URL}/movie`

export const getPopular = async (): Promise<Movie[]> => {
  const response = await axios.get<MovieSearchResult>(`${MOVIE_URL}/popular`, requestConfig);
  const { data } = response;
  const popularMovies: Movie[] = data.results.map(m => {
    return {
      title: m.original_title,
      posterUrl: `${IMAGE_URL}/w342/${m.poster_path}`, 
      backdropUrl: `${IMAGE_URL}/original/${m.backdrop_path}`,
      contentUrl: `/movie/${m.id}`
    }
  });
  return popularMovies;
}

export const getMovie = async (id: number): Promise<Content> => {
  const moviePromise = axios.get<MovieResponse>(`${MOVIE_URL}/${id}`, requestConfig);
  const creditsPromise = getCredits(id);
  const recommendationsPromise = getRecommendations(id);
  const certificationPromise = getCertification(id, "BR");
  const promises = [
    moviePromise, 
    creditsPromise, 
    recommendationsPromise,
    certificationPromise
  ];
  const [ movieResponse, credits, recommendations, certification ] = await Promise.all(promises);

  const { data } = movieResponse as AxiosResponse<MovieResponse>;

  const movie: Content = {
    ...data,
    ...credits as Credits,
    certification: certification as string,
    recommendations: recommendations as Recommendation[],
    backdrop_url: `${IMAGE_URL}/original/${data.backdrop_path}`,
    poster_url: `${IMAGE_URL}/w342/${data.poster_path}`
  };
  return movie;
}

export const getCredits = async(id: number): Promise<Credits> => {
  const response = await axios.get<CreditsResponse>(`${MOVIE_URL}/${id}/credits`, requestConfig);
  const { data } = response;
  const { cast, crew } = data;

  const castCrew = cast.filter(c => c.known_for_department === 'Acting')
  const producers = crew.filter(c => c.known_for_department === 'Production');
  const directors = crew.filter(c => c.known_for_department === 'Directing');

  return {
    castCrew: mapToCast(castCrew),
    producers: mapToCrew(producers),
    directors: mapToCrew(directors)
  }
}

export const getRecommendations = async(id: number): Promise<Recommendation[]> => {
  const response = await axios.get<MovieRecommendationResponse>(`${MOVIE_URL}/${id}/recommendations`, requestConfig);
  const { data } = response;
  const recommendations: Recommendation[] = data.results.map(r => {
    return {
      id: r.id,
      title: r.original_title,
      contentUrl: `/movie/${r.id}`,
      posterUrl: r.poster_path ? `${IMAGE_URL}/w342/${r.poster_path}` : '',
      backdropUrl: r.backdrop_path ? `${IMAGE_URL}/w780/${r.backdrop_path}` : ''
    }
  })

  return recommendations;
}

export const getCertification = async(id:  number, iso_3166_1_country: string): Promise<string> => {
  const releaseDates = await getReleaseDates(id);
  const countryReleaseDate = releaseDates.find(r => r.iso_3166_1 === iso_3166_1_country);

  if(!countryReleaseDate) return "";

  const { release_dates } = countryReleaseDate;

  if(release_dates.length === 0) return "";

  const certifications = release_dates.filter(r => r.certification);

  if(certifications.length === 0) return "";

  const { certification } = certifications.at(0) as ReleaseDate;

  return certification;
}

export const getReleaseDates = async(id:  number): Promise<ReleaseDateResult[]> => {
  const response = await axios.get<ReleaseDateResponse>(`${MOVIE_URL}/${id}/release_dates`, requestConfig);
  const { data } = response;
  const { results } = data;
  return results;
}

const mapToCrew = (crew: Crew[]) => {
  return crew.map(c => {
    return {
      job: c.job,
      name: c.name
    }
  });
}

const mapToCast = (cast: Cast[]) => {
  return cast.map(c => {
    return { 
      name: c.name,
      character: c.character
    }
  });
}