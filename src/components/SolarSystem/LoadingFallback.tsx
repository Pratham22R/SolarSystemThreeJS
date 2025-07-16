import React from 'react';

export default function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-stellar-rotate text-6xl mb-6">🌟</div>
        <h2 className="text-2xl font-orbitron font-bold text-foreground mb-2">Initializing Solar System</h2>
        <p className="text-muted-foreground">Loading planetary mechanics...</p>
      </div>
    </div>
  );
}
