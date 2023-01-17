import { Cast } from "./Cast";
import { Crew } from "./Crew";
import { Producer } from "./Producer";

export interface Credits {
  castCrew: Cast[];
  producers: Producer[];
  directors: Crew[];
}