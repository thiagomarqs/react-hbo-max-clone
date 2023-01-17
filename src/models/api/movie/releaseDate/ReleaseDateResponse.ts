export interface ReleaseDate {
  certification: string;
  iso_639_1: string;
  note: string;
  release_date: Date;
  type: number;
}

export interface ReleaseDateResult {
  iso_3166_1: string;
  release_dates: ReleaseDate[];
}

export interface ReleaseDateResponse {
  id: number;
  results: ReleaseDateResult[];
}