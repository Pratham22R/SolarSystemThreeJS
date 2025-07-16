import { PLANET_DATA } from './constants';
import { ChevronRight, ChevronLeft, Pause, Play, RotateCcw, Settings } from 'lucide-react';

interface ControlsPanelProps {
  showControls: boolean;
  toggleControls: () => void;
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
  resetAllSpeeds: () => void;
  cameraMode: 'free' | 'follow';
  setCameraMode: (mode: 'free' | 'follow') => void;
  planetSpeeds: Record<string, number>;
  handleSpeedChange: (planet: string, speed: number) => void;
}

export default function ControlsPanel({
  showControls,
  toggleControls,
  isPaused,
  setIsPaused,
  resetAllSpeeds,
  cameraMode,
  setCameraMode,
  planetSpeeds,
  handleSpeedChange,
}: ControlsPanelProps) {
  return (
    <div className={`fixed top-4 right-4 transition-transform duration-500 ease-stellar z-20 ${showControls ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="bg-card/85 backdrop-blur-lg border border-border/50 rounded-xl shadow-cosmic overflow-hidden">
        <div className="p-4 border-b border-border/30 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-orbitron font-bold text-foreground">Mission Control</h3>
            <button onClick={toggleControls} className="text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-muted/20">
              {showControls ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className="flex gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                isPaused ? 'bg-primary text-primary-foreground shadow-cosmic hover:shadow-stellar' : 'bg-secondary text-secondary-foreground shadow-stellar hover:shadow-cosmic'
              }`}
            >
              {isPaused ? <Play size={16} /> : <Pause size={16} />}
              {isPaused ? 'Resume' : 'Pause'}
            </button>
            <button
              onClick={resetAllSpeeds}
              className="px-3 py-2 rounded-lg font-medium bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              title="Reset all speeds to 1x"
            >
              <RotateCcw size={16} />
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setCameraMode(cameraMode === 'free' ? 'follow' : 'free')}
              className={`flex-1 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                cameraMode === 'follow' ? 'bg-accent text-accent-foreground shadow-nebula' : 'bg-muted text-muted-foreground'
              }`}
            >
              {cameraMode === 'follow' ? 'Auto Follow' : 'Free Camera'}
            </button>
          </div>

          <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
            <div className="flex items-center gap-2 text-sm font-orbitron font-medium text-foreground">
              <Settings size={14} />
              <span>Orbital Velocities</span>
            </div>

            {Object.entries(PLANET_DATA).map(([key, data]) => (
              <div key={key} className="space-y-2 p-2 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{data.name}</span>
                  <span className="text-xs text-muted-foreground font-orbitron tabular-nums">
                    {(planetSpeeds[key] || 1).toFixed(2)}×
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={planetSpeeds[key] || 1}
                  onChange={(e) => handleSpeedChange(key, parseFloat(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${((planetSpeeds[key] || 1) / 5) * 100}%, hsl(var(--muted)) ${((planetSpeeds[key] || 1) / 5) * 100}%, hsl(var(--muted)) 100%)`
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
