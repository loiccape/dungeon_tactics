import { Character } from '../models/CharacterModel';
import charactersData from '../data/characters.json';

export class CharacterController {
  static getCharacters(): Character[] {
    return charactersData as Character[];
  }

  static getCharacterById(id: string): Character | undefined {
    return charactersData.find(character => character.id === id);
  }
}
