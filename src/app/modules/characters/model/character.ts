export interface FilterCharacter {
  name: string;
  gender: string;
  status: string;
  species: string;
}

export interface Character {
  id: string;
  name: string;
  gender: string;
  type: string;
  status: string;
  species: string;
  episode: CharacterEpisode[];
  location: CharacterLocation;
  origin: CharacterLocation;
  image: string;
}

interface CharacterEpisode {
  id: string;
  name: string;
  episode: string;
  air_date: string;
}

interface CharacterLocation {
  id: string;
  name: string;
  dimension: string;
}

export interface CharacterResume
  extends Pick<Character, 'id' | 'name' | 'gender' | 'status' | 'image'> {}
