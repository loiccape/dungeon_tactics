'use client'
import React from 'react';
import { Character } from '@/app/models/CharacterModel';
import { useRouter } from 'next/navigation';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {

  const router = useRouter();

  const onCharacterSelection = () => {
    // Enregistrer le personnage dans localStorage
    localStorage.setItem('selectedCharacter', JSON.stringify(character));
    
    // Changer de page pour aller à la carte du monde
    router.push('/views/pages/map');
  }


  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-4">{character.name}</h2>
      <p className="mb-4">{character.description}</p>
      <ul className="mb-4">
        {character.skills.map((skill, index) => (
          <li key={index} className="text-sm text-gray-300">
            <span className="font-semibold text-yellow-500">{skill.name}:</span> {skill.effect} ({skill.damage} dégâts, {skill.manaCost} mana)
          </li>
        ))}
      </ul>     
      <button
        className="bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-400 transition duration-200"
        onClick={onCharacterSelection}
      >
        Choisir {character.name}
      </button>
    </div>
  );
};

export default CharacterCard;
