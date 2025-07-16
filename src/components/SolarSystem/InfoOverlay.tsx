import React from 'react';
import { PLANET_DATA } from './constants';

interface InfoOverlayProps {
  hoveredPlanet: string | null;
  planetSpeeds: Record<string, number>;
}

export default function InfoOverlay({ hoveredPlanet, planetSpeeds }: InfoOverlayProps) {
  const data = Object.values(PLANET_DATA).find(p => p.name === hoveredPlanet);

  if (!data) return null;

  const key = Object.keys(PLANET_DATA).find(k => PLANET_DATA[k] === data)!;

  return (
    <div className="fixed bottom-4 left-4 bg-card/90 backdrop-blur-lg border border-border/50 rounded-xl p-4 z-10 animate-float shadow-cosmic max-w-xs">
      <h4 className="text-xl font-orbitron font-bold text-foreground mb-2 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }}></span>
        {data.name}
      </h4>
      <p className="text-sm text-muted-foreground mb-3">{data.description}</p>
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Distance:</span>
          <span className="text-foreground font-orbitron">{data.distance} AU</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Size:</span>
          <span className="text-foreground font-orbitron">{data.size.toFixed(2)}× Earth</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Speed:</span>
          <span className="text-foreground font-orbitron">{(planetSpeeds[key] || 1).toFixed(2)}×</span>
        </div>
      </div>
    </div>
  );
}
