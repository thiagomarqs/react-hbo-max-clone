import { Cast } from "./Cast";
import { Crew } from "./Crew";

export interface Credits {
  castCrew: Cast[];
  producers: Crew[];
  directors: Crew[];
}