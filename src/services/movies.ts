import axios from 'axios';
import { Movie } from 'models/api/movie/Movie';
import { MovieResponse } from 'models/api/movie/MovieResponse';
import { requestConfig } from './config';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const IMAGE_URL = import.meta.env.VITE_API_IMAGE_BASE_URL;
const MOVIE_URL = `${BASE_URL}/movie`


export const getMovie = async (id: number): Promise<Movie> => {
  const response = await axios.get<MovieResponse>(`${MOVIE_URL}/${id}`, requestConfig);
  const { data } = response;
  const movie: Movie = {
    ...data,
    backdrop_url: `${IMAGE_URL}/original/${data.backdrop_path}`,
    poster_url: `${IMAGE_URL}/original/${data.poster_path}`
  };
  return movie;
}