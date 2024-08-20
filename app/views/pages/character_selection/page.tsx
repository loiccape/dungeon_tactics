import React from 'react';
import CharacterCard from '@/app/views/components/CharacterCard';
import { Character } from '@/app/models/CharacterModel';
import { CharacterService } from '@/app/services/CharactereService';

export default function CharacterSelectionView() {
  const characters: Character[] = CharacterService.fetchCharacters();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold mb-8">Sélectionne ton Héros</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
