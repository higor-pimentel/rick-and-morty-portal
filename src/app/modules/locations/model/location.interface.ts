import { CharacterResume } from '../../characters/model/character';

export interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: CharacterResume[];
}
