export interface AnimeResult {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

export interface AnimeResponse {
  anime: AnimeResult;
  index: number;
}
