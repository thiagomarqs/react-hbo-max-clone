import axios from 'axios';
import { MovieSearchResult } from 'models/api/search/MovieSearchResult';
import { requestConfig } from './config';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const SEARCH_URL = `${BASE_URL}/search`

export const searchMovie = async (query: string): Promise<MovieSearchResult> => {
  const URIEncodedQuery = encodeURI(query);
  const response = await axios.get<MovieSearchResult>(`${SEARCH_URL}/movie?query=${URIEncodedQuery}`, requestConfig);
  return response.data;
}