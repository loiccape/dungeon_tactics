
export interface MapCell {
    type: 'E' | 'T' | 'W' | 'M' | 'S' | 'O' | 'D'; // Define possible cell types
  }
  

export interface MapLayout {
    layout: MapCell[][];
  }

export interface Map {
    id: string;
    name: string;
    description: string;
    layout: MapLayout;
  }
  