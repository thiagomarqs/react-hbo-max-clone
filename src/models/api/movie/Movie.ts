import { Genre } from "./Genre";

export interface Movie {
  id: number;
  genres: Genre[];
  original_language: string;
  original_title: string;
  overview: string;
  release_date: string;
  runtime: number;
  backdrop_url: string;
  poster_url: string;
}