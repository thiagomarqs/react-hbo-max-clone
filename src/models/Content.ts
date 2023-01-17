import { Cast } from "./api/movie/credits/Cast";
import { Crew } from "./api/movie/credits/Crew";
import { Genre } from "./api/movie/MovieResponse";
import { Recommendation } from "./Recommendation";

export interface Content {
  id: number;
  genres: Genre[];
  original_language: string;
  original_title: string;
  overview: string;
  release_date: string;
  runtime: number;
  backdrop_url: string;
  poster_url: string;
  certification: string;
  castCrew: Cast[];
  producers: Crew[];
  directors: Crew[];
  recommendations: Recommendation[];
}