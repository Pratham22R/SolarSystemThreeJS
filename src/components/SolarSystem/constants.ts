export interface PlanetData {
  size: number;
  distance: number;
  color: string;
  speed: number;
  rotationSpeed: number;
  name: string;
  description: string;
  emissive: string;
  hasRings?: boolean;
}

export const PLANET_DATA: Record<string, PlanetData> = {
  mercury: { size: 1.2,distance: 14, color: '#8C7853', speed: 0.048, rotationSpeed: 0.006, name: 'Mercury', description: 'Closest to the Sun', emissive: '#2a2014' },
  venus:   { size: 2.5, distance: 18, color: '#FFC649', speed: 0.035, rotationSpeed: 0.004, name: 'Venus', description: 'Hottest planet', emissive: '#4a3300' },
  earth:   { size: 2.6, distance: 25, color: '#6B93D6', speed: 0.03, rotationSpeed: 0.01, name: 'Earth', description: 'Our home planet', emissive: '#0f1a2e' },
  mars:    { size: 1.4, distance: 32, color: '#C1440E', speed: 0.024, rotationSpeed: 0.0097, name: 'Mars', description: 'The Red Planet', emissive: '#2e0d03' },
  jupiter: { size: 5.8, distance: 40, color: '#D8CA9D', speed: 0.013, rotationSpeed: 0.024, name: 'Jupiter', description: 'Largest planet', emissive: '#3d3627' },
  saturn:  { size: 4, distance: 52, color: '#FAD5A5', speed: 0.0096, rotationSpeed: 0.022, name: 'Saturn', description: 'Planet with rings', emissive: '#3d342a', hasRings: true },
  uranus:  { size: 3.8, distance: 64, color: '#4FD0E7', speed: 0.0068, rotationSpeed: 0.014, name: 'Uranus', description: 'Ice giant', emissive: '#0f3337' },
  neptune: { size: 3.6, distance: 78, color: '#4B70DD', speed: 0.0054, rotationSpeed: 0.016, name: 'Neptune', description: 'Farthest planet', emissive: '#0f1837' }
};
