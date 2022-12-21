import { CharacterResume } from '../../characters/model/character';

export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: CharacterResume[];
}
