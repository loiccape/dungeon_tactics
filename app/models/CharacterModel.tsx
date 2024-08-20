export interface Skill {
    name: string;
    effect: string;
    damage?:number;
    shield?:number;
    manaCost: number;
  }
  
  export interface Character {
    id: string;
    name: string;
    description: string;
    skills: Skill[];
  }

  