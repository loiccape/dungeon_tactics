import { CharacterController } from '../controllers/CharacterController';
import { Character } from '../models/CharacterModel';

export class CharacterService {
  static fetchCharacters(): Character[] {
    return CharacterController.getCharacters();
  }

  static fetchCharacterById(id: string): Character | undefined {
    return CharacterController.getCharacterById(id);
  }
}
