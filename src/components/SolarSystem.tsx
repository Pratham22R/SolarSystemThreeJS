import  { useState, useMemo, useCallback, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "@/components/SolarSystem/Scene";
import ControlsPanel from "@/components/SolarSystem/ControlsPanel";
import InfoOverlay from "@/components/SolarSystem/InfoOverlay";
import LoadingFallback from "@/components/SolarSystem/LoadingFallback";
import { Settings } from "lucide-react";
import { PLANET_DATA } from "@/components/SolarSystem/constants";

export default function SolarSystem() {
  const [planetSpeeds, setPlanetSpeeds] = useState(
    Object.keys(PLANET_DATA).reduce((acc, key) => ({ ...acc, [key]: 1 }), {})
  );
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);
  const [showControls, setShowControls] = useState(true);
  const [cameraMode, setCameraMode] = useState<"free" | "follow">("free");

  const handleSpeedChange = useCallback((planet: string, speed: number) => {
    setPlanetSpeeds((prev) => ({ ...prev, [planet]: speed }));
  }, []);

  const resetAllSpeeds = useCallback(() => {
    setPlanetSpeeds(
      Object.keys(PLANET_DATA).reduce((acc, key) => ({ ...acc, [key]: 1 }), {})
    );
  }, []);

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden font-space">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
         camera={{ position: [0, 50, 120], fov: 75 }}
          className="w-full h-full"
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
          shadows
        >
          <Scene
            planetSpeeds={planetSpeeds}
            isPaused={isPaused}
            onPlanetHover={setHoveredPlanet}
            cameraMode={cameraMode}
          />
        </Canvas>
      </Suspense>

      <ControlsPanel
        showControls={showControls}
        toggleControls={() => setShowControls(!showControls)}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
        resetAllSpeeds={resetAllSpeeds}
        cameraMode={cameraMode}
        setCameraMode={setCameraMode}
        planetSpeeds={planetSpeeds}
        handleSpeedChange={handleSpeedChange}
      />

      <InfoOverlay hoveredPlanet={hoveredPlanet} planetSpeeds={planetSpeeds} />

      <div className="fixed bottom-4 right-4 bg-card/80 backdrop-blur-md border border-border/50 rounded-xl p-3 z-10 max-w-sm">
        <p className="text-xs text-muted-foreground font-space leading-relaxed">
          🎮 <strong>Controls:</strong> Drag to rotate • Scroll to zoom • Click
          planets to focus
          <br />⚡ <strong>Features:</strong> Realistic orbits • Dynamic
          lighting • Interactive speeds
        </p>
      </div>

      {!showControls && (
        <button
          onClick={() => setShowControls(true)}
          className="fixed top-4 right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-cosmic hover:shadow-stellar transition-all duration-300 z-20"
        >
          <Settings className="animate-stellar-rotate" size={20} />
        </button>
      )}
    </div>
  );
}
